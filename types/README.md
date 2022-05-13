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
- [AsteroidRendererType](interfaces/AsteroidRendererType.md)
- [BackgroundRendererType](interfaces/BackgroundRendererType.md)
- [BaseRenderer](interfaces/BaseRenderer.md)
- [BeltRendererType](interfaces/BeltRendererType.md)
- [BlackDomainRendererType](interfaces/BlackDomainRendererType.md)
- [CanvasCoords](interfaces/CanvasCoords.md)
- [CaptureZoneRendererType](interfaces/CaptureZoneRendererType.md)
- [Chunk](interfaces/Chunk.md)
- [CircleRendererType](interfaces/CircleRendererType.md)
- [DeleteMessagesRequest](interfaces/DeleteMessagesRequest.md)
- [DiagnosticUpdater](interfaces/DiagnosticUpdater.md)
- [Diagnostics](interfaces/Diagnostics.md)
- [EmojiFlagBody](interfaces/EmojiFlagBody.md)
- [GameViewport](interfaces/GameViewport.md)
- [GasPrices](interfaces/GasPrices.md)
- [IRendererConfig](interfaces/IRendererConfig.md)
- [Leaderboard](interfaces/Leaderboard.md)
- [LeaderboardEntry](interfaces/LeaderboardEntry.md)
- [LineRendererType](interfaces/LineRendererType.md)
- [MineBodyRendererType](interfaces/MineBodyRendererType.md)
- [MineRendererType](interfaces/MineRendererType.md)
- [ModalPosition](interfaces/ModalPosition.md)
- [NetworkEvent](interfaces/NetworkEvent.md)
- [PerlinConfig](interfaces/PerlinConfig.md)
- [PerlinRendererType](interfaces/PerlinRendererType.md)
- [PersistedTransaction](interfaces/PersistedTransaction.md)
- [PlanetCosmeticInfo](interfaces/PlanetCosmeticInfo.md)
- [PlanetDefaults](interfaces/PlanetDefaults.md)
- [PlanetMessage](interfaces/PlanetMessage.md)
- [PlanetMessageRequest](interfaces/PlanetMessageRequest.md)
- [PlanetMessageResponse](interfaces/PlanetMessageResponse.md)
- [PlanetRenderInfo](interfaces/PlanetRenderInfo.md)
- [PlanetRenderManagerType](interfaces/PlanetRenderManagerType.md)
- [PlanetRendererType](interfaces/PlanetRendererType.md)
- [PostMessageRequest](interfaces/PostMessageRequest.md)
- [QuasarBodyRendererType](interfaces/QuasarBodyRendererType.md)
- [QuasarRayRendererType](interfaces/QuasarRayRendererType.md)
- [QuasarRendererType](interfaces/QuasarRendererType.md)
- [QueuedArrival](interfaces/QueuedArrival.md)
- [Radii](interfaces/Radii.md)
- [RectRendererType](interfaces/RectRendererType.md)
- [Rectangle](interfaces/Rectangle.md)
- [RenderedArtifact](interfaces/RenderedArtifact.md)
- [RingRendererType](interfaces/RingRendererType.md)
- [RuinsRendererType](interfaces/RuinsRendererType.md)
- [SignedMessage](interfaces/SignedMessage.md)
- [SpaceRendererType](interfaces/SpaceRendererType.md)
- [SpacetimeRipRendererType](interfaces/SpacetimeRipRendererType.md)
- [SpriteRendererType](interfaces/SpriteRendererType.md)
- [TextRendererType](interfaces/TextRendererType.md)
- [Transaction](interfaces/Transaction.md)
- [TransactionCollection](interfaces/TransactionCollection.md)
- [UIRendererType](interfaces/UIRendererType.md)
- [UnminedRendererType](interfaces/UnminedRendererType.md)
- [VoyageRendererType](interfaces/VoyageRendererType.md)
- [WormholeRendererType](interfaces/WormholeRendererType.md)

### Type aliases

