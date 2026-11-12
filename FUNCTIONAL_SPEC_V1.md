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

## Zdroj pripadu

Pripad vznika dvema zpusoby:

- `prideleni` dispecinkem / vysilackou
- `vlastni zjisteni` hrace (hrac sam uvidi prestupek a zakroci)

Pravidla:

- prideleny pripad nelze "zrusit"; pokud ho hrac ignoruje, pachatel mezitim `pacha dalsi prohresky`
- hrac muze kdykoliv zakrocit u jineho prestupku; `hlavnim pripadem se stava ten novy`
- puvodni pripad trva dal a jeho pachatel dal eskaluje

## Kampan

- kampan je `nekonecny sandbox` (volne pokracujici svet, v duchu Minecraftu)
- zadny pribeh, zadny postup, zadne odemykani
- kampan = jeden svet; k nemu patri jeho savy a jeho databaze presetu

## Sandbox bez hodnoceni

- hra `nehodnoti` postup hrace: zadne skore, reputace ani postihy
- hrac smi technicky zadrzet i nevinnou osobu; hra to dovoli, ale `nic to neprinese`
- pripad `nemuze selhat`:
  pachatel nemuze definitivne utect (hra ho drzi dosazitelneho)
  hrac nemuze byt vyrazen

## Duvod zadrzeni

Duvodem k zadrzeni muze byt soucasne:

- osoba je `hledana` (zjisteno z dokladu / lustraci)
- `nalez` pri prohlidce osoby nebo vozidla
- `chovani` osoby: odpor, utek, utok na policistu

Podminka:

- dany prohresek musi byt definovan v `katalogu prohresku` hry
- katalog prohresku zatim neni specifikovan (viz OPEN_QUESTIONS.md)

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

### Co rozhoduje o poslusnosti

Plati vsechny vlivy soucasne, vrstvene takto:

1. `scenar pripadu` urci vychozi sklon osoby
2. `povaha` (personalityTraits) ho konzistentne tvaruje
3. `chovani a hrozba hrace` ho posouvaji (vytazeny taser, zbran, blizkost...)
4. `nahoda` rozhodne konkretni reakci

### Dobrovolne vydani se

Nechyceny pachatel se muze sam dostavit na stanici nebo vyhledat hrace:

- jako `nahodna udalost`
- `pod tlakem` (napr. dopadeni komplice, dlouhe pronasledovani)

Patri do MVP.

### Lez

- lez = `nepravdive odpovedi v rozhovoru`
- vyzaduje dialogovy system
- `odlozeno do dalsi verze`, v MVP se neimplementuje

## Povely a fronta

- do fronty osoby jdou `pouze verbalni povely`
- povely se plni `postupne`, jeden po druhem
- `slucitelny` novy povel se zaradi na konec fronty
- `neslucitelny` novy povel smaze celou frontu; bezici animace dobehne a pak se hned provede novy povel
- neslucitelne = to, co fyzicky nejde delat soucasne
  (klecici osoba nemuze utikat, ale muze zvednout ruce)
- preset je `sekvence povelu`; neobsahuje policejni ukony

### Dosah povelu

- doslech cca `10 m` (vychozi hodnota, doladit pri testovani)
- hrac a NPC se musi `vzajemne videt`
- povel funguje i z jine mistnosti, pokud se vidi
- povel funguje i pres zavrene okno auta a pres mrize cely

## Policejni ukony

- ukony (spoutat, prohledat, vest, strhnout...) `nejdou do fronty`
- jsou to `prime ovladani hracovy postavy`
- pozice pro ukon:
  na kratkou vzdalenost se postava dorovna `automaticky` (par kroku, natoceni)
  na delsi vzdalenost musi hrac dojit `sam`
- pohyb hrace behem automatickeho dorovnani ukon `zrusi` a vrati okamzite kontrolu

## Donucovaci prostredky

V MVP:

- fyzicke strzeni
- taser
- sprej
- obusek
- hrozba

Strelna zbran:

- hrac ji ma
- strili `jen do vzduchu` (varovny vystrel) nebo zbrani `jen hrozi`
- na osoby se nestrili

Zraneni:

- `neexistuje`, zadny healthbar
- zasah taserem vyvola `omezeni pohybu` a `animaci bolesti`
- sprej a obusek: predpoklad obdobneho docasneho omezeni (k potvrzeni)

## Pronasledovani a rizeni

- hrac je `vzdy sam`; zadne posily ani partak
- hrac `ridi sluzebni auto sam`, vcetne prevozu zadrzeneho na stanici
- `automobilove pronasledovani` je soucasti MVP
- zastaveni prchajiciho vozu:
  hrac muze za jizdy vystrelit do vzduchu -> sance, ze pachatel sam zastavi a zacne kapitulovat
  jinak musi hrac `fyzicky zablokovat jizdu` vjetim pred vuz

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

Pocet cel:

- konecny (omezeni grafiky)
- ale dost velky, aby je hrac `nestihl plnit rychleji, nez se propousti`

## Propousteni

- delku pobytu v cele `urcuje hrac`
- system podle pravniho systemu ukazuje `doporucene mantinely`, ale `nevynucuje` je
- doba se pocita v `hernim case`
- kdyz zadrzenemu vyprsi cas, `UI da hraci signal`
- propustit muze `jen hrac`
- propusteni je `reverzni proces uvezneni` (v rozsahu toho, co se deje na stanici)

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
