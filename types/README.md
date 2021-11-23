# @darkforest_eth/types

This package contains commonly-used data types in the Dark Forest webclient,
also accessible in node.js server environments.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/types
```

```bash
yarn add @darkforest_eth/types
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as types from 'http://cdn.skypack.dev/@darkforest_eth/types';
```

## Table of contents

### Classes

- [DFAnimation](classes/DFAnimation.md)
- [DFStatefulAnimation](classes/DFStatefulAnimation.md)

### Interfaces

- [ArrivalWithTimer](interfaces/ArrivalWithTimer.md)
- [DeleteMessagesRequest](interfaces/DeleteMessagesRequest.md)
- [DiagnosticUpdater](interfaces/DiagnosticUpdater.md)
- [Diagnostics](interfaces/Diagnostics.md)
- [EmojiFlagBody](interfaces/EmojiFlagBody.md)
- [GasPrices](interfaces/GasPrices.md)
- [Leaderboard](interfaces/Leaderboard.md)
- [LeaderboardEntry](interfaces/LeaderboardEntry.md)
- [NetworkEvent](interfaces/NetworkEvent.md)
- [PlanetDefaults](interfaces/PlanetDefaults.md)
- [PlanetMessage](interfaces/PlanetMessage.md)
- [PlanetMessageRequest](interfaces/PlanetMessageRequest.md)
- [PlanetMessageResponse](interfaces/PlanetMessageResponse.md)
- [PostMessageRequest](interfaces/PostMessageRequest.md)
- [QueuedArrival](interfaces/QueuedArrival.md)
- [SignedMessage](interfaces/SignedMessage.md)

### Type aliases

- [Abstract](README.md#abstract)
- [Artifact](README.md#artifact)
- [ArtifactId](README.md#artifactid)
- [ArtifactPointValues](README.md#artifactpointvalues)
- [ArtifactRarity](README.md#artifactrarity)
- [ArtifactType](README.md#artifacttype)
- [AutoGasSetting](README.md#autogassetting)
- [Awaited](README.md#awaited)
- [Biome](README.md#biome)
- [ClaimedCoords](README.md#claimedcoords)
- [ClaimedLocation](README.md#claimedlocation)
- [EthAddress](README.md#ethaddress)
- [LocatablePlanet](README.md#locatableplanet)
- [LocationId](README.md#locationid)
- [NFTMetadata](README.md#nftmetadata)
- [NetworkHealthSummary](README.md#networkhealthsummary)
- [Planet](README.md#planet)
- [PlanetBonus](README.md#planetbonus)
- [PlanetLevel](README.md#planetlevel)
- [PlanetMessageBody](README.md#planetmessagebody)
- [PlanetMessageType](README.md#planetmessagetype)
- [PlanetType](README.md#planettype)
- [Player](README.md#player)
- [RevealedCoords](README.md#revealedcoords)
- [RevealedLocation](README.md#revealedlocation)
- [SpaceType](README.md#spacetype)
- [Upgrade](README.md#upgrade)
- [UpgradeBranchName](README.md#upgradebranchname)
- [UpgradeBranches](README.md#upgradebranches)
- [UpgradeLevels](README.md#upgradelevels)
- [UpgradeState](README.md#upgradestate)
- [VoyageId](README.md#voyageid)
- [WorldCoords](README.md#worldcoords)
- [WorldLocation](README.md#worldlocation)

### Variables

- [ArtifactRarity](README.md#artifactrarity)
- [ArtifactRarityNames](README.md#artifactraritynames)
- [ArtifactType](README.md#artifacttype)
- [ArtifactTypeNames](README.md#artifacttypenames)
- [AutoGasSetting](README.md#autogassetting)
- [Biome](README.md#biome)
- [BiomeNames](README.md#biomenames)
- [PlanetLevel](README.md#planetlevel)
- [PlanetLevelNames](README.md#planetlevelnames)
- [PlanetMessageType](README.md#planetmessagetype)
- [PlanetType](README.md#planettype)
- [PlanetTypeNames](README.md#planettypenames)
- [SpaceType](README.md#spacetype)
- [SpaceTypeNames](README.md#spacetypenames)
- [UpgradeBranchName](README.md#upgradebranchname)

### Functions

- [artifactNameFromArtifact](README.md#artifactnamefromartifact)

## Type aliases

### Abstract

Ƭ **Abstract**<`T`, `Id`\>: `Any.Type`<`T`, `Id`\>

An abstract type used to differentiate between common types, like `number` or `string`.
The `Id` type parameter is the key to vary upon and should be unique unless being used to subtype.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | `T`               |
| `Id` | extends `Any.Key` |

---

### Artifact

Ƭ **Artifact**: `Object`

Represents data associated with a Dark Forest artifact NFT. Note
that some `Artifact` fields store client-specific data that the blockchain is
not aware of, such as `unconfirmedDepositArtifact` (tracks pending
depositArtifact transaction that involves this artifact). If you're using a
client that can't send transactions, these fields should be ignored.

#### Type declaration

| Name                             | Type                                         |
| :------------------------------- | :------------------------------------------- |
| `artifactType`                   | [`ArtifactType`](README.md#artifacttype)     |
| `currentOwner`                   | [`EthAddress`](README.md#ethaddress)         |
| `discoverer`                     | [`EthAddress`](README.md#ethaddress)         |
| `id`                             | [`ArtifactId`](README.md#artifactid)         |
| `isInititalized`                 | `boolean`                                    |
| `lastActivated`                  | `number`                                     |
| `lastDeactivated`                | `number`                                     |
| `mintedAtTimestamp`              | `number`                                     |
| `onPlanetId?`                    | [`LocationId`](README.md#locationid)         |
| `onVoyageId?`                    | [`VoyageId`](README.md#voyageid)             |
| `planetBiome`                    | [`Biome`](README.md#biome)                   |
| `planetDiscoveredOn`             | [`LocationId`](README.md#locationid)         |
| `rarity`                         | [`ArtifactRarity`](README.md#artifactrarity) |
| `timeDelayedUpgrade`             | [`Upgrade`](README.md#upgrade)               |
| `unconfirmedActivateArtifact?`   | `UnconfirmedActivateArtifact`                |
| `unconfirmedDeactivateArtifact?` | `UnconfirmedDeactivateArtifact`              |
| `unconfirmedDepositArtifact?`    | `UnconfirmedDepositArtifact`                 |
| `unconfirmedMove?`               | `UnconfirmedMove`                            |
| `unconfirmedWithdrawArtifact?`   | `UnconfirmedWithdrawArtifact`                |
| `upgrade`                        | [`Upgrade`](README.md#upgrade)               |
| `wormholeTo?`                    | [`LocationId`](README.md#locationid)         |

---

### ArtifactId

Ƭ **ArtifactId**: [`Abstract`](README.md#abstract)<`string`, `"ArtifactId"`\>

A unique identifier for a Dark Forest NFT artifact. This is a 64-character
lowercase hex string not prefixed with 0x. ArtifactIDs should only be
instantiated through ArtifactIDs should only be instantiated through
`artifactIdFromHexStr`, `artifactIdFromDecStr`, and `artifactIdFromEthersBN`
in `serde`.

---

### ArtifactPointValues

Ƭ **ArtifactPointValues**: `Object`

mapping from ArtifactRarity to points earned for finding this artifact.

#### Index signature

▪ [ArtifactRarity: `number`]: `number`

---

### ArtifactRarity

Ƭ **ArtifactRarity**: [`Abstract`](README.md#abstract)<`number`, `"ArtifactRarity"`\>

Abstract type representing an artifact rarity level.

---

### ArtifactType

Ƭ **ArtifactType**: [`Abstract`](README.md#abstract)<`number`, `"ArtifactType"`\>

Abstract type representing an artifact type.

---

### AutoGasSetting

Ƭ **AutoGasSetting**: [`Abstract`](README.md#abstract)<`string`, `"AutoGasSetting"`\>

The user can choose to have the client automatically choose a gas price for their transactions,
depending on how much they are willing to pay and how fast they want their transactions to confirm.

---

### Awaited

Ƭ **Awaited**<`T`\>: `Any.Await`<`T`\>

Unwraps a Promise type into the type it contains. Useful when working with Promise-returning functions.

#### Type parameters

| Name |
| :--- |
| `T`  |

---

### Biome

Ƭ **Biome**: [`Abstract`](README.md#abstract)<`number`, `"Biome"`\>

Abstract type representing a biome.

---

### ClaimedCoords

Ƭ **ClaimedCoords**: [`WorldCoords`](README.md#worldcoords) & { `hash`: [`LocationId`](README.md#locationid) ; `revealer`: [`EthAddress`](README.md#ethaddress) ; `score`: `number` }

Represents a planet location that has been broadcast on-chain

---

### ClaimedLocation

Ƭ **ClaimedLocation**: [`WorldLocation`](README.md#worldlocation) & { `revealer`: [`EthAddress`](README.md#ethaddress) }

---

### EthAddress

Ƭ **EthAddress**: [`Abstract`](README.md#abstract)<`string`, `"EthAddress"`\>

This is expected to be a 40-character, lowercase hex string, prefixed with 0x
(so 42 characters in total). EthAddress should only ever be instantiated
through the `address` function in `serde`.

---

### LocatablePlanet

Ƭ **LocatablePlanet**: [`Planet`](README.md#planet) & { `biome`: [`Biome`](README.md#biome) ; `location`: [`WorldLocation`](README.md#worldlocation) }

A planet whose coordinates are known to the client.

---

### LocationId

Ƭ **LocationId**: [`Abstract`](README.md#abstract)<`string`, `"LocationId"`\>

a unique identifier for a location in the universe (corresponding to some
underlying coordinates (x, y)). This is a 64-character lowercase hex string
not prefixed with 0x. LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN` in `serde`.

