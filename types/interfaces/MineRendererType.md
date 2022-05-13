# Interface: MineRendererType

## Table of contents

### Properties

- [rendererType](MineRendererType.md#renderertype)

### Methods

- [flush](MineRendererType.md#flush)
- [queueMine](MineRendererType.md#queuemine)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued Asteroid Fields.

#### Returns

`void`

---

### queueMine

▸ **queueMine**(`planet`, `centerW`, `radiusW`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.

#### Parameters

| Name      | Type                                      | Description                                                                       |
| :-------- | :---------------------------------------- | :-------------------------------------------------------------------------------- |
| `planet`  | [`Planet`](../README.md#planet)           | an object that contains info about the the Mine/Asteroid Field planet to be drawn |
| `centerW` | [`WorldCoords`](../README.md#worldcoords) | represents the coordinates of the asteroid field relative to the game world.      |
| `radiusW` | `number`                                  | represents the radius of the asteroid field relative to the game world            |

#### Returns

`void`
