# MVP Tech Spec

## Ucel

Tento dokument uzavira technicky smer pro prvni implementacni fazi.

Predpoklad:

- cilova platforma `Unity 6 LTS`
- dokumentace a scaffold zatim bez runtime kodu

## MVP technicky cil

Dodat vertical slice:

- `traffic stop`
- `command queue`
- `police actions`
- `transport`
- `cell resolution`

## Hlavni moduly

### 1. Player

- player locomotion
- camera
- targeting
- interaction range

### 2. Vehicle

- sluzebni auto
- civilni auto
- nastup a vystup
- sedadla a occupant state

### 3. Person Runtime

- identity
- control state
- pose state
- restraint state
- behavior state
- vehicle state
- station state

### 4. Command Runtime

- command definitions
- command instances
- queue executor
- preset expansion
- validation and resolution

### 5. Police Action Runtime

- cuffing
- uncuffing
- escort start/stop
- takedown
- lift
- search

### 6. Case Runtime

- jeden aktivni pripad
- progress tracking
- resolution conditions

### 7. Station Runtime

- placek
- processing room
- cells
- occupancy and lock state

### 8. UI Runtime

- person panel
- group panel
- command menu
- queue panel
- save/load panel

## Doporucena runtime skladba

Minimalni datove celky:

- `PersonState`
- `CommandDefinition`
- `CommandInstance`
- `PresetDefinition`
- `CaseState`
- `VehicleState`
- `StationState`
- `SaveGameState`

## Command pipeline

Kazdy command prochazi:

1. create
2. resolve target
3. resolve anchor
4. validate
5. enqueue
6. execute
7. wait for completion
8. apply state delta
9. finish

Preset:

- je jen `sekvence commandu`
- muze obsahovat i policejni ukony
- kroky jsou vyhodnocovany postupne

## Save scope

Save musi serializovat:

- player transform a vehicle state
- aktivni pripad
- vsechny relevantni osoby
- jejich stavy
- jejich command queues
- bezici command
- cell occupancy
- campaign presets

## Unity scaffold smer

Navrzena struktura:

```text
Assets/
  Art/
  Data/
  Prefabs/
  Scenes/
  Scripts/
  UI/
```

Datove adresare:

- `Data/Commands`
- `Data/Cases`
- `Data/Characters`
- `Data/Traffic`
- `Data/Station`

Scriptove adresare:

- `Scripts/Core`
- `Scripts/Commands`
- `Scripts/Interactions`
- `Scripts/Actions`
- `Scripts/Traffic`
- `Scripts/Station`
- `Scripts/UI`

## Hlavni technicka rizika

- vazba command queue na animacni mezistavy
- save/load u rozbehnutych kroku
- jednoznacna validace fyzicke proveditelnosti
- automaticke postaveni policisty do spravne pozice pro ukon

## Co jeste nepatri do MVP runtime

- autobus
- dodavka
- velke skupiny
- pokutovy panel s plnou pravni databazi
- vsechny typy pripadu
- detailni interior sandbox