---

### NFTMetadata

Ƭ **NFTMetadata**: `Object`

#### Type declaration

| Name          | Type             |
| :------------ | :--------------- |
| `attributes`  | `NFTAttribute`[] |
| `description` | `string`         |
| `image`       | `string`         |
| `name`        | `string`         |

---

### NetworkHealthSummary

Ƭ **NetworkHealthSummary**: [[`AutoGasSetting`](README.md#autogassetting), `number`][]

On the server we keep track of how fast each auto gas setting confirms in practice.

---

### Planet

Ƭ **Planet**: `Object`

Represents a Dark Forest planet object (planets, asteroid fields, quasars,
spacetime rips, and foundries). Note that some `Planet` fields (1) store
client-specific data that the blockchain is not aware of, such as
`unconfirmedDepartures` (tracks pending moves originating at this planet that
have been submitted to the blockchain from a client), or (2) store derived
data that is calculated separately client-side, such as `silverSpent` and
`bonus`. So this object does not cleanly map to any single object in the
DarkForestCore contract (or even any collection of objects).

#### Type declaration

| Name                             | Type                                                               |
| :------------------------------- | :----------------------------------------------------------------- |
| `bonus`                          | [`PlanetBonus`](README.md#planetbonus)                             |
| `claimer?`                       | [`EthAddress`](README.md#ethaddress)                               |
| `coordsRevealed`                 | `boolean`                                                          |
| `defense`                        | `number`                                                           |
| `destroyed`                      | `boolean`                                                          |
| `emojiBobAnimation?`             | [`DFAnimation`](classes/DFAnimation.md)                            |
| `emojiZoopAnimation?`            | [`DFAnimation`](classes/DFAnimation.md)                            |
| `emojiZoopOutAnimation?`         | [`DFStatefulAnimation`](classes/DFStatefulAnimation.md)<`string`\> |
| `energy`                         | `number`                                                           |
| `energyCap`                      | `number`                                                           |
| `energyGrowth`                   | `number`                                                           |
| `hasTriedFindingArtifact`        | `boolean`                                                          |
| `hatLevel`                       | `number`                                                           |
| `heldArtifactIds`                | [`ArtifactId`](README.md#artifactid)[]                             |
| `isHomePlanet`                   | `boolean`                                                          |
| `isInContract`                   | `boolean`                                                          |
| `lastLoadedServerState?`         | `number`                                                           |
| `lastUpdated`                    | `number`                                                           |
| `loadingServerState`             | `boolean`                                                          |
| `localPhotoidUpgrade?`           | [`Upgrade`](README.md#upgrade)                                     |
| `locationId`                     | [`LocationId`](README.md#locationid)                               |
| `messages?`                      | [`PlanetMessage`](interfaces/PlanetMessage.md)<`unknown`\>[]       |
| `needsServerRefresh`             | `boolean`                                                          |
| `owner`                          | [`EthAddress`](README.md#ethaddress)                               |
| `perlin`                         | `number`                                                           |
| `planetLevel`                    | [`PlanetLevel`](README.md#planetlevel)                             |
| `planetType`                     | [`PlanetType`](README.md#planettype)                               |
| `prospectedBlockNumber?`         | `number`                                                           |
| `range`                          | `number`                                                           |
| `revealer?`                      | [`EthAddress`](README.md#ethaddress)                               |
| `silver`                         | `number`                                                           |
| `silverCap`                      | `number`                                                           |
| `silverGrowth`                   | `number`                                                           |
| `silverSpent`                    | `number`                                                           |
| `spaceType`                      | [`SpaceType`](README.md#spacetype)                                 |
| `speed`                          | `number`                                                           |
| `syncedWithContract`             | `boolean`                                                          |
| `unconfirmedActivateArtifact?`   | `UnconfirmedActivateArtifact`                                      |
| `unconfirmedAddEmoji`            | `boolean`                                                          |
| `unconfirmedBuyHats`             | `UnconfirmedBuyHat`[]                                              |
| `unconfirmedClearEmoji`          | `boolean`                                                          |
| `unconfirmedDeactivateArtifact?` | `UnconfirmedDeactivateArtifact`                                    |
| `unconfirmedDepartures`          | `UnconfirmedMove`[]                                                |
| `unconfirmedDepositArtifact?`    | `UnconfirmedDepositArtifact`                                       |
| `unconfirmedFindArtifact?`       | `UnconfirmedFindArtifact`                                          |
| `unconfirmedPlanetTransfers`     | `UnconfirmedPlanetTransfer`[]                                      |
| `unconfirmedProspectPlanet?`     | `UnconfirmedProspectPlanet`                                        |
| `unconfirmedReveal?`             | `UnconfirmedReveal`                                                |
| `unconfirmedUpgrades`            | `UnconfirmedUpgrade`[]                                             |
| `unconfirmedWithdrawArtifact?`   | `UnconfirmedWithdrawArtifact`                                      |
| `unconfirmedWithdrawSilver?`     | `UnconfirmedWithdrawSilver`                                        |
| `upgradeState`                   | [`UpgradeState`](README.md#upgradestate)                           |

---

### PlanetBonus

Ƭ **PlanetBonus**: [`boolean`, `boolean`, `boolean`, `boolean`, `boolean`]

A list of five flags, indicating whether the planet has an attached comet
doubling each of five stats: (in order) [energyCap, energyGrowth, range,
speed, defense]

---

### PlanetLevel

Ƭ **PlanetLevel**: [`Abstract`](README.md#abstract)<`number`, `"PlanetLevel"`\>

Abstract type representing a planet level.

---

### PlanetMessageBody

Ƭ **PlanetMessageBody**: [`EmojiFlagBody`](interfaces/EmojiFlagBody.md) \| `unknown`

Thinking about future message types.

---

### PlanetMessageType

Ƭ **PlanetMessageType**: [`Abstract`](README.md#abstract)<`string`, `"PlanetMessageType"`\>

Abstract type representing a type of planet message.

---

### PlanetType

Ƭ **PlanetType**: [`Abstract`](README.md#abstract)<`number`, `"PlanetType"`\>

Abstract type representing a planet type.

---

### Player

Ƭ **Player**: `Object`

Represents a player; corresponds fairly closely with the analogous contract
struct

#### Type declaration

| Name                  | Type                                 | Description          |
| :-------------------- | :----------------------------------- | :------------------- |
| `address`             | [`EthAddress`](README.md#ethaddress) | -                    |
| `homePlanetId`        | [`LocationId`](README.md#locationid) | -                    |
| `initTimestamp`       | `number`                             | seconds (not millis) |
| `lastClaimTimestamp`  | `number`                             | -                    |
| `lastRevealTimestamp` | `number`                             | seconds (not millis) |
| `score`               | `number`                             | -                    |
| `twitter?`            | `string`                             | -                    |

---

### RevealedCoords

Ƭ **RevealedCoords**: [`WorldCoords`](README.md#worldcoords) & { `hash`: [`LocationId`](README.md#locationid) ; `revealer`: [`EthAddress`](README.md#ethaddress) }

Represents a planet location that has been broadcast on-chain

---

### RevealedLocation

Ƭ **RevealedLocation**: [`WorldLocation`](README.md#worldlocation) & { `revealer`: [`EthAddress`](README.md#ethaddress) }

---

### SpaceType

Ƭ **SpaceType**: [`Abstract`](README.md#abstract)<`number`, `"SpaceType"`\>

Abstract type representing a type of space.

---

### Upgrade

Ƭ **Upgrade**: `Object`

The effects of an upgrade on the stats of a planet. Both upgrades purchased
for silver as well as artifacts of certain types can modify stats of a
planet.

#### Type declaration

| Name                  | Type     |
| :-------------------- | :------- |
| `defMultiplier`       | `number` |
| `energyCapMultiplier` | `number` |
| `energyGroMultiplier` | `number` |
| `rangeMultiplier`     | `number` |
| `speedMultiplier`     | `number` |

---

### UpgradeBranchName

Ƭ **UpgradeBranchName**: [`Abstract`](README.md#abstract)<`number`, `"UpgradeBranchName"`\>

Abstract type representing an upgrade branch.

---

### UpgradeBranches

Ƭ **UpgradeBranches**: [[`UpgradeLevels`](README.md#upgradelevels), [`UpgradeLevels`](README.md#upgradelevels), [`UpgradeLevels`](README.md#upgradelevels)]

Stores the stat effects of upgrades of all three branches: defense, range,
speed.

---

### UpgradeLevels

Ƭ **UpgradeLevels**: [[`Upgrade`](README.md#upgrade), [`Upgrade`](README.md#upgrade), [`Upgrade`](README.md#upgrade), [`Upgrade`](README.md#upgrade)]

On a single upgrade branch, the stat effects of the four upgrades.

---

### UpgradeState

Ƭ **UpgradeState**: [`number`, `number`, `number`]

How many times a planet has been upgraded along each of the three branches:
defense, range, and speed

---

### VoyageId

Ƭ **VoyageId**: [`Abstract`](README.md#abstract)<`string`, `"VoyageId"`\>

a voyage UID. these start at 1 and auto-increment in the contract. this is
immutable and the only place a VoyageId should ever be created is on
initial deserialization of a QueuedArrival from contract data (see `serde`)

---

### WorldCoords

Ƭ **WorldCoords**: `Object`

Represents the coordinates of a location in the world.

#### Type declaration

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

---

### WorldLocation

Ƭ **WorldLocation**: `Object`

A location in the world with relevant properties: the location's ID
(deterministically generated from its coords), the spacetype perlin value at
these coordinates, and the biomebase perlin value at these coordinates
(combined with spacetype to derive the biome here)

#### Type declaration

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `biomebase` | `number`                               |
| `coords`    | [`WorldCoords`](README.md#worldcoords) |
| `hash`      | [`LocationId`](README.md#locationid)   |
| `perlin`    | `number`                               |

## Variables

### ArtifactRarity

• **ArtifactRarity**: `Object`

Enumeration of artifact rarity levels. Common = 1, Mythic = 5

#### Type declaration

| Name        | Type                                         |
| :---------- | :------------------------------------------- |
| `Common`    | [`ArtifactRarity`](README.md#artifactrarity) |
| `Epic`      | [`ArtifactRarity`](README.md#artifactrarity) |
| `Legendary` | [`ArtifactRarity`](README.md#artifactrarity) |
| `Mythic`    | [`ArtifactRarity`](README.md#artifactrarity) |
| `Rare`      | [`ArtifactRarity`](README.md#artifactrarity) |
| `Unknown`   | [`ArtifactRarity`](README.md#artifactrarity) |

---

### ArtifactRarityNames

• **ArtifactRarityNames**: `Object`

Mapping from ArtifactRarity to pretty-printed names.

---

### ArtifactType

• **ArtifactType**: `Object`

Enumeration of artifact types.

#### Type declaration

| Name              | Type                                     |
| :---------------- | :--------------------------------------- |
| `BlackDomain`     | [`ArtifactType`](README.md#artifacttype) |
| `BloomFilter`     | [`ArtifactType`](README.md#artifacttype) |
| `Colossus`        | [`ArtifactType`](README.md#artifacttype) |
| `Monolith`        | [`ArtifactType`](README.md#artifacttype) |
| `PhotoidCannon`   | [`ArtifactType`](README.md#artifacttype) |
| `PlanetaryShield` | [`ArtifactType`](README.md#artifacttype) |
| `Pyramid`         | [`ArtifactType`](README.md#artifacttype) |
| `Spaceship`       | [`ArtifactType`](README.md#artifacttype) |
| `Unknown`         | [`ArtifactType`](README.md#artifacttype) |
| `Wormhole`        | [`ArtifactType`](README.md#artifacttype) |

---

### ArtifactTypeNames

• **ArtifactTypeNames**: `Object`

Mapping from ArtifactType to pretty-printed names.

---

### AutoGasSetting

• **AutoGasSetting**: `Object`

#### Type declaration

| Name      | Type                                         |
| :-------- | :------------------------------------------- |
| `Average` | [`AutoGasSetting`](README.md#autogassetting) |
| `Fast`    | [`AutoGasSetting`](README.md#autogassetting) |
| `Slow`    | [`AutoGasSetting`](README.md#autogassetting) |

---

### Biome

• **Biome**: `Object`

Enumeration of the biomes in the game. OCEAN = 1, CORRUPTED = 10

#### Type declaration

| Name        | Type                       |
| :---------- | :------------------------- |
| `CORRUPTED` | [`Biome`](README.md#biome) |
| `DESERT`    | [`Biome`](README.md#biome) |
| `FOREST`    | [`Biome`](README.md#biome) |
| `GRASSLAND` | [`Biome`](README.md#biome) |
| `ICE`       | [`Biome`](README.md#biome) |
| `LAVA`      | [`Biome`](README.md#biome) |
| `OCEAN`     | [`Biome`](README.md#biome) |
| `SWAMP`     | [`Biome`](README.md#biome) |
| `TUNDRA`    | [`Biome`](README.md#biome) |
| `UNKNOWN`   | [`Biome`](README.md#biome) |
| `WASTELAND` | [`Biome`](README.md#biome) |

---

### BiomeNames

• **BiomeNames**: `Object`

Mapping from Biome to pretty-printed names.

---

### PlanetLevel

• **PlanetLevel**: `Object`

Enumeration of the possible planet levels.

#### Type declaration

| Name    | Type                                   |
| :------ | :------------------------------------- |
| `EIGHT` | [`PlanetLevel`](README.md#planetlevel) |
| `FIVE`  | [`PlanetLevel`](README.md#planetlevel) |
| `FOUR`  | [`PlanetLevel`](README.md#planetlevel) |
| `NINE`  | [`PlanetLevel`](README.md#planetlevel) |
| `ONE`   | [`PlanetLevel`](README.md#planetlevel) |
| `SEVEN` | [`PlanetLevel`](README.md#planetlevel) |
| `SIX`   | [`PlanetLevel`](README.md#planetlevel) |
| `THREE` | [`PlanetLevel`](README.md#planetlevel) |
| `TWO`   | [`PlanetLevel`](README.md#planetlevel) |
| `ZERO`  | [`PlanetLevel`](README.md#planetlevel) |

---

### PlanetLevelNames

• **PlanetLevelNames**: `Object`

Mapping from PlanetLevel to pretty-printed names.

---

### PlanetMessageType

• **PlanetMessageType**: `Object`

Each message type has a corresponding entry here.

#### Type declaration

| Name        | Type                                               |
| :---------- | :------------------------------------------------- |
| `EmojiFlag` | [`PlanetMessageType`](README.md#planetmessagetype) |

---

### PlanetType

• **PlanetType**: `Object`

Enumeration of the planet types. (PLANET = 0, SILVER_BANK = 4)

#### Type declaration

| Name           | Type                                 |
| :------------- | :----------------------------------- |
| `PLANET`       | [`PlanetType`](README.md#planettype) |
| `RUINS`        | [`PlanetType`](README.md#planettype) |
| `SILVER_BANK`  | [`PlanetType`](README.md#planettype) |
| `SILVER_MINE`  | [`PlanetType`](README.md#planettype) |
| `TRADING_POST` | [`PlanetType`](README.md#planettype) |

---

### PlanetTypeNames

• **PlanetTypeNames**: `Object`

Mapping from PlanetType to pretty-printed names.

---

### SpaceType

• **SpaceType**: `Object`

Enumeration of the types of space in the game. NEBULA = 0, DEAD_SPACE = 3

#### Type declaration

| Name         | Type                               |
| :----------- | :--------------------------------- |
| `DEAD_SPACE` | [`SpaceType`](README.md#spacetype) |
| `DEEP_SPACE` | [`SpaceType`](README.md#spacetype) |
| `NEBULA`     | [`SpaceType`](README.md#spacetype) |
| `SPACE`      | [`SpaceType`](README.md#spacetype) |

---

### SpaceTypeNames

• **SpaceTypeNames**: `Object`

Mapping from SpaceType to pretty-printed names.

---

### UpgradeBranchName

• **UpgradeBranchName**: `Object`

Enumeration of the three upgrade branches.

#### Type declaration

| Name      | Type                                               |
| :-------- | :------------------------------------------------- |
| `Defense` | [`UpgradeBranchName`](README.md#upgradebranchname) |
| `Range`   | [`UpgradeBranchName`](README.md#upgradebranchname) |
| `Speed`   | [`UpgradeBranchName`](README.md#upgradebranchname) |

## Functions

### artifactNameFromArtifact

▸ **artifactNameFromArtifact**(`artifact`): `string`

Deterministically generates the name of the artifact from its ID.

#### Parameters

| Name       | Type                             | Description                         |
| :--------- | :------------------------------- | :---------------------------------- |
| `artifact` | [`Artifact`](README.md#artifact) | The artifact to generate a name for |

#### Returns

`string`
