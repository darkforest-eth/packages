# Interface: RingRendererType

## Table of contents

### Properties

- [rendererType](RingRendererType.md#renderertype)

### Methods

- [flush](RingRendererType.md#flush)
- [queueRingAtIdx](RingRendererType.md#queueringatidx)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued Rings.

#### Returns

`void`

---

### queueRingAtIdx

▸ **queueRingAtIdx**(`planet`, `centerW`, `radiusW`, `color?`, `beltIdx?`, `angle?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Rings are used to show the different levels of a planet

#### Parameters

| Name       | Type                                      | Description                                                                |
| :--------- | :---------------------------------------- | :------------------------------------------------------------------------- |
| `planet`   | [`Planet`](../README.md#planet)           | an object that contains info about the current planet                      |
| `centerW`  | [`WorldCoords`](../README.md#worldcoords) | represents the coordinates of the planet relative to the game world.       |
| `radiusW`  | `number`                                  | represents the radius of the planet relative to the size of the game world |
| `color?`   | [`RGBVec`](../README.md#rgbvec)           | -                                                                          |
| `beltIdx?` | `number`                                  | -                                                                          |
| `angle?`   | `number`                                  | -                                                                          |

#### Returns

`void`
