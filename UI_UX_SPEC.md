# UI UX Spec

## Ucel

Tento dokument uzavira `UI` a `UX` pro prvni hratelnou verzi policejniho command sandboxu.

Jadro UX:

- hra bezi `v realnem case`
- zadne zastaveni ani zpomaleni casu pri praci s UI
- cilem je rychle a citelne ovladani jednotlivce i skupiny

## Hlavni obrazovka

Trvale pritomne prvky:

- kamera treti osoby
- zamereny cil
- rychla lista akci pro aktualni situaci
- maly stavovy prvek aktivniho pripadu

Docasne prvky:

- panel osoby po kliknuti
- skupinovy panel pri vicevyberu
- kontextove menu akci
- pokutovy panel
- save/load panel

## Zamereni a vyber

Pravidla:

- kliknuti na osobu ji `zamkne jako aktivni cil`
- aktivni cil trva, dokud ho hrac nezmeni `tabem` nebo klikem na jiny objekt
- klik mimo zrusi `zamereni i panel`
- `tab` prepinaji jen `osoby v zaberu` a `v dosahu`

## Panel osoby

Po kliknuti na osobu se otevre jeden aktivni panel.

Musi zobrazovat:

- zakladni identitu
  role, profil, jmeno pokud je zname
- stav osoby
  poloha, orientace, kapitulace, omezeni na osobni svobode
- odeti
  hlavni vrstvy a relevantni mezistavy
- aktualni bezici krok
- frontu prikazu

Panel neukazuje:

- historii prikazu
- seznam zajistenych dukazu

## Fronta prikazu

Kazda osoba ma vlastni frontu.

Panel musi umoznit:

- videt bezici krok
- videt cekajici kroky
- smazat jednotlive kroky
- smazat cely seznam

Pravidla UX:

- prave bezici krok lze odstranit, ale pokud uz bezi animace, nejdriv dobehne
- po jeho dobehu se pokracuje dalsim krokem z fronty
- pokud se smaze cela fronta, osoba zustane v poslednim dosazenem stavu
- osoba se vrati k bezne NPC cinnosti jen pokud neni `kapitulujici` ani `omezena`

## Kontextove menu

Kontextove menu je hlavni vstup do akci.

Pravidla:

- ukazuje jen `smysluplne a fyzicky proveditelne` akce
- nesmyslne akce jsou `skryte`, ne zasedle
- varianty akce jsou samostatne polozky
  napr. `spoutat vpředu`, `spoutat vzadu`

Menu muze obsahovat:

- verbální povely
- policejni ukony
- presetove sekvence

## Rychla lista

Rychla lista je `situacne rizena`, ne pevne oddelena jen podle modu.

Pravidla:

- meni se podle aktualni situace
- muze obsahovat jednotlive akce i presety
- nesmyslne akce se skryji
- muze se rolovat

Typicke situace:

- pesi zakrok
- interakce s vozidlem
- interakce na stanici

## Skupinovy panel

Pri vicevyberu nevznika jedna sloucena karta osoby, ale `skupinovy panel`.

Rozlozeni:

- nahore `spolecna lista akci`
- dole `rozbalovaci seznam osob`

Kazda osoba ve skupine je standardne:

- `sbalena`
- zobrazuje jen zakladni stav
- zobrazuje text beziciho kroku
- zobrazuje pocet dalsich kroku ve fronte

Pravidla:

- pouhe rozkliknuti osobu ze skupiny nevyjme
- az skutecna individualni zmena ji vyjme `zcela`
- vyjmuta osoba se musi pri dalsim skupinovem pouziti znovu rucne pridat
- lze `sbalit vsechny`
- `rozbalit vsechny` neni potreba

## Pokutovy panel

Panel pokut je specialni UI pro dopravni prestupky.

Pravidla:

- autodetekce prestupku
- posledni slovo ma hrac
- hrac muze prestupky mazat a rucne pridavat
- seznam je `jen textove vyhledavatelny`
- kazdy prestupek ma vlastni posuvnik
- posuvnik ukazuje `zakonne minimum a maximum` jako `doporuceni`; hrac je muze prekrocit (nevynucuje se)
- castku lze menit:
  posuvnikem nebo rucnim ciselnym vstupem
- oba vstupy jsou vzajemne synchronizovane

Skupinove pouziti:

- vytvori se `spolecny navrh`
- individualni odchylka vyjme osobu ze skupiny

## Cela a propousteni

- pri zavirani do cely hrac `urci delku pobytu` (v hernim case)
- UI ukaze `doporucene rozmezi` dle pravniho systemu; nevynucuje ho
- kdyz zadrzenemu vyprsi cas, UI da hraci `signal`
- propusteni provadi hrac sam

## Policejni ukony v UI

- ukony se nabizeji v kontextovem menu / rychle liste, ale `nejdou do fronty`
- pri volbe ukonu se postava na kratkou vzdalenost dorovna sama
- jakykoliv pohyb hrace behem dorovnani ukon zrusi

## Save Load UX

- jen `rucni save`
- prakticky neomezeny pocet slotu
- save je `soucast kampane`
- obnovuje i:
  fronty, bezici kroky, mezistavy a svet

## Wireframe slovne

Zakladni tok jedne osoby:

1. klik na osobu
2. otevreni panelu osoby
3. viditelny stav + fronta
4. otevreni kontextoveho menu
5. vyber akce nebo preset
6. vlozeni do fronty
7. sledovani provedeni v realnem case

Zakladni tok skupiny:

1. vicevyber osob
2. otevreni skupinoveho panelu
3. spolecna akce nahore
4. pripadne rozbaleni konkretni osoby
5. individualni uprava, ktera ji ze skupiny vyjme

## Acceptance kriterium pro MVP

UX je hotove, kdyz:

- hrac behem realneho casu ovlada jednu osobu bez zmatku
- u skupiny vidi, kdo co prave dela
- muze rychle vlozit, odebrat a vymazat frontu
- pri dopravni kontrole umi bez prehrsli UI:
  vystup, kontrolu, spoutani, nalozeni a prevoz
