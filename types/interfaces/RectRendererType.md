# Interface: RectRendererType

## Table of contents

### Properties

- [rendererType](RectRendererType.md#renderertype)

### Methods

- [flush](RectRendererType.md#flush)
- [queueRectCenterWorld](RectRendererType.md#queuerectcenterworld)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued rectangles

#### Returns

`void`

---

### queueRectCenterWorld

▸ **queueRectCenterWorld**(`center`, `width`, `height`, `color?`, `stroke?`, `zIdx?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
This will affect every Rectangle drawn in the game.
Drawing the rectangele that shows up when you hover over a planet

#### Parameters

| Name      | Type                                      | Description                                          |
| :-------- | :---------------------------------------- | :--------------------------------------------------- |
| `center`  | [`WorldCoords`](../README.md#worldcoords) | Coordinates of the planet relative to the game world |
| `width`   | `number`                                  | Width of planet relative to the game world           |
| `height`  | `number`                                  | Height of planet relative to the game world          |
| `color?`  | [`RGBVec`](../README.md#rgbvec)           |                                                      |
| `stroke?` | `number`                                  | How thick the border of the rectangle should be      |
| `zIdx?`   | `number`                                  | Z axis                                               |

#### Returns

`void`
