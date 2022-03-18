# Interface: PlanetRendererType

## Table of contents

### Properties

- [rendererType](PlanetRendererType.md#renderertype)

### Methods

- [flush](PlanetRendererType.md#flush)
- [queuePlanetBody](PlanetRendererType.md#queueplanetbody)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued planets.

#### Returns

`void`

---

### queuePlanetBody

▸ **queuePlanetBody**(`planet`, `centerW`, `radiusW`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.

#### Parameters

| Name      | Type                                      | Description                                                    |
| :-------- | :---------------------------------------- | :------------------------------------------------------------- |
| `planet`  | [`Planet`](../README.md#planet)           | an object that contains info about the planet to be drawn      |
| `centerW` | [`WorldCoords`](../README.md#worldcoords) | represents the coordinates of the planet to the game world.    |
| `radiusW` | `number`                                  | represents the radius of the planet relative to the game world |

#### Returns

`void`
