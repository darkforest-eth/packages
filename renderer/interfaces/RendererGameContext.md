# Interface: RendererGameContext

## Hierarchy

- `DiagnosticUpdater`

  ↳ **`RendererGameContext`**

## Table of contents

### Methods

- [drawAllRunningPlugins](RendererGameContext.md#drawallrunningplugins)
- [getAbandonRangeChangePercent](RendererGameContext.md#getabandonrangechangepercent)
- [getAccount](RendererGameContext.md#getaccount)
- [getAllMinerLocations](RendererGameContext.md#getallminerlocations)
- [getAllVoyages](RendererGameContext.md#getallvoyages)
- [getArtifactSending](RendererGameContext.md#getartifactsending)
- [getArtifactWithId](RendererGameContext.md#getartifactwithid)
- [getArtifactsWithIds](RendererGameContext.md#getartifactswithids)
- [getBooleanSetting](RendererGameContext.md#getbooleansetting)
- [getCaptureZones](RendererGameContext.md#getcapturezones)
- [getDistCoords](RendererGameContext.md#getdistcoords)
- [getEnergyArrivingForMove](RendererGameContext.md#getenergyarrivingformove)
- [getForcesSending](RendererGameContext.md#getforcessending)
- [getHoveringOverCoords](RendererGameContext.md#gethoveringovercoords)
- [getHoveringOverPlanet](RendererGameContext.md#gethoveringoverplanet)
- [getIsChoosingTargetPlanet](RendererGameContext.md#getischoosingtargetplanet)
- [getIsHighPerfMode](RendererGameContext.md#getishighperfmode)
- [getLocationOfPlanet](RendererGameContext.md#getlocationofplanet)
- [getLocationsAndChunks](RendererGameContext.md#getlocationsandchunks)
- [getMouseDownPlanet](RendererGameContext.md#getmousedownplanet)
- [getPerlinConfig](RendererGameContext.md#getperlinconfig)
- [getPerlinThresholds](RendererGameContext.md#getperlinthresholds)
- [getPlanetWithCoords](RendererGameContext.md#getplanetwithcoords)
- [getPlanetWithId](RendererGameContext.md#getplanetwithid)
- [getPlayer](RendererGameContext.md#getplayer)
- [getRadiusOfPlanetLevel](RendererGameContext.md#getradiusofplanetlevel)
- [getSelectedCoords](RendererGameContext.md#getselectedcoords)
- [getSelectedPlanet](RendererGameContext.md#getselectedplanet)
- [getSpaceTypePerlin](RendererGameContext.md#getspacetypeperlin)
- [getStringSetting](RendererGameContext.md#getstringsetting)
- [getUnconfirmedMoves](RendererGameContext.md#getunconfirmedmoves)
- [getUnconfirmedWormholeActivations](RendererGameContext.md#getunconfirmedwormholeactivations)
- [getWorldRadius](RendererGameContext.md#getworldradius)
- [getWormholes](RendererGameContext.md#getwormholes)
- [isAbandoning](RendererGameContext.md#isabandoning)
- [isOverOwnPlanet](RendererGameContext.md#isoverownplanet)
- [isOwnedByMe](RendererGameContext.md#isownedbyme)
- [isSendingShip](RendererGameContext.md#issendingship)
- [spaceTypeFromPerlin](RendererGameContext.md#spacetypefromperlin)
- [updateDiagnostics](RendererGameContext.md#updatediagnostics)

## Methods

### drawAllRunningPlugins

▸ **drawAllRunningPlugins**(`ctx`): `void`

#### Parameters

| Name  | Type                       |
| :---- | :------------------------- |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

---

### getAbandonRangeChangePercent

▸ **getAbandonRangeChangePercent**(): `number`

#### Returns

`number`

---

### getAccount

▸ **getAccount**(): `undefined` \| `EthAddress`

#### Returns

`undefined` \| `EthAddress`

---

### getAllMinerLocations

▸ **getAllMinerLocations**(): `WorldCoords`[]

#### Returns

`WorldCoords`[]

---

### getAllVoyages

▸ **getAllVoyages**(): `QueuedArrival`[]

#### Returns

`QueuedArrival`[]

---

### getArtifactSending

▸ **getArtifactSending**(`planetId`): `undefined` \| `Artifact`

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `planetId` | `LocationId` |

#### Returns

`undefined` \| `Artifact`

---

### getArtifactWithId

▸ **getArtifactWithId**(`artifactId`): `undefined` \| `Artifact`

#### Parameters

| Name         | Type                        |
| :----------- | :-------------------------- |
| `artifactId` | `undefined` \| `ArtifactId` |

#### Returns

`undefined` \| `Artifact`

---

### getArtifactsWithIds

▸ **getArtifactsWithIds**(`artifactIds`): (`undefined` \| `Artifact`)[]

#### Parameters

| Name          | Type           |
| :------------ | :------------- |
| `artifactIds` | `ArtifactId`[] |

#### Returns

(`undefined` \| `Artifact`)[]

---

### getBooleanSetting

▸ **getBooleanSetting**(`setting`): `boolean`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `setting` | `Setting` |

#### Returns

`boolean`

---

### getCaptureZones

▸ **getCaptureZones**(): `Iterable`<`CaptureZone`\>

#### Returns

`Iterable`<`CaptureZone`\>

---

### getDistCoords

▸ **getDistCoords**(`from`, `to`): `number`

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `from` | `WorldCoords` |
| `to`   | `WorldCoords` |

#### Returns

`number`

---

### getEnergyArrivingForMove

▸ **getEnergyArrivingForMove**(`from`, `to`, `dist`, `energy`): `number`

#### Parameters

| Name     | Type                        |
| :------- | :-------------------------- |
| `from`   | `LocationId`                |
| `to`     | `undefined` \| `LocationId` |
| `dist`   | `undefined` \| `number`     |
| `energy` | `number`                    |

#### Returns

`number`

---

### getForcesSending

▸ **getForcesSending**(`planetId`): `number`

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `planetId` | `LocationId` |

#### Returns

`number`

---

### getHoveringOverCoords

▸ **getHoveringOverCoords**(): `undefined` \| `WorldCoords`

#### Returns

`undefined` \| `WorldCoords`

---

### getHoveringOverPlanet

▸ **getHoveringOverPlanet**(): `undefined` \| `Planet`

#### Returns

`undefined` \| `Planet`

---

### getIsChoosingTargetPlanet

▸ **getIsChoosingTargetPlanet**(): `boolean`

#### Returns

`boolean`

---

### getIsHighPerfMode

▸ **getIsHighPerfMode**(): `boolean`

#### Returns

`boolean`

---

### getLocationOfPlanet

▸ **getLocationOfPlanet**(`planetId`): `undefined` \| `WorldLocation`

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `planetId` | `LocationId` |

#### Returns

`undefined` \| `WorldLocation`

---

### getLocationsAndChunks

▸ **getLocationsAndChunks**(): `Object`

#### Returns

`Object`

| Name            | Type                                     |
| :-------------- | :--------------------------------------- |
| `cachedPlanets` | `Map`<`LocationId`, `PlanetRenderInfo`\> |
| `chunks`        | `Set`<`Chunk`\>                          |

---

### getMouseDownPlanet

▸ **getMouseDownPlanet**(): `undefined` \| `LocatablePlanet`

#### Returns

`undefined` \| `LocatablePlanet`

---

### getPerlinConfig

▸ **getPerlinConfig**(`isBiome`): `PerlinConfig`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `isBiome` | `boolean` |

#### Returns

`PerlinConfig`

---

### getPerlinThresholds

▸ **getPerlinThresholds**(): [`number`, `number`, `number`]

#### Returns

[`number`, `number`, `number`]

---

### getPlanetWithCoords

▸ **getPlanetWithCoords**(`coords`): `undefined` \| `Planet`

#### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `coords` | `undefined` \| `WorldCoords` |

#### Returns

`undefined` \| `Planet`

---

### getPlanetWithId

▸ **getPlanetWithId**(`planetId`): `undefined` \| `Planet`

#### Parameters

| Name       | Type                        |
| :--------- | :-------------------------- |
| `planetId` | `undefined` \| `LocationId` |

#### Returns

`undefined` \| `Planet`

---

### getPlayer

▸ **getPlayer**(`address?`): `undefined` \| `Player`

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `address?` | `EthAddress` |

#### Returns

`undefined` \| `Player`

---

### getRadiusOfPlanetLevel

▸ **getRadiusOfPlanetLevel**(`planetRarity`): `number`

#### Parameters

| Name           | Type          |
| :------------- | :------------ |
| `planetRarity` | `PlanetLevel` |

#### Returns

`number`

---

### getSelectedCoords

▸ **getSelectedCoords**(): `undefined` \| `WorldCoords`

#### Returns

`undefined` \| `WorldCoords`

---

### getSelectedPlanet

▸ **getSelectedPlanet**(): `undefined` \| `LocatablePlanet`

#### Returns

`undefined` \| `LocatablePlanet`

---

### getSpaceTypePerlin

▸ **getSpaceTypePerlin**(`coords`, `floor`): `number`

#### Parameters

| Name     | Type          |
| :------- | :------------ |
| `coords` | `WorldCoords` |
| `floor`  | `boolean`     |

#### Returns

`number`

---

### getStringSetting

▸ **getStringSetting**(`setting`): `undefined` \| `string`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `setting` | `Setting` |

#### Returns

`undefined` \| `string`

---

### getUnconfirmedMoves

▸ **getUnconfirmedMoves**(): `Transaction`<`UnconfirmedMove`\>[]

#### Returns

`Transaction`<`UnconfirmedMove`\>[]

---

### getUnconfirmedWormholeActivations

▸ **getUnconfirmedWormholeActivations**(): `Transaction`<`UnconfirmedActivateArtifact`\>[]

#### Returns

`Transaction`<`UnconfirmedActivateArtifact`\>[]

---

### getWorldRadius

▸ **getWorldRadius**(): `number`

#### Returns

`number`

---

### getWormholes

▸ **getWormholes**(): `Iterable`<`Wormhole`\>

#### Returns

`Iterable`<`Wormhole`\>

---

### isAbandoning

▸ **isAbandoning**(): `boolean`

#### Returns

`boolean`

---

### isOverOwnPlanet

▸ **isOverOwnPlanet**(`coords`): `undefined` \| `Planet`

#### Parameters

| Name     | Type          |
| :------- | :------------ |
| `coords` | `WorldCoords` |

#### Returns

`undefined` \| `Planet`

---

### isOwnedByMe

▸ **isOwnedByMe**(`planet`): `boolean`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `planet` | `Planet` |

#### Returns

`boolean`

---

### isSendingShip

▸ **isSendingShip**(`planetId`): `boolean`

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `planetId` | `LocationId` |

#### Returns

`boolean`

---

### spaceTypeFromPerlin

▸ **spaceTypeFromPerlin**(`perlin`): `SpaceType`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `perlin` | `number` |

#### Returns

`SpaceType`

---

### updateDiagnostics

▸ **updateDiagnostics**(`updateFn`): `void`

Updates the diagnostics using the provided updater function.

#### Parameters

| Name       | Type                           |
| :--------- | :----------------------------- |
| `updateFn` | (`d`: `Diagnostics`) => `void` |

#### Returns

`void`

#### Inherited from

DiagnosticUpdater.updateDiagnostics
