# Data Model Spec

## Ucel

Tento dokument uzavira `runtime datovy model` pro MVP policejniho simulatoru.

Cil:

- mit jasne oddelene stavy osoby
- udrzet command system konzistentni
- pripravit se na save/load a pozdejsi `Unity` implementaci

## 1. Person

Kazda osoba ma tyto hlavni bloky:

- `IdentityState`
- `CaseState`
- `ControlState`
- `PoseState`
- `RestraintState`
- `MovementState`
- `VehicleState`
- `ClothingState`
- `InventoryState`
- `BehaviorState`
- `CommandQueueState`
- `StationState`

## 2. IdentityState

Obsah:

- `personId`
- `role`
  pachatel, spolupachatel, obet, svedek, civilista, pracovnik stanice
- `identified`
- `nameKnown`
- `displayProfile`
- `documentPresent`
- `personalityTraits`

Poznamka:

- jmeno se odhali az po dokladech
- pred identifikaci muze byt pachatel jen `silueta`

## 3. CaseState

Obsah:

- `inActiveCase`
- `caseRole`
- `isTrackedSuspect`
- `isIdentifiedSuspect`
- `isResolvedForCase`

Pravidlo:

- kriminalni pripad se uzavira az kdyz jsou vsichni pachatele `v celach`

## 4. ControlState

Obsah:

- `isUnderPoliceAttention`
- `isCapitulating`
- `isDeprivedOfLiberty`
- `isWaiting`
- `isEscorted`
- `isReleased`

Definice:

- `isCapitulating` plati jen pri paznich polohach:
  `ruce nad hlavou`, `ruce za hlavou`
- `isDeprivedOfLiberty` plati pri `alespon jednech poutech`

Oba stavy:

- blokuji navrat do bezne NPC cinnosti

## 5. PoseState

Obsah:

- `bodyPose`
- `armPose`
- `legPose`
- `orientationToOfficer`
- `environmentAnchorType`
- `environmentAnchorId`

BodyPose minimum:

- stand
- kneel_upright
- sit
- sit_on_heels
- sit_cross_legged
- sit_legs_extended
- prone

ArmPose minimum:

- arms_up
- hands_behind_head
- hands_front
- hands_behind_back
- hands_on_wall
- hands_on_car
- hands_on_bars
- palms_shown
- backs_shown
- fingers_spread
- fingers_interlaced

LegPose minimum:

- legs_together
- legs_apart
- legs_extended
- legs_bent
- ankles_crossed

## 6. RestraintState

Obsah:

- `handRestraint`
  none / front / back
- `legRestraint`
  none / restrained

Dopady:

- pouta na rukou `vpred` dovoluji jen kompatibilni polohy rukou
- pouta na rukou `vzadu` rusi dalsi polohy pazí
- pouta na nohou omezuji mobilitu a rusi pokus o utek

## 7. MovementState

Obsah:

- `canWalk`
- `canTakeSmallSteps`
- `canBeEscorted`
- `keepDistanceMode`
- `stayCloseMode`
- `currentMovementGoal`

Pravidla:

- fyzicky vest lze jen `stojici osobu`
- cekani neeskaluje, pokud je osoba uz `pod kontrolou`

## 8. VehicleState

Obsah:

- `inVehicle`
- `vehicleId`
- `vehicleRole`
  ridic, spolujezdec, zadni cestujici, detainee_transport
- `canPerformVehicleCommands`

Pravidla:

- osoba ve vozidle muze plnit jen prikazy fyzicky mozne pro vozidlo
- po nastupu automaticky `ceka`

## 9. ClothingState

Obsah:

- `topPresent`
- `pantsPresent`
- `shoesPresent`
- `socksPresent`
- `glovesPresent`
- `headwearPresent`
- `glassesPresent`
- `sleevesRolled`
- `pantLegsRolled`
- `prisonUniformPresent`

Pravidla:

- detailni vrstvy se sleduji po `mezistavech`
- spodni pradlo se nesvléká
- uniforma hrace je pevna a mimo tento model

## 10. InventoryState

Obsah:

- `documentItem`
- `heldItem`
- `bagItem`
- `pocketItems`
- `seizedItems`

Kazda vec ma:

- `itemId`
- `ownerId`
- `sourceLocation`
  kapsa, kufr, prihradka, ruka, mistnost

## 11. BehaviorState

Obsah:

- `behaviorMode`
  idle, comply, hesitate, lie, flee, resist, attack, surrender
- `isBegging`
- `voluntarySurrenderMode`

Dulezity detail:

- pachatel muze `sam vyhledat policistu` nebo `prijit na stanici`

## 12. CommandQueueState

Obsah:

- `currentCommand`
- `queuedCommands`
- `lastResolvedResult`

Pravidla:

- kazda osoba ma vlastni frontu
- skupinovy prikaz se do front `rozkopiruje`
- prave bezici krok lze smazat
- pokud uz bezi animace, dokonci se
- presety a prikazy se rusi novym neslucitelnym povelem
- preset lze prerusit novym povelem `mezi kroky`

## 13. CommandDefinition

Staticka definice:

- `commandDefinitionId`
- `commandType`
- `label`
- `category`
- `defaultTargetType`
- `requiresLineOfSight`
- `requiresAudibility`
- `requiresOfficerPositioning`
- `compatibilityRules`
- `preconditionRules`

## 14. CommandInstance

Runtime instance:

- `commandInstanceId`
- `definitionId`
- `targetPersonId`
- `secondaryTargetId`
- `status`
- `sourceType`
  direct, preset, group_copy
- `groupBatchId`
- `createdAt`
- `startedAt`
- `finishedAt`
- `resolvedAnchorId`
- `resolvedOfficerPosition`
- `resultType`

## 15. PresetDefinition

Obsah:

- `presetId`
- `name`
- `steps`
  pole `CommandDefinitionRef` nebo authoring stepu
- `isFactoryDefault`

Pravidla:

- preset je `sekvence akci policisty`
- muze obsahovat i policejni ukony
- muze obsahovat typ cile:
  zed, auto, mrize, mistnost, vozidlo
- tovární presety se drzi bokem
- `factory reset` prepise databazi presetu

## 16. StationState

Obsah:

- `insideStation`
- `insideCell`
- `cellId`
- `insideProcessingRoom`
- `insideCashDeskArea`
- `waitingOnStation`

Pravidla:

- cela je `1 osoba = 1 cela`
- cela muze byt otevrena i zavrena
- i v cele lze davat povely

## 17. Save Model

Save musi obsahovat:

- player state
- world time
- active case
- vsechny relevantni osoby
- jejich plne runtime stavy
- fronty prikazu
- bezici command instance
- vozidla
- stan cely
- preset databazi kampane

## 18. MVP minimum

Pro prvni hratelnou verzi staci serializovat:

- jednoho pachatele
- jedno policejni vozidlo
- jedno civilni vozidlo
- jednu stanici
- 1-2 cely
- jednu aktivni dopravni kontrolu

## 19. Doporuceni pro implementaci

Nekodovat to jako jeden velky `NPC mega object`.

Drzet oddelene:

- identitu
- chovani
- polohy
- omezeni
- command queue
- stanove zarazeni

Jinak se rozsype validace prikazu.
