# Design Document Index

## Ucel

Tento dokument slouzi jako rozcestnik navrhove dokumentace pro projekt `Police Simulator`.

Smysl teto sady dokumentu:

- uzavrit UI a UX smer pro command sandbox
- uzavrit runtime datovy model NPC a prikazu
- uzavrit prvni hratelny `vertical slice`
- pripravit podklady pro pozdejsi implementaci v `Unity`

## Hlavni dokumenty

### 1. Funkcni specifikace

Soubor:
[FUNCTIONAL_SPEC_V1.md](C:\Users\Krupa\Desktop\Private\policesim\FUNCTIONAL_SPEC_V1.md)

Obsah:

- hlavni herni smycka
- role hrace
- druhy pripadu
- command sandbox pravidla
- pravidla zadrzeni, stanice, cely a propousteni

### 2. Technicka specifikace

Soubor:
[MVP_TECH_SPEC.md](C:\Users\Krupa\Desktop\Private\policesim\MVP_TECH_SPEC.md)

Obsah:

- systemova architektura MVP
- hlavni runtime moduly
- command pipeline
- save/load scope
- unity scaffold smer

### 3. UI a UX specifikace

Soubor:
[UI_UX_SPEC.md](C:\Users\Krupa\Desktop\Private\policesim\UI_UX_SPEC.md)

Obsah:

- layout obrazovky
- panel osoby
- skupinovy panel
- fronta prikazu
- kontextove menu
- rychle akce
- save/load UX

### 4. Datovy model

Soubor:
[DATA_MODEL_SPEC.md](C:\Users\Krupa\Desktop\Private\policesim\DATA_MODEL_SPEC.md)

Obsah:

- identity osoby
- runtime stavy
- pouta a polohy
- command queue
- preset model
- save model

### 5. MVP obsah

Soubor:
[CONTENT_MVP_SPEC.md](C:\Users\Krupa\Desktop\Private\policesim\CONTENT_MVP_SPEC.md)

Obsah:

- MVP herni obsah
- seznam nutnych prikazu
- seznam defaultnich presetů
- minimalni lokace a NPC typy

### 6. Prvni vertical slice

Soubor:
[VERTICAL_SLICE_TRAFFIC_STOP.md](C:\Users\Krupa\Desktop\Private\policesim\VERTICAL_SLICE_TRAFFIC_STOP.md)

Obsah:

- scope prvniho slice
- event flow dopravni kontroly
- mozne eskalace
- uzavreni pripadu
- minimalni acceptance criteria

### 7. Implementacni plan

Soubor:
[IMPLEMENTATION_PLAN.md](C:\Users\Krupa\Desktop\Private\policesim\IMPLEMENTATION_PLAN.md)

Obsah:

- faze vyvoje
- milniky
- zavislosti
- kriticka cesta

### 8. Startovni backlog

Soubor:
[PHASE_0_1_TASKS.md](C:\Users\Krupa\Desktop\Private\policesim\PHASE_0_1_TASKS.md)

Obsah:

- konkretni ulohy pro pripravu repa a Unity projektu
- prvni implementacni tasky
- acceptance body pro prvni faze

### 9. Otevrene otazky

Soubor:
[OPEN_QUESTIONS.md](C:\Users\Krupa\Desktop\Private\policesim\OPEN_QUESTIONS.md)

Obsah:

- nezodpovezene otazky k uzivatelske specifikaci
- drobne otevrene body
- nesrovnalosti mezi dokumenty

### 10. Unity scaffold

Slozka:
[UnityProjectSkeleton](C:\Users\Krupa\Desktop\Private\policesim\UnityProjectSkeleton)

Obsah:

- navrzena adresarova struktura
- prazdny scaffold pro budoucni projekt
- bez runtime kodu

## Stav navrhove sady

Aktualni stav:

- funkcni specifikace: hotovo
- technicka specifikace: hotovo
- UI a UX: hotovo ve verzi `v1`
- datovy model: hotovo ve verzi `v1`
- MVP obsah: hotovo ve verzi `v1`
- vertical slice: hotovo ve verzi `v1`
- implementacni plan: hotovo ve verzi `v1`
- phase backlog: hotovo ve verzi `v1`
- unity scaffold: pripraven

## Doporucene poradi cteni

1. [FUNCTIONAL_SPEC_V1.md](C:\Users\Krupa\Desktop\Private\policesim\FUNCTIONAL_SPEC_V1.md)
2. [MVP_TECH_SPEC.md](C:\Users\Krupa\Desktop\Private\policesim\MVP_TECH_SPEC.md)
3. [DATA_MODEL_SPEC.md](C:\Users\Krupa\Desktop\Private\policesim\DATA_MODEL_SPEC.md)
4. [UI_UX_SPEC.md](C:\Users\Krupa\Desktop\Private\policesim\UI_UX_SPEC.md)
5. [CONTENT_MVP_SPEC.md](C:\Users\Krupa\Desktop\Private\policesim\CONTENT_MVP_SPEC.md)
6. [VERTICAL_SLICE_TRAFFIC_STOP.md](C:\Users\Krupa\Desktop\Private\policesim\VERTICAL_SLICE_TRAFFIC_STOP.md)
7. [IMPLEMENTATION_PLAN.md](C:\Users\Krupa\Desktop\Private\policesim\IMPLEMENTATION_PLAN.md)
8. [PHASE_0_1_TASKS.md](C:\Users\Krupa\Desktop\Private\policesim\PHASE_0_1_TASKS.md)
9. [UnityProjectSkeleton](C:\Users\Krupa\Desktop\Private\policesim\UnityProjectSkeleton)
