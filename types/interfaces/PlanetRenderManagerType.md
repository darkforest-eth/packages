# Interface: PlanetRenderManagerType

## Table of contents

### Properties

- [rendererType](PlanetRenderManagerType.md#renderertype)

### Methods

- [flush](PlanetRenderManagerType.md#flush)
- [queuePlanets](PlanetRenderManagerType.md#queueplanets)
- [queueRangeRings](PlanetRenderManagerType.md#queuerangerings)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draw all queued planets

#### Returns

`void`

---

### queuePlanets

▸ **queuePlanets**(`cachedPlanets`, `now?`, `highPerfMode?`, `disableEmojis?`, `disableHats?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used for Drawing all types of planets

#### Parameters

| Name             | Type                                                                                       | Description                                                           |
| :--------------- | :----------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `cachedPlanets`  | `Map`<[`LocationId`](../README.md#locationid), [`PlanetRenderInfo`](PlanetRenderInfo.md)\> | A Map that contains all planets that have been discovered by the user |
| `now?`           | `number`                                                                                   | the modular of the current unix time by (2 _ pi _ 12000) in seconds   |
| `highPerfMode?`  | `boolean`                                                                                  | if the game is in high performance mode                               |
| `disableEmojis?` | `boolean`                                                                                  |                                                                       |
| `disableHats?`   | `boolean`                                                                                  |                                                                       |

#### Returns

`void`

---

### queueRangeRings

▸ **queueRangeRings**(`planet`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw the range of a planet when it is selected

#### Parameters

| Name     | Type                                              |
| :------- | :------------------------------------------------ |
| `planet` | [`LocatablePlanet`](../README.md#locatableplanet) |

#### Returns

`void`
