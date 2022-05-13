# Interface: QuasarRendererType

## Table of contents

### Properties

- [rendererType](QuasarRendererType.md#renderertype)

### Methods

- [flush](QuasarRendererType.md#flush)
- [queueQuasar](QuasarRendererType.md#queuequasar)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued Quasars.

#### Returns

`void`

---

### queueQuasar

▸ **queueQuasar**(`planet`, `centerW`, `radiusW`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.

#### Parameters

| Name      | Type                                      | Description                                                                  |
| :-------- | :---------------------------------------- | :--------------------------------------------------------------------------- |
| `planet`  | [`Planet`](../README.md#planet)           | an object that contains info about the current Quasar planet                 |
| `centerW` | [`WorldCoords`](../README.md#worldcoords) | represents the coordinates of the current Quasar relative to the game world. |
| `radiusW` | `number`                                  | represents the radius of the Quasar relative to the size of the game world.  |

#### Returns

`void`
