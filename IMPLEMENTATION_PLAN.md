# Implementation Plan

## Ucel

Tento dokument rozklada praci na faze od dokumentacniho scaffoldingu po prvni hratelny slice.

## Faze

### Faze 0: Repo a projektovy scaffold

Cil:

- mit dokumentaci, git repo a unity scaffold

Vystupy:

- root dokumenty
- `.gitignore`
- `UnityProjectSkeleton`
- navazany `origin`

### Faze 1: Core runtime slice

Cil:

- jedna ovladatelna osoba
- panel osoby
- command queue
- zakladni polohy a pouta

Vystupy:

- runtime stav osoby
- queue executor
- 5-10 commandu
- zakladni UI panel

### Faze 2: Traffic stop slice

Cil:

- zastaveni auta
- interakce s ridicem
- vystup z vozidla
- kontrola u auta

Vystupy:

- civilni auto
- sluzebni auto
- traffic case
- traffic interaction flow

### Faze 3: Detention and station slice

Cil:

- spoutat
- nalozit
- odvezt
- zavrit do cely

Vystupy:

- station scene
- cell system
- case completion

### Faze 4: Save/load and stabilization

Cil:

- ulozeni a nacteni rozpracovaneho stavu

Vystupy:

- manual save/load
- serialization osob, front, pripadu a cely

## Kriticka cesta

1. command data model
2. person runtime state
3. person UI panel
4. queue execution
5. police actions
6. vehicle entry/exit
7. station and cells
8. save/load

## Acceptance milniky

### Milnik A

Hrac klikne na osobu, vidi stav a vlozi prikaz do fronty.

### Milnik B

Osoba splni:

- otoceni
- ruce nahoru
- klek

### Milnik C

Osobu lze spoutat a vest.

### Milnik D

Ridic vystoupi z auta a jde ke kontrole u auta.

### Milnik E

Pachatel je odvezen na stanici a zavren do cely.

### Milnik F

Save/load obnovi stav v pulce zasahu.

## Zavislosti

- bez hotove `queue + person state` nema smysl resit traffic stop
- bez hotove `station + cell` nelze uzavrit kriminalni pripad
- bez hotove serializace nelze spolehlive zkoumat edge case flow

## Co nedelat v prvni implementaci

- pravni databazi pokut
- velke skupiny
- velkou mapu
- veskere interiery
- vsechny druhy pripadu
