# Phase 0 1 Tasks

## Ucel

Tento dokument je startovni backlog pro `Fazi 0` a `Fazi 1`.

## Faze 0: Repo a priprava

### Task 0.1

Zalozit a zkontrolovat root dokumentaci.

Done kdyz:

- existuje README
- existuje design index
- existuji funkcni, technicke a MVP specy

### Task 0.2

Zalozit a navazat git repo.

Done kdyz:

- branch je `main`
- remote `origin` je nastaven
- repo je pripraveno na prvni commit

### Task 0.3

Pripravit `UnityProjectSkeleton`.

Done kdyz:

- existuje zakladni struktura `Assets`
- jsou pripraveny placeholder slozky

## Faze 1: Core runtime planning

### Task 1.1

Definovat finalni `PersonState` runtime schema.

Done kdyz:

- jsou uzavrene hlavni bloky stavu
- je jasne oddelen command queue a pose state

### Task 1.2

Definovat `CommandDefinition` a `CommandInstance`.

Done kdyz:

- existuje seznam MVP commandu
- je jasne, co je template a co runtime instance

### Task 1.3

Definovat MVP seznam presetů.

Done kdyz:

- jsou urceny defaultni factory presety
- je jasne, ktere jsou kliceve pro traffic stop

### Task 1.4

Definovat UI panel osoby a queue panel.

Done kdyz:

- je jasne, co je v panelu trvale videt
- je jasne, jak se maze krok a fronta

### Task 1.5

Definovat MVP event flow traffic stopu.

Done kdyz:

- je jasna happy path
- jsou jasne vetve `utek`, `odpor`, `kapitulace`

## Prvni implementacni tasky po zalozeni skutecneho projektu

### Task I.1

Vytvorit test scene pro jednu osobu a jednoho hrace.

### Task I.2

Vytvorit debug person panel.

### Task I.3

Implementovat queue executor bez animaci, jen se stavovymi prechody.

### Task I.4

Implementovat prvni tri commandy:

- `otočte se zády ke mně`
- `ruce nad hlavu`
- `klekněte si`

### Task I.5

Implementovat `spoutat ruce vzadu`.

### Task I.6

Implementovat interakci s civilnim autem.

### Task I.7

Implementovat celu a condition pro uzavreni pripadu.
