# Functional Spec V1

## Ucel

Tento dokument uzavira funkcni zadani prvni verze `Police Simulator`.

Projekt je:

- `single-player`
- `3D`
- `third-person`
- `open-world`, ale `ohraniceny`
- policejni `command sandbox`

## Zakladni premisa

Hrac hraje jednoho policistu nebo policistku. Je autoritou a muze v realnem case:

- zastavovat osoby
- davat verbalni povely
- vynucovat polohy
- poutat
- prohledavat
- eskortovat
- prevazet
- zavirat do cel

Hra nestoji na prestrelkach, ale na `kontrole situace`.

## Herni smycka

Zakladni smycka:

1. patrola mestem
2. prideleni pripadu nebo vlastni zjisteni
3. nalezeni osoby nebo vozidla
4. navazani kontaktu
5. ziskani kontroly nad situaci
6. rozhodnuti o dalsim postupu
7. prevoz / cela / pokuta / napomenuti / propusteni
8. dalsi pripad

## Typy pripadu

Hlavni kategorie:

- `loupez / kradez`
- `dopravni prestupek`

Vedlejsi svet:

- mensi volne prestupky se mohou obcas opakovat
- pri aktivnim hlavnim pripadu se svet soustredi na `jeden hlavni pripad`

## Struktura sveta

- cele mesto je dostupne od zacatku
- vsechny budovy jsou vstupne
- vetsina budov je jednopodlazni
- interiery maji obyvatele nebo uzivatele
- stanice je jedna centralni

## Prace s osobami

Osoba muze:

- poslouchat
- vahat
- lhat
- utikat
- aktivne odporovat
- utocit
- kapitulovat
- sama se dostavit policii

Civiliste byvaji vetsinou poslusni, podezreli mene. Poslusnost ovlivnuje i hrozba donucovacich prostredku.

## Pozice a kontrola tela

Hra detailne modeluje:

- telo
- ruce
- nohy
- orientaci
- vazbu na prostredi

Kapitulace je definovana pazemi:

- `ruce nad hlavou`
- `ruce za hlavou`

Omezeni na osobni svobode je definovano:

- `alespon jednimi poutech`

## Pouta

Samostatne existuji:

- `pouta na ruce`
- `pouta na nohy`

Ruce:

- lze poutat `vpredu`
- lze poutat `vzadu`

Nohy:

- omezuji pohyb
- rusi pokus o utek

## Prohledky

Oddelene mechaniky:

- `prohlidka osoby`
- `prohlidka vozidla`

Osobu lze prohledat:

- na povel
- nebo primym ukonem policisty

Vozidlo se prohledava po castech.

## Oděv a veci

NPC maji vrstveny odev a mezistavy.

Lze pracovat s:

- vrchnim dilem
- kalhotami
- botami
- ponozkami
- rukavicemi
- brylemi
- pokryvkou hlavy
- vezenkym odevem

Osobni veci a dukazy jsou evidovany jednotlive.

## Vozidla

Policejni vozidla:

- osobni auto
- dodavka
- autobus

Vozidla se lisi:

- vzhledem
- kapacitou

Nikoliv logikou command systemu.

## Stanice

Stanice obsahuje:

- placek
- chodby
- kancelarske prostory
- prohlidkovou / prevlekaci mistnost
- kasu
- cely

Cela:

- je pro jednu osobu
- lze ji otevrit i zavrit jen u dveri
- pres mrize je videt a lze davat povely

## Uzavreni pripadu

Kriminalni pripad:

- uzavren az kdyz jsou vsichni pachatele `v celach`

Dopravni prestupek:

- `napomenuti` konci po omluve
- `pokuta` konci po zaplaceni na stanici

## Save Load

- jen `rucni`
- kdykoliv
- vcetne svetoveho stavu, prikazu, front a rozbehnutych kroku

## MVP fokus

Prvni hratelna verze nema obsahnout cely svet. Ma overit:

- jednu dopravni kontrolu
- jednoho pachatele
- spoutani
- prevoz
- celu
- uzavreni pripadu
