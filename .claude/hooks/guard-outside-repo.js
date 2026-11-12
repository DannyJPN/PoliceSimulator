// PreToolUse hook: forces a permission prompt ("ask") for any write that
// targets a path outside the project directory.
//  - Write / Edit / NotebookEdit: checks the target file path exactly.
//  - Bash / PowerShell: heuristic - if the command contains a write-like
//    operation AND references a path outside the project, ask.
// Exceptions: Claude's own scratchpad (TEMP/claude) and project memory
// (~/.claude/projects/*/memory).
const path = require("path");
const os = require("os");

let raw = "";
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    return; // never break tool calls on malformed input
  }
  const cwd = input.cwd || process.cwd();
  const root = norm(process.env.CLAUDE_PROJECT_DIR || cwd, cwd);
  const home = norm(os.homedir(), cwd);
  const allowed = [
    root,
    norm(path.join(os.tmpdir(), "claude"), cwd),
  ];
  const isAllowed = (p) =>
    allowed.some((a) => p === a || p.startsWith(a + "/")) ||
    /^.*\/\.claude\/projects\/[^/]+\/memory(\/|$)/.test(p) && p.startsWith(home + "/");

  const tool = input.tool_name;
  const ti = input.tool_input || {};
  let reason = null;

  if (tool === "Write" || tool === "Edit" || tool === "NotebookEdit") {
    const target = ti.file_path || ti.notebook_path;
    if (target) {
      const p = norm(target, cwd);
      if (!isAllowed(p)) reason = `Zápis mimo repo: ${target}`;
    }
  } else if (tool === "Bash" || tool === "PowerShell") {
    const cmd = String(ti.command || "");
    const writeLike =
      /(^|[\s;&|(])(mv|cp|rm|rmdir|mkdir|touch|tee|ln|rsync|robocopy|xcopy|copy|move|del|erase|ren|rename|md|rd|tar|unzip|7z|curl|wget|cd|pushd|Set-Location|Push-Location|Move-Item|Copy-Item|Remove-Item|New-Item|Rename-Item|Set-Content|Add-Content|Clear-Content|Out-File|Export-\w+|Expand-Archive|Compress-Archive|Invoke-WebRequest|Start-BitsTransfer|mi|cpi|ri|ni|sc|ac)(?=$|[\s;&|)])/i.test(cmd) ||
      /\bsed\s+(-\w*\s+)*-i/.test(cmd) ||
      /\bgit\s+(clone|init|worktree)\b/.test(cmd) ||
      /(^|[^0-9&>])>{1,2}(?!&)/.test(cmd.replace(/\d?>\s*\/dev\/null/g, "").replace(/\$null/gi, ""));
    if (writeLike) {
      const outside = pathTokens(cmd).filter((t) => {
        if (/\$|%/.test(t)) return true; // env-var paths ($HOME, $env:X, %USERPROFILE%)
        const p = norm(t, cwd);
        return !isAllowed(p);
      });
      if (outside.length)
        reason = `Příkaz zapisuje a odkazuje na cestu mimo repo: ${outside.slice(0, 3).join(", ")}`;
    }
  }

  if (reason) {
    process.stdout.write(
      JSON.stringify({
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "ask",
          permissionDecisionReason: reason,
        },
      })
    );
  }
});

// Normalize to forward-slash, lowercase absolute path; handles /c/... (Git Bash) and ~.
function norm(p, cwd) {
  let s = String(p).trim();
  if (/^~(?=$|[\\/])/.test(s)) s = os.homedir() + s.slice(1);
  const m = /^\/([a-zA-Z])(\/|$)(.*)$/.exec(s);
  if (m) s = `${m[1]}:/${m[3]}`;
  s = path.win32.resolve(cwd, s);
  return s.replace(/\\/g, "/").replace(/\/+$/, "").toLowerCase();
}

// Extract path-like tokens that could point outside the cwd.
function pathTokens(cmd) {
  const tokens = [];
  const re = /"([^"]*)"|'([^']*)'|([^\s"';&|()<>]+)/g;
  let m;
  while ((m = re.exec(cmd))) tokens.push(m[1] ?? m[2] ?? m[3]);
  return tokens.filter((t) => {
    if (!t || t.includes("://")) return false;
    if (/^\/dev\//.test(t)) return false;
    return (
      /^[a-zA-Z]:[\\/]/.test(t) ||          // C:\ or C:/
      /^\/[a-zA-Z](\/|$)/.test(t) ||        // /c/...
      /^\/(tmp|home|usr|etc|var|opt|mnt)(\/|$)/.test(t) ||
      /^~(\/|\\|$)/.test(t) ||
      /(^|[\\/])\.\.([\\/]|$)/.test(t) ||   // ../
      /^\$(HOME|env:|\{?USERPROFILE|\{?APPDATA|\{?TEMP|\{?TMP)/i.test(t) ||
      /^%\w+%/.test(t)
    );
  });
}