- [Abstract](README.md#abstract)
- [ArrivalType](README.md#arrivaltype)
- [Artifact](README.md#artifact)
- [ArtifactId](README.md#artifactid)
- [ArtifactPointValues](README.md#artifactpointvalues)
- [ArtifactRarity](README.md#artifactrarity)
- [ArtifactType](README.md#artifacttype)
- [AttribProps](README.md#attribprops)
- [AttribType](README.md#attribtype)
- [AutoGasSetting](README.md#autogassetting)
- [Biome](README.md#biome)
- [CaptureZone](README.md#capturezone)
- [ClaimedCoords](README.md#claimedcoords)
- [ClaimedLocation](README.md#claimedlocation)
- [ContractMethodName](README.md#contractmethodname)
- [CursorState](README.md#cursorstate)
- [DrawMode](README.md#drawmode)
- [EthAddress](README.md#ethaddress)
- [EthTxStatus](README.md#ethtxstatus)
- [HSLVec](README.md#hslvec)
- [HatType](README.md#hattype)
- [LocatablePlanet](README.md#locatableplanet)
- [LocationId](README.md#locationid)
- [ModalId](README.md#modalid)
- [ModalManagerEvent](README.md#modalmanagerevent)
- [ModalName](README.md#modalname)
- [ModalPositions](README.md#modalpositions)
- [NFTMetadata](README.md#nftmetadata)
- [NetworkHealthSummary](README.md#networkhealthsummary)
- [Planet](README.md#planet)
- [PlanetBonus](README.md#planetbonus)
- [PlanetLevel](README.md#planetlevel)
- [PlanetMessageBody](README.md#planetmessagebody)
- [PlanetMessageType](README.md#planetmessagetype)
- [PlanetType](README.md#planettype)
- [Player](README.md#player)
- [PluginId](README.md#pluginid)
- [RGBAVec](README.md#rgbavec)
- [RGBVec](README.md#rgbvec)
- [RegisterResponse](README.md#registerresponse)
- [RenderZIndex](README.md#renderzindex)
- [RendererProgram](README.md#rendererprogram)
- [RendererType](README.md#renderertype)
- [RevealedCoords](README.md#revealedcoords)
- [RevealedLocation](README.md#revealedlocation)
- [RuinsInfo](README.md#ruinsinfo)
- [Scaling](README.md#scaling)
- [Setting](README.md#setting)
- [SpaceColorConfiguration](README.md#spacecolorconfiguration)
- [SpaceType](README.md#spacetype)
- [TextAlign](README.md#textalign)
- [TextAnchor](README.md#textanchor)
- [TooltipName](README.md#tooltipname)
- [TransactionId](README.md#transactionid)
- [Translation](README.md#translation)
- [UniformJSType](README.md#uniformjstype)
- [UniformProps](README.md#uniformprops)
- [UniformType](README.md#uniformtype)
- [Upgrade](README.md#upgrade)
- [UpgradeBranchName](README.md#upgradebranchname)
- [UpgradeBranches](README.md#upgradebranches)
- [UpgradeLevels](README.md#upgradelevels)
- [UpgradeState](README.md#upgradestate)
- [Vec3](README.md#vec3)
- [VoyageId](README.md#voyageid)
- [WhitelistStatusResponse](README.md#whiteliststatusresponse)
- [WorldCoords](README.md#worldcoords)
- [WorldLocation](README.md#worldlocation)
- [Wormhole](README.md#wormhole)

### Variables

- [ArrivalType](README.md#arrivaltype)
- [ArtifactRarity](README.md#artifactrarity)
- [ArtifactRarityNames](README.md#artifactraritynames)
- [ArtifactType](README.md#artifacttype)
- [ArtifactTypeNames](README.md#artifacttypenames)
- [AttribType](README.md#attribtype)
- [AutoGasSetting](README.md#autogassetting)
- [Biome](README.md#biome)
- [BiomeNames](README.md#biomenames)
- [CursorState](README.md#cursorstate)
- [DrawMode](README.md#drawmode)
- [HatType](README.md#hattype)
- [ModalManagerEvent](README.md#modalmanagerevent)
- [ModalName](README.md#modalname)
- [PlanetLevel](README.md#planetlevel)
- [PlanetLevelNames](README.md#planetlevelnames)
- [PlanetMessageType](README.md#planetmessagetype)
- [PlanetType](README.md#planettype)
- [PlanetTypeNames](README.md#planettypenames)
- [RenderZIndex](README.md#renderzindex)
- [RendererType](README.md#renderertype)
- [Setting](README.md#setting)
- [SpaceType](README.md#spacetype)
- [SpaceTypeNames](README.md#spacetypenames)
- [TextAlign](README.md#textalign)
- [TextAnchor](README.md#textanchor)
- [TooltipName](README.md#tooltipname)
- [UniformType](README.md#uniformtype)
- [UpgradeBranchName](README.md#upgradebranchname)

### Functions

- [artifactNameFromArtifact](README.md#artifactnamefromartifact)

## Type aliases

### Abstract

Ƭ **Abstract**<`Type`, `Token`\>: `Type` & `Tagged`<`Token`\>

An abstract type used to differentiate between common types, like `number` or `string`.
The `Token` type parameter is the key to vary upon and should be unique unless being used to subtype.

#### Type parameters

| Name    | Type      |
| :------ | :-------- |
| `Type`  | `Type`    |
| `Token` | `unknown` |

---

### ArrivalType

Ƭ **ArrivalType**: [`Abstract`](README.md#abstract)<`number`, `"ArrivalType"`\>

Abstract type representing an arrival type.

---

### Artifact

Ƭ **Artifact**: `Object`

Represents data associated with a Dark Forest artifact NFT. Note
that some `Artifact` fields store client-specific data that the blockchain is
not aware of, such as `unconfirmedDepositArtifact` (tracks pending
depositArtifact transaction that involves this artifact). If you're using a
client that can't send transactions, these fields should be ignored.

#### Type declaration

| Name                 | Type                                                           |
| :------------------- | :------------------------------------------------------------- |
| `activations`        | `number`                                                       |
| `artifactType`       | [`ArtifactType`](README.md#artifacttype)                       |
| `controller`         | [`EthAddress`](README.md#ethaddress)                           |
| `currentOwner`       | [`EthAddress`](README.md#ethaddress)                           |
| `discoverer`         | [`EthAddress`](README.md#ethaddress)                           |
| `id`                 | [`ArtifactId`](README.md#artifactid)                           |
| `isInititalized`     | `boolean`                                                      |
| `lastActivated`      | `number`                                                       |
| `lastDeactivated`    | `number`                                                       |
| `mintedAtTimestamp`  | `number`                                                       |
| `onPlanetId?`        | [`LocationId`](README.md#locationid)                           |
| `onVoyageId?`        | [`VoyageId`](README.md#voyageid)                               |
| `planetBiome`        | [`Biome`](README.md#biome)                                     |
| `planetDiscoveredOn` | [`LocationId`](README.md#locationid)                           |
| `rarity`             | [`ArtifactRarity`](README.md#artifactrarity)                   |
| `timeDelayedUpgrade` | [`Upgrade`](README.md#upgrade)                                 |
| `transactions?`      | [`TransactionCollection`](interfaces/TransactionCollection.md) |
| `upgrade`            | [`Upgrade`](README.md#upgrade)                                 |
| `wormholeTo?`        | [`LocationId`](README.md#locationid)                           |

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

### AttribProps

Ƭ **AttribProps**: `Object`

#### Type declaration

| Name        | Type                                 |
| :---------- | :----------------------------------- |
| `dim`       | `number`                             |
| `name`      | `string`                             |
| `normalize` | `boolean`                            |
| `type`      | [`AttribType`](README.md#attribtype) |

---

### AttribType

Ƭ **AttribType**: [`Abstract`](README.md#abstract)<`number`, `"AttribType"`\>

---

### AutoGasSetting

Ƭ **AutoGasSetting**: [`Abstract`](README.md#abstract)<`string`, `"AutoGasSetting"`\>

The user can choose to have the client automatically choose a gas price for their transactions,
depending on how much they are willing to pay and how fast they want their transactions to confirm.

---

### Biome

Ƭ **Biome**: [`Abstract`](README.md#abstract)<`number`, `"Biome"`\>

Abstract type representing a biome.

---

### CaptureZone

Ƭ **CaptureZone**: `Object`

#### Type declaration

| Name     | Type                                   |
| :------- | :------------------------------------- |
| `coords` | [`WorldCoords`](README.md#worldcoords) |
| `radius` | `number`                               |

---

### ClaimedCoords

Ƭ **ClaimedCoords**: [`WorldCoords`](README.md#worldcoords) & { `hash`: [`LocationId`](README.md#locationid) ; `revealer`: [`EthAddress`](README.md#ethaddress) ; `score`: `number` }

Represents a planet location that has been broadcast on-chain

---

### ClaimedLocation

Ƭ **ClaimedLocation**: [`WorldLocation`](README.md#worldlocation) & { `revealer`: [`EthAddress`](README.md#ethaddress) }

---

### ContractMethodName

Ƭ **ContractMethodName**: `"revealLocation"` \| `"initializePlayer"` \| `"move"` \| `"upgradePlanet"` \| `"buyHat"` \| `"transferPlanet"` \| `"findArtifact"` \| `"prospectPlanet"` \| `"depositArtifact"` \| `"withdrawArtifact"` \| `"activateArtifact"` \| `"deactivateArtifact"` \| `"withdrawSilver"` \| `"useKey"` \| `"adminUseKey"` \| `"addKeys"` \| `"giveSpaceShips"` \| `"createLobby"` \| `"invadePlanet"` \| `"capturePlanet"`

---

### CursorState

Ƭ **CursorState**: [`Abstract`](README.md#abstract)<`string`, `"CursorState"`\>

---

### DrawMode

Ƭ **DrawMode**: [`Abstract`](README.md#abstract)<`number`, `"DrawMode"`\>

---

### EthAddress

Ƭ **EthAddress**: [`Abstract`](README.md#abstract)<`string`, `"EthAddress"`\>

This is expected to be a 40-character, lowercase hex string, prefixed with 0x
(so 42 characters in total). EthAddress should only ever be instantiated
through the `address` function in `serde`.

---

### EthTxStatus

Ƭ **EthTxStatus**: `"Init"` \| `"Processing"` \| `"Prioritized"` \| `"Submit"` \| `"Confirm"` \| `"Fail"` \| `"Cancel"`

---

### HSLVec

Ƭ **HSLVec**: readonly [`number`, `number`, `number`]

---

### HatType

Ƭ **HatType**: [`Abstract`](README.md#abstract)<`string`, `"HatType"`\>

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

### ModalId

Ƭ **ModalId**: [`ModalName`](README.md#modalname) \| [`PluginId`](README.md#pluginid)

Modals can either be built into the game, or spawned by a plugin.

---

### ModalManagerEvent

Ƭ **ModalManagerEvent**: [`Abstract`](README.md#abstract)<`string`, `"ModalManagerEvent"`\>

---

### ModalName

Ƭ **ModalName**: [`Abstract`](README.md#abstract)<`string`, `"ModalName"`\>

Modals built into the game have a human-readable name.

---

### ModalPositions

Ƭ **ModalPositions**: `Map`<[`ModalId`](README.md#modalid), [`ModalPosition`](interfaces/ModalPosition.md)\>

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
DarkForest contract (or even any collection of objects).

#### Type declaration

| Name                      | Type                                                               |
| :------------------------ | :----------------------------------------------------------------- |
| `bonus`                   | [`PlanetBonus`](README.md#planetbonus)                             |
| `capturer?`               | [`EthAddress`](README.md#ethaddress)                               |
| `claimer?`                | [`EthAddress`](README.md#ethaddress)                               |
| `coordsRevealed`          | `boolean`                                                          |
| `defense`                 | `number`                                                           |
| `destroyed`               | `boolean`                                                          |
| `emojiBobAnimation?`      | [`DFAnimation`](classes/DFAnimation.md)                            |
| `emojiZoopAnimation?`     | [`DFAnimation`](classes/DFAnimation.md)                            |
| `emojiZoopOutAnimation?`  | [`DFStatefulAnimation`](classes/DFStatefulAnimation.md)<`string`\> |
| `energy`                  | `number`                                                           |
| `energyCap`               | `number`                                                           |
| `energyGrowth`            | `number`                                                           |
| `hasTriedFindingArtifact` | `boolean`                                                          |
| `hatLevel`                | `number`                                                           |
| `heldArtifactIds`         | [`ArtifactId`](README.md#artifactid)[]                             |
| `invadeStartBlock?`       | `number`                                                           |
| `invader?`                | [`EthAddress`](README.md#ethaddress)                               |
| `isHomePlanet`            | `boolean`                                                          |
| `isInContract`            | `boolean`                                                          |
| `lastLoadedServerState?`  | `number`                                                           |
| `lastUpdated`             | `number`                                                           |
| `loadingServerState`      | `boolean`                                                          |
| `localPhotoidUpgrade?`    | [`Upgrade`](README.md#upgrade)                                     |
| `locationId`              | [`LocationId`](README.md#locationid)                               |
| `messages?`               | [`PlanetMessage`](interfaces/PlanetMessage.md)<`unknown`\>[]       |
| `needsServerRefresh`      | `boolean`                                                          |
| `owner`                   | [`EthAddress`](README.md#ethaddress)                               |
| `pausers`                 | `number`                                                           |
| `perlin`                  | `number`                                                           |
| `planetLevel`             | [`PlanetLevel`](README.md#planetlevel)                             |
| `planetType`              | [`PlanetType`](README.md#planettype)                               |
| `prospectedBlockNumber?`  | `number`                                                           |
| `range`                   | `number`                                                           |
| `revealer?`               | [`EthAddress`](README.md#ethaddress)                               |
| `silver`                  | `number`                                                           |
| `silverCap`               | `number`                                                           |
| `silverGrowth`            | `number`                                                           |
| `silverSpent`             | `number`                                                           |
| `spaceJunk`               | `number`                                                           |
| `spaceType`               | [`SpaceType`](README.md#spacetype)                                 |
| `speed`                   | `number`                                                           |
| `syncedWithContract`      | `boolean`                                                          |
| `transactions?`           | [`TransactionCollection`](interfaces/TransactionCollection.md)     |
| `unconfirmedAddEmoji`     | `boolean`                                                          |
| `unconfirmedClearEmoji`   | `boolean`                                                          |
| `upgradeState`            | [`UpgradeState`](README.md#upgradestate)                           |

---

### PlanetBonus

Ƭ **PlanetBonus**: [`boolean`, `boolean`, `boolean`, `boolean`, `boolean`, `boolean`]

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
| `claimedShips`        | `boolean`                            | -                    |
| `homePlanetId`        | [`LocationId`](README.md#locationid) | -                    |
| `initTimestamp`       | `number`                             | seconds (not millis) |
| `lastClaimTimestamp`  | `number`                             | -                    |
| `lastRevealTimestamp` | `number`                             | seconds (not millis) |
| `score`               | `number`                             | -                    |
| `spaceJunk`           | `number`                             | -                    |
| `spaceJunkLimit`      | `number`                             | -                    |
| `twitter?`            | `string`                             | -                    |

---

### PluginId

Ƭ **PluginId**: [`Abstract`](README.md#abstract)<`string`, `"PluginId"`\>

---

### RGBAVec

Ƭ **RGBAVec**: [`number`, `number`, `number`, `number`]

---

### RGBVec

Ƭ **RGBVec**: [`number`, `number`, `number`]

---

### RegisterResponse

Ƭ **RegisterResponse**: `Object`

#### Type declaration

| Name         | Type      |
| :----------- | :-------- |
| `error?`     | `string`  |
| `inProgress` | `boolean` |
| `success?`   | `boolean` |

---

### RenderZIndex

Ƭ **RenderZIndex**: [`Abstract`](README.md#abstract)<`number`, `"RenderZIndex"`\>

---

### RendererProgram

Ƭ **RendererProgram**: `Object`

#### Type declaration

| Name             | Type                                                           |
| :--------------- | :------------------------------------------------------------- |
| `attribs`        | { `[key: string]`: [`AttribProps`](README.md#attribprops); }   |
| `fragmentShader` | `string`                                                       |
| `uniforms`       | { `[key: string]`: [`UniformProps`](README.md#uniformprops); } |
| `vertexShader`   | `string`                                                       |

---

### RendererType

Ƭ **RendererType**: [`Abstract`](README.md#abstract)<`number`, `"RendererType"`\>

Enum for determining the type of renderer
Each renderer should contain a variable called 'rendererType'
'rendererType' should be a enum that corresponds with the type of renderer it is

---

### RevealedCoords

Ƭ **RevealedCoords**: [`WorldCoords`](README.md#worldcoords) & { `hash`: [`LocationId`](README.md#locationid) ; `revealer`: [`EthAddress`](README.md#ethaddress) }

Represents a planet location that has been broadcast on-chain

---

### RevealedLocation

Ƭ **RevealedLocation**: [`WorldLocation`](README.md#worldlocation) & { `revealer`: [`EthAddress`](README.md#ethaddress) }

---

### RuinsInfo

Ƭ **RuinsInfo**: `Object`

#### Index signature

▪ [PlanetLevel: `number`]: { `props`: [`number`, `number`, `number`, `number`] ; `weights`: [`number`, `number`, `number`, `number`] }

---

### Scaling

Ƭ **Scaling**: `Object`

#### Type declaration

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

---

### Setting

Ƭ **Setting**: [`Abstract`](README.md#abstract)<`string`, `"Setting"`\>

---

### SpaceColorConfiguration

Ƭ **SpaceColorConfiguration**: `Object`

#### Type declaration

| Name                | Type     |
| :------------------ | :------- |
| `deadSpaceColor?`   | `string` |
| `deepSpaceColor?`   | `string` |
| `innerNebulaColor?` | `string` |
| `nebulaColor?`      | `string` |
| `spaceColor?`       | `string` |

---

### SpaceType

Ƭ **SpaceType**: [`Abstract`](README.md#abstract)<`number`, `"SpaceType"`\>

Abstract type representing a type of space.

---

### TextAlign

Ƭ **TextAlign**: [`Abstract`](README.md#abstract)<`number`, `"TextAlign"`\>

---

### TextAnchor

Ƭ **TextAnchor**: [`Abstract`](README.md#abstract)<`number`, `"TextAnchor"`\>

---

### TooltipName

Ƭ **TooltipName**: [`Abstract`](README.md#abstract)<`string`, `"TooltipName"`\>

---

### TransactionId

Ƭ **TransactionId**: `number`

A unique incrementing number that identifies a transaction.

---

### Translation

Ƭ **Translation**: `Object`

#### Type declaration

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

---

### UniformJSType

Ƭ **UniformJSType**: `mat4` \| `mat3` \| `number` \| [`Vec3`](README.md#vec3)

---

### UniformProps

Ƭ **UniformProps**: `Object`

#### Type declaration

| Name   | Type                                   |
| :----- | :------------------------------------- |
| `name` | `string`                               |
| `type` | [`UniformType`](README.md#uniformtype) |

---

### UniformType

Ƭ **UniformType**: [`Abstract`](README.md#abstract)<`number`, `"UniformType"`\>

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

### Vec3

Ƭ **Vec3**: [`number`, `number`, `number`]

---

### VoyageId

Ƭ **VoyageId**: [`Abstract`](README.md#abstract)<`string`, `"VoyageId"`\>

a voyage UID. these start at 1 and auto-increment in the contract. this is
immutable and the only place a VoyageId should ever be created is on
initial deserialization of a QueuedArrival from contract data (see `serde`)

---

### WhitelistStatusResponse

Ƭ **WhitelistStatusResponse**: `Object`

#### Type declaration

| Name          | Type      | Description                                                        |
| :------------ | :-------- | :----------------------------------------------------------------- |
| `failedAt?`   | `string`  | Failure timestamp.                                                 |
| `position?`   | `string`  | The address' position in the queue.                                |
| `txHash?`     | `string`  | If successful, the hash of the whitelist registration transaction. |
| `whitelisted` | `boolean` | -                                                                  |

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

---

### Wormhole

Ƭ **Wormhole**: `Object`

#### Type declaration

| Name   | Type                                 |
| :----- | :----------------------------------- |
| `from` | [`LocationId`](README.md#locationid) |
| `to`   | [`LocationId`](README.md#locationid) |

## Variables

### ArrivalType

• **ArrivalType**: `Object`

Enumeration of arrival types.

#### Type declaration

| Name       | Type                                   |
| :--------- | :------------------------------------- |
| `Normal`   | [`ArrivalType`](README.md#arrivaltype) |
| `Photoid`  | [`ArrivalType`](README.md#arrivaltype) |
| `Unknown`  | [`ArrivalType`](README.md#arrivaltype) |
| `Wormhole` | [`ArrivalType`](README.md#arrivaltype) |

---

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

• `Const` **ArtifactRarityNames**: `Object`

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
| `ShipCrescent`    | [`ArtifactType`](README.md#artifacttype) |
| `ShipGear`        | [`ArtifactType`](README.md#artifacttype) |
| `ShipMothership`  | [`ArtifactType`](README.md#artifacttype) |
| `ShipTitan`       | [`ArtifactType`](README.md#artifacttype) |
| `ShipWhale`       | [`ArtifactType`](README.md#artifacttype) |
| `Spaceship`       | [`ArtifactType`](README.md#artifacttype) |
| `Unknown`         | [`ArtifactType`](README.md#artifacttype) |
| `Wormhole`        | [`ArtifactType`](README.md#artifacttype) |

---

### ArtifactTypeNames

• `Const` **ArtifactTypeNames**: `Object`

Mapping from ArtifactType to pretty-printed names.

---

### AttribType

• **AttribType**: `Object`

#### Type declaration

| Name    | Type                                 |
| :------ | :----------------------------------- |
| `Float` | [`AttribType`](README.md#attribtype) |
| `UByte` | [`AttribType`](README.md#attribtype) |

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

• `Const` **BiomeNames**: `Object`

Mapping from Biome to pretty-printed names.

---

### CursorState

• **CursorState**: `Object`

#### Type declaration

| Name                | Type                                   |
| :------------------ | :------------------------------------- |
| `Normal`            | [`CursorState`](README.md#cursorstate) |
| `TargetingExplorer` | [`CursorState`](README.md#cursorstate) |
| `TargetingForces`   | [`CursorState`](README.md#cursorstate) |

---

### DrawMode

• **DrawMode**: `Object`

#### Type declaration

| Name        | Type                             |
| :---------- | :------------------------------- |
| `Lines`     | [`DrawMode`](README.md#drawmode) |
| `Points`    | [`DrawMode`](README.md#drawmode) |
| `Triangles` | [`DrawMode`](README.md#drawmode) |

---

### HatType

• **HatType**: `Object`

#### Type declaration

| Name            | Type                           |
| :-------------- | :----------------------------- |
| `ChefHat`       | [`HatType`](README.md#hattype) |
| `CowboyHat`     | [`HatType`](README.md#hattype) |
| `Fez`           | [`HatType`](README.md#hattype) |
| `Fish`          | [`HatType`](README.md#hattype) |
| `GraduationCap` | [`HatType`](README.md#hattype) |
| `PartyHat`      | [`HatType`](README.md#hattype) |
| `PopeHat`       | [`HatType`](README.md#hattype) |
| `SantaHat`      | [`HatType`](README.md#hattype) |
| `Squid`         | [`HatType`](README.md#hattype) |
| `TopHat`        | [`HatType`](README.md#hattype) |

---

### ModalManagerEvent

• **ModalManagerEvent**: `Object`

#### Type declaration

| Name                 | Type     |
| :------------------- | :------- |
| `MiningCoordsUpdate` | `string` |
| `StateChanged`       | `string` |

---

### ModalName

• **ModalName**: `Object`

#### Type declaration

| Name                   | Type                               |
| :--------------------- | :--------------------------------- |
| `ArtifactConversation` | [`ModalName`](README.md#modalname) |
| `ArtifactDetails`      | [`ModalName`](README.md#modalname) |
| `Broadcast`            | [`ModalName`](README.md#modalname) |
| `Diagnostics`          | [`ModalName`](README.md#modalname) |
| `Hats`                 | [`ModalName`](README.md#modalname) |
| `Help`                 | [`ModalName`](README.md#modalname) |
| `Leaderboard`          | [`ModalName`](README.md#modalname) |
| `ManageAccount`        | [`ModalName`](README.md#modalname) |
| `ManageArtifacts`      | [`ModalName`](README.md#modalname) |
| `MapShare`             | [`ModalName`](README.md#modalname) |
| `Onboarding`           | [`ModalName`](README.md#modalname) |
| `PlanetContextPane`    | [`ModalName`](README.md#modalname) |
| `PlanetDetails`        | [`ModalName`](README.md#modalname) |
| `PlanetDex`            | [`ModalName`](README.md#modalname) |
| `PluginEditor`         | [`ModalName`](README.md#modalname) |
| `PluginWarning`        | [`ModalName`](README.md#modalname) |
| `Plugins`              | [`ModalName`](README.md#modalname) |
| `Private`              | [`ModalName`](README.md#modalname) |
| `Settings`             | [`ModalName`](README.md#modalname) |
| `TransactionLog`       | [`ModalName`](README.md#modalname) |
| `TwitterVerify`        | [`ModalName`](README.md#modalname) |
| `UpgradeDetails`       | [`ModalName`](README.md#modalname) |
| `WithdrawSilver`       | [`ModalName`](README.md#modalname) |
| `YourArtifacts`        | [`ModalName`](README.md#modalname) |

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

• `Const` **PlanetLevelNames**: `Object`

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

• `Const` **PlanetTypeNames**: `Object`

Mapping from PlanetType to pretty-printed names.

---

### RenderZIndex

• **RenderZIndex**: `Object`

#### Type declaration

| Name         | Type                                     |
| :----------- | :--------------------------------------- |
| `Background` | [`RenderZIndex`](README.md#renderzindex) |
| `DEFAULT`    | [`RenderZIndex`](README.md#renderzindex) |
| `MAX`        | [`RenderZIndex`](README.md#renderzindex) |
| `Planets`    | [`RenderZIndex`](README.md#renderzindex) |
| `Text`       | [`RenderZIndex`](README.md#renderzindex) |
| `UI`         | [`RenderZIndex`](README.md#renderzindex) |
| `Voyages`    | [`RenderZIndex`](README.md#renderzindex) |

---

### RendererType

• **RendererType**: `Object`

#### Type declaration

| Name            | Type                                     |
| :-------------- | :--------------------------------------- |
| `Asteroid`      | [`RendererType`](README.md#renderertype) |
| `Background`    | [`RendererType`](README.md#renderertype) |
| `Belt`          | [`RendererType`](README.md#renderertype) |
| `BlackDomain`   | [`RendererType`](README.md#renderertype) |
| `CaptureZone`   | [`RendererType`](README.md#renderertype) |
| `Circle`        | [`RendererType`](README.md#renderertype) |
| `Line`          | [`RendererType`](README.md#renderertype) |
| `Mine`          | [`RendererType`](README.md#renderertype) |
| `MineBody`      | [`RendererType`](README.md#renderertype) |
| `Perlin`        | [`RendererType`](README.md#renderertype) |
| `Planet`        | [`RendererType`](README.md#renderertype) |
| `PlanetManager` | [`RendererType`](README.md#renderertype) |
| `Quasar`        | [`RendererType`](README.md#renderertype) |
| `QuasarBody`    | [`RendererType`](README.md#renderertype) |
| `QuasarRay`     | [`RendererType`](README.md#renderertype) |
| `Rect`          | [`RendererType`](README.md#renderertype) |
| `Ring`          | [`RendererType`](README.md#renderertype) |
| `Ruins`         | [`RendererType`](README.md#renderertype) |
| `Space`         | [`RendererType`](README.md#renderertype) |
| `SpacetimeRip`  | [`RendererType`](README.md#renderertype) |
| `Sprite`        | [`RendererType`](README.md#renderertype) |
| `Text`          | [`RendererType`](README.md#renderertype) |
| `UI`            | [`RendererType`](README.md#renderertype) |
| `Unmined`       | [`RendererType`](README.md#renderertype) |
| `Voyager`       | [`RendererType`](README.md#renderertype) |
| `Wormhole`      | [`RendererType`](README.md#renderertype) |

---

### Setting

• **Setting**: `Object`

Each setting has a unique identifier. Each account gets to store its own local storage setting,
per instance of the dark forest contract that it's connected to.

#### Type declaration

| Name                                         | Type                           |
| :------------------------------------------- | :----------------------------- |
| `AutoApproveNonPurchaseTransactions`         | [`Setting`](README.md#setting) |
| `AutoClearConfirmedTransactionsAfterSeconds` | [`Setting`](README.md#setting) |
| `AutoClearRejectedTransactionsAfterSeconds`  | [`Setting`](README.md#setting) |
| `DisableDefaultShortcuts`                    | [`Setting`](README.md#setting) |
| `DisableEmojiRendering`                      | [`Setting`](README.md#setting) |
| `DisableFancySpaceEffect`                    | [`Setting`](README.md#setting) |
| `DisableHatRendering`                        | [`Setting`](README.md#setting) |
| `DrawChunkBorders`                           | [`Setting`](README.md#setting) |
| `ExperimentalFeatures`                       | [`Setting`](README.md#setting) |
| `ForceReloadEmbeddedPlugins`                 | [`Setting`](README.md#setting) |
| `FoundArtifact`                              | [`Setting`](README.md#setting) |
| `FoundComet`                                 | [`Setting`](README.md#setting) |
| `FoundDeepSpace`                             | [`Setting`](README.md#setting) |
| `FoundPirates`                               | [`Setting`](README.md#setting) |
| `FoundSilver`                                | [`Setting`](README.md#setting) |
| `FoundSilverBank`                            | [`Setting`](README.md#setting) |
| `FoundSpace`                                 | [`Setting`](README.md#setting) |
| `FoundTradingPost`                           | [`Setting`](README.md#setting) |
| `GasFeeGwei`                                 | [`Setting`](README.md#setting) |
| `HasAcceptedPluginRisk`                      | [`Setting`](README.md#setting) |
| `HighPerformanceRendering`                   | [`Setting`](README.md#setting) |
| `IsMining`                                   | [`Setting`](README.md#setting) |
| `MiningCores`                                | [`Setting`](README.md#setting) |
| `MoveNotifications`                          | [`Setting`](README.md#setting) |
| `NewPlayer`                                  | [`Setting`](README.md#setting) |
| `OptOutMetrics`                              | [`Setting`](README.md#setting) |
| `RendererColorDeadSpace`                     | [`Setting`](README.md#setting) |
| `RendererColorDeepSpace`                     | [`Setting`](README.md#setting) |
| `RendererColorInnerNebula`                   | [`Setting`](README.md#setting) |
| `RendererColorNebula`                        | [`Setting`](README.md#setting) |
| `RendererColorSpace`                         | [`Setting`](README.md#setting) |
| `TerminalVisible`                            | [`Setting`](README.md#setting) |
| `TutorialCompleted`                          | [`Setting`](README.md#setting) |
| `TutorialOpen`                               | [`Setting`](README.md#setting) |

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

• `Const` **SpaceTypeNames**: `Object`

Mapping from SpaceType to pretty-printed names.

---

### TextAlign

• **TextAlign**: `Object`

#### Type declaration

| Name     | Type                               |
| :------- | :--------------------------------- |
| `Center` | [`TextAlign`](README.md#textalign) |
| `Left`   | [`TextAlign`](README.md#textalign) |
| `Right`  | [`TextAlign`](README.md#textalign) |

---

### TextAnchor

• **TextAnchor**: `Object`

#### Type declaration

| Name     | Type                                 |
| :------- | :----------------------------------- |
| `Bottom` | [`TextAnchor`](README.md#textanchor) |
| `Middle` | [`TextAnchor`](README.md#textanchor) |
| `Top`    | [`TextAnchor`](README.md#textanchor) |

---

### TooltipName

• **TooltipName**: `Object`

#### Type declaration

| Name                          | Type                                   |
| :---------------------------- | :------------------------------------- |
| `Abandon`                     | [`TooltipName`](README.md#tooltipname) |
| `ActivateArtifact`            | [`TooltipName`](README.md#tooltipname) |
| `ArtifactBuff`                | [`TooltipName`](README.md#tooltipname) |
| `ArtifactStored`              | [`TooltipName`](README.md#tooltipname) |
| `Bonus`                       | [`TooltipName`](README.md#tooltipname) |
| `BonusDefense`                | [`TooltipName`](README.md#tooltipname) |
| `BonusEnergyCap`              | [`TooltipName`](README.md#tooltipname) |
| `BonusEnergyGro`              | [`TooltipName`](README.md#tooltipname) |
| `BonusRange`                  | [`TooltipName`](README.md#tooltipname) |
| `BonusSpaceJunk`              | [`TooltipName`](README.md#tooltipname) |
| `BonusSpeed`                  | [`TooltipName`](README.md#tooltipname) |
| `CancelTransaction`           | [`TooltipName`](README.md#tooltipname) |
| `Capturable`                  | [`TooltipName`](README.md#tooltipname) |
| `Clowntown`                   | [`TooltipName`](README.md#tooltipname) |
| `CurrentMining`               | [`TooltipName`](README.md#tooltipname) |
| `DeactivateArtifact`          | [`TooltipName`](README.md#tooltipname) |
| `Defense`                     | [`TooltipName`](README.md#tooltipname) |
| `DefenseMultiplier`           | [`TooltipName`](README.md#tooltipname) |
| `DepositArtifact`             | [`TooltipName`](README.md#tooltipname) |
| `Empty`                       | [`TooltipName`](README.md#tooltipname) |
| `Energy`                      | [`TooltipName`](README.md#tooltipname) |
| `EnergyCapMultiplier`         | [`TooltipName`](README.md#tooltipname) |
| `EnergyGrowth`                | [`TooltipName`](README.md#tooltipname) |
| `EnergyGrowthMultiplier`      | [`TooltipName`](README.md#tooltipname) |
| `FindArtifact`                | [`TooltipName`](README.md#tooltipname) |
| `HashesPerSec`                | [`TooltipName`](README.md#tooltipname) |
| `HoverPlanet`                 | [`TooltipName`](README.md#tooltipname) |
| `Invadable`                   | [`TooltipName`](README.md#tooltipname) |
| `MaxLevel`                    | [`TooltipName`](README.md#tooltipname) |
| `MinEnergy`                   | [`TooltipName`](README.md#tooltipname) |
| `MiningPause`                 | [`TooltipName`](README.md#tooltipname) |
| `MiningTarget`                | [`TooltipName`](README.md#tooltipname) |
| `ModalFindArtifact`           | [`TooltipName`](README.md#tooltipname) |
| `ModalHats`                   | [`TooltipName`](README.md#tooltipname) |
| `ModalHelp`                   | [`TooltipName`](README.md#tooltipname) |
| `ModalLeaderboard`            | [`TooltipName`](README.md#tooltipname) |
| `ModalPlanetDetails`          | [`TooltipName`](README.md#tooltipname) |
| `ModalPlanetDex`              | [`TooltipName`](README.md#tooltipname) |
| `ModalPlugins`                | [`TooltipName`](README.md#tooltipname) |
| `ModalSettings`               | [`TooltipName`](README.md#tooltipname) |
| `ModalTwitterBroadcast`       | [`TooltipName`](README.md#tooltipname) |
| `ModalTwitterVerification`    | [`TooltipName`](README.md#tooltipname) |
| `ModalUpgradeDetails`         | [`TooltipName`](README.md#tooltipname) |
| `ModalWithdrawSilver`         | [`TooltipName`](README.md#tooltipname) |
| `ModalYourArtifacts`          | [`TooltipName`](README.md#tooltipname) |
| `NetworkHealth`               | [`TooltipName`](README.md#tooltipname) |
| `Pirates`                     | [`TooltipName`](README.md#tooltipname) |
| `PlanetRank`                  | [`TooltipName`](README.md#tooltipname) |
| `PrioritizeTransaction`       | [`TooltipName`](README.md#tooltipname) |
| `Range`                       | [`TooltipName`](README.md#tooltipname) |
| `RangeMultiplier`             | [`TooltipName`](README.md#tooltipname) |
| `Rank`                        | [`TooltipName`](README.md#tooltipname) |
| `RetryTransaction`            | [`TooltipName`](README.md#tooltipname) |
| `Score`                       | [`TooltipName`](README.md#tooltipname) |
| `SelectedSilver`              | [`TooltipName`](README.md#tooltipname) |
| `Silver`                      | [`TooltipName`](README.md#tooltipname) |
| `SilverCap`                   | [`TooltipName`](README.md#tooltipname) |
| `SilverGrowth`                | [`TooltipName`](README.md#tooltipname) |
| `SilverProd`                  | [`TooltipName`](README.md#tooltipname) |
| `SpaceJunk`                   | [`TooltipName`](README.md#tooltipname) |
| `Speed`                       | [`TooltipName`](README.md#tooltipname) |
| `SpeedMultiplier`             | [`TooltipName`](README.md#tooltipname) |
| `Time50`                      | [`TooltipName`](README.md#tooltipname) |
| `Time90`                      | [`TooltipName`](README.md#tooltipname) |
| `TimeUntilActivationPossible` | [`TooltipName`](README.md#tooltipname) |
| `TwitterHandle`               | [`TooltipName`](README.md#tooltipname) |
| `Upgrades`                    | [`TooltipName`](README.md#tooltipname) |
| `WithdrawArtifact`            | [`TooltipName`](README.md#tooltipname) |
| `WithdrawSilverButton`        | [`TooltipName`](README.md#tooltipname) |

---

### UniformType

• **UniformType**: `Object`

#### Type declaration

| Name      | Type                                   |
| :-------- | :------------------------------------- |
| `Float`   | [`UniformType`](README.md#uniformtype) |
| `Mat3`    | [`UniformType`](README.md#uniformtype) |
| `Mat4`    | [`UniformType`](README.md#uniformtype) |
| `Texture` | [`UniformType`](README.md#uniformtype) |
| `UByte`   | [`UniformType`](README.md#uniformtype) |
| `Vec3`    | [`UniformType`](README.md#uniformtype) |

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
