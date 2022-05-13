# Interface: AsteroidRendererType

## Table of contents

### Properties

- [rendererType](AsteroidRendererType.md#renderertype)

### Methods

- [flush](AsteroidRendererType.md#flush)
- [queueAsteroid](AsteroidRendererType.md#queueasteroid)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued Asteroids.

#### Returns

`void`

---

### queueAsteroid

▸ **queueAsteroid**(`planet`, `centerW`, `radiusW`, `color?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.

#### Parameters

| Name      | Type                              | Description                                                                     |
| :-------- | :-------------------------------- | :------------------------------------------------------------------------------ |
| `planet`  | [`Planet`](../README.md#planet)   | an object that contains info about the current planet the Asteroid is revolving |
| `centerW` | [`CanvasCoords`](CanvasCoords.md) | represents the coordinates of the planet relative to the game world.            |
| `radiusW` | `number`                          | represents the radius of the planet relative to the size of the game world      |
| `color?`  | [`RGBVec`](../README.md#rgbvec)   | -                                                                               |

#### Returns

`void`
