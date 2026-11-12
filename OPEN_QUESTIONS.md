# Open Questions

## Ucel

Otevrene otazky k uzivatelske specifikaci, ktere se maji dorešit.
Zodpovezene body (otazky 1-16) jsou uz zapracovany do specifikaci.

## Nezodpovezene otazky

### 17. Ovladani mysi a kamerou

Hra je third-person, ale ovlada se i klikanim na osoby, kontextovym menu a panely.

- a) prepinani rezimu (klavesa prepne kamera / volny kurzor)
- b) kurzor stale viditelny, kamera se otaci jen pri drzeni tlacitka mysi
- c) zamerovani stredem obrazovky, kurzor jen pri otevrenem panelu / menu
- d) jine

Navazujici: cili hra i na herni ovladac, nebo jen klavesnice a mys?

### 18. Pauza a save

- plati "zadne zastaveni casu" i pro systemove menu (Esc)?
- lze ulozit kdykoliv, i uprostred pronasledovani nebo potycky?

### 19. Editor presetu

- patri editor presetu do MVP, nebo jsou v MVP jen pevne tovarni presety?

### 20. Prostredi a jazyk

- odehrava se hra v Cesku, podle ceskeho prava a s ceskou policii?
- jen ceska lokalizace?

### 21. Obsazeni postav

- vsechny referencni obrazky ukazuji zeny; je to jen konvence referenci, nebo zamer pro obsazeni hry?
- muze si hrac vybrat postavu (pohlavi, vzhled)?

### 22. Ucel odevniho systemu

- k cemu herne slouzi svlekani vrstev (skryte predmety pri prohlidce, realismus procesu na stanici)?

## Drobne otevrene body

- pomer herniho a realneho casu (pocita se v nem delka pobytu v cele)
- efekt spreje a obusku (predpoklad: docasne omezeni pohybu + animace, jako taser)
- katalog prohresku: struktura, obsah, doporucene tresty a pokuty
- co presne zahrnuje "reverzni proces uvezneni" pri propousteni (kroky na stanici)
- pravidla propousteni slibovana v DESIGN_DOC_INDEX mozna existuji v podkladech na hlavnim stroji

## Nesrovnalosti v dokumentech

- `CONTENT_MVP_SPEC` odklada skupinove povely, ale `UI_UX_SPEC` je ma v acceptance kriteriu MVP ("u skupiny vidi, kdo co prave dela")
- `VERTICAL_SLICE` krok 10 ("vyvede osobu na placek") predpoklada vystup zadrzeneho z policejniho auta, ale takovy povel / ukon neni v seznamu atomickych akci slice
- seznamy commandu v `CONTENT_MVP_SPEC` a `VERTICAL_SLICE` se lisi (napr. `stoupněte si k autu`, `ukažte doklady`, `vystupte z vozidla`); neni jasne, ktery plati
- MVP se odpovedmi vyrazne rozsirilo (rizeni, pronasledovani, donucovaci prostredky, dobrovolne vydani se); `IMPLEMENTATION_PLAN` a `PHASE_0_1_TASKS` to zatim nereflektuji
