# Interface: UnminedRendererType

## Table of contents

### Properties

- [rendererType](UnminedRendererType.md#renderertype)

### Methods

- [flush](UnminedRendererType.md#flush)
- [queueRect](UnminedRendererType.md#queuerect)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all undiscovered space

#### Returns

`void`

---

### queueRect

▸ **queueRect**(`-param0`, `width`, `height`, `color?`, `zIdx?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Called to queue up a chunk of unmined space to be drawn

#### Parameters

| Name      | Type                              | Description                                               |
| :-------- | :-------------------------------- | :-------------------------------------------------------- |
| `-param0` | [`CanvasCoords`](CanvasCoords.md) | the x and y positon on the canvas. The bottom left corner |
| `width`   | `number`                          | the width of the chunk                                    |
| `height`  | `number`                          | the height of the chunk                                   |
| `color?`  | [`RGBVec`](../README.md#rgbvec)   | optional the color of the chunk                           |
| `zIdx?`   | `number`                          | Z axis                                                    |

#### Returns

`void`
