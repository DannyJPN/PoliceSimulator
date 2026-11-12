# Vertical Slice Traffic Stop

## Ucel

Tento dokument uzavira `prvni vertical slice` projektu.

Cil slice:

- overit, ze command sandbox funguje v praxi
- projit plny tok `dopravni kontrola -> zasah -> prevoz -> cela`
- nevyzadovat jeste cele mesto ani vsechny typy pripadu

## Scope

Vertical slice obsahuje:

- jednu malou mestskou oblast
- jedno sluzebni auto
- jedno civilni auto
- jednoho ridice jako hlavni cil
- moznost eskalace
- jednu stanici
- 1-2 cely
- save/load

## Start situace

Hrac patroluje.

Spusti se `dopravni pripad`.

Civilni auto se stane aktivnim cilem a nasledne je mozne:

- auto zastavit
- pristoupit k okynku
- komunikovat s ridicem
- dat mu povely
- nechat ho vystoupit
- dostat ho do kontrolni polohy
- prohledat / spoutat / nalozit

## Zakladni happy path

1. hrac zastavi vozidlo
2. pristoupi k okynku ridice
3. vyzada si ruce a doklady
4. vyda povel `vystupte z vozidla`
5. vyda preset `ke kontrole u auta`
6. provede `prohledat osobu`
7. provede `spoutat ruce vzadu`
8. prikaze `nastupte do policejniho vozidla`
9. odveze osobu na stanici
10. vyvede osobu na plácek
11. prikaze `vstupte do cely`
12. zavre celu
13. pripad se uzavre

## Alternativni vetve

### A. Dobrovolna kapitulace

Ridic:

- poslechne hned
- vystoupi
- sam zaujme kapitulační polohu

### B. Utek

Ridic:

- po zastaveni neuposlechne
- rozjede se nebo utece po vystupu
- hrac ho musi znovu dostat pod kontrolu
- pri ujeti autem: hrac ho pronasleduje ve sluzebnim aute
  varovny vystrel do vzduchu -> sance, ze zastavi a kapituluje
  jinak hrac zablokuje jizdu vjetim pred vuz
- pachatel nemuze definitivne utect

### C. Aktivni odpor

Ridic:

- nechce poslechnout
- hrac musi pouzit:
  fyzicke strzeni, taser, sprej, obusek nebo hrozbu
- strelna zbran jen k hrozbe / varovnemu vystrelu do vzduchu
- zadne zraneni; taser = docasne omezeni pohybu + animace bolesti

### D. Zadrzeni bez odporu, ale s cekanim

Hrac:

- necha osobu cekat na miste
- dodela si dalsi kroky
- az pak ji nalozi a odveze

## Co slice nemusi obsahovat

- spolujezdce
- autobus a dodavku
- pokutovy panel
- chodce
- detailni prohlidku vozidla po vsech sekcich
- prohlidkovou mistnost a prevlekani
- velke skupiny
- slozite interiery

## Hlavni acceptance criteria

Slice je hotovy, kdyz:

- hrac zastavi vozidlo a ridic na nej reaguje
- panel osoby ukazuje stav a frontu
- funguje aspon 1 preset u auta
- funguje spoutani a sejmuti pout
- funguje nastup do policejniho auta
- funguje prevoz na stanici
- funguje vstup do cely a zamceni
- pripad se uzavre az po zamceni pachatele do cely
- save/load obnovi rozpracovany stav vcetne fronty

## Minimalni seznam atomickych akci pro slice

- `ukažte ruce`
- `ukažte doklady`
- `vystupte z vozidla`
- `stoupněte si k autu`
- `ruce na auto`
- `dejte nohy od sebe`
- `prohledat osobu`
- `spoutat ruce vzadu`
- `nastupte do vozidla`
- `vstupte do cely`
- `zavřít celu`

## Minimalni presety pro slice

- `ke kontrole u auta`
- `vystupte a kapitulujte`
- `vystupte a ke mně`

## Rizika

- nejvetsi riziko je konzistence `fronty prikazu` a `animaci`
- druhe riziko je vazba mezi `prikazem`, `fyzickou proveditelnosti` a `automatickym presunem policisty`
- treti riziko je `save/load` u rozbehnutych mezikroku

## Doporučene dalsi rozsireni po slice

- spolujezdci
- skupinove povely
- pokuty
- kasa
- detailni prohlidka vozidla
- prohlidkova mistnost
- prevlekani do vezenkeho odevu
