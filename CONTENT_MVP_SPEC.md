# Content MVP Spec

## Ucel

Tento dokument uzavira `obsahovy rozsah` MVP.

MVP neni cele mesto ani cela hra. Je to prvni hratelny slice, ktery musi dodat pocit:

- policejni kontroly
- posloupnosti povelu
- zadrzeni
- prevozu
- zavreni do cely

## Minimalni herni obsah

### Lokace

- mala mestska oblast
- jedna silnice vhodna pro traffic stop
- jedna policejni stanice

### Vozidla

- 1 sluzebni auto
- 1 civilni auto

### NPC

- 1 ridic jako hlavni osoba
- volitelne 1 jednoduchy okoli civilista bez hluboke interakce

### Stanice

- placek
- chodba
- processing room
- 1-2 cely

## Nutne commandy

### Pohyb

- `stoupněte si ke mně`
- `ustupte ode mě`
- `čekejte tady`

### Orientace

- `otočte se ke mně`
- `otočte se zády ke mně`

### Polohy

- `klekněte si`
- `lehněte si na břicho`

### Ruce

- `ruce nad hlavu`
- `ruce za hlavu`
- `ruce na auto`

### Nohy

- `dejte nohy od sebe`

### Vozidlo

- `ukažte ruce`
- `ukažte doklady`
- `vystupte z vozidla`
- `nastupte do vozidla`

### Policejni ukony

- `prohledat osobu`
- `spoutat ruce vzadu`
- `sejmout pouta`
- `fyzicky vést`
- `stáhnout na kolena`
- `stáhnout na břicho`
- `zvednout do stoje`

Pozn.: policejni ukony nejdou do fronty, jsou primym ovladanim hrace.

### Donucovaci prostredky

- `taser`
- `sprej`
- `obušek`
- `výstřel do vzduchu` (i za jizdy)
- `hrozba zbraní`

### Rizeni

- hrac ridi sluzebni auto
- pronasledovani prchajiciho vozu
- zablokovani jizdy vjetim pred vuz

### Cela

- `vstupte do cely`
- `zavřít celu`

## Nutne defaultni presety

- `ke kontrole u auta`
- `vystupte a kapitulujte`
- `vystupte a ke mně`
- `čekejte tady`

## Nutne behavior varianty pachatele

- spoluprace
- kapitulace
- utek (pesky i autem)
- odpor
- dobrovolne vydani se (nahodne / pod tlakem)

## Nutne vyreseni pripadu

MVP musi umet:

- pripad otevrit
- drzet ho aktivni po cely tok
- uzavrit ho az po `zavreni pachatele do cely`

## Co zamerne odkladame

- pokuty
- napomenuti
- kasa
- spolujezdce
- skupinove povely
- plny odevni system
- prohlidku vozidla po sekcich
- processing room workflow
- prevlekani do vezenkeho odevu
