# Interface: CircleRendererType

## Table of contents

### Properties

- [rendererType](CircleRendererType.md#renderertype)

### Methods

- [flush](CircleRendererType.md#flush)
- [queueCircleWorld](CircleRendererType.md#queuecircleworld)
- [queueCircleWorldCenterOnly](CircleRendererType.md#queuecircleworldcenteronly)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued circles

#### Returns

`void`

---

### queueCircleWorld

▸ **queueCircleWorld**(`center`, `radius`, `color?`, `stroke?`, `angle?`, `dashed?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
This will affect every Cricle drawn in the game.
Used for drawing the range a planet can attack
Used for highlighting the destination of a voyage
Used for drawing the world boarder
Used for drawing capture zones

#### Parameters

| Name      | Type                              | Description                                         |
| :-------- | :-------------------------------- | :-------------------------------------------------- |
| `center`  | [`CanvasCoords`](CanvasCoords.md) | Center of the circle relative to the canvas         |
| `radius`  | `number`                          | Radius relative to the canvas                       |
| `color?`  | [`RGBAVec`](../README.md#rgbavec) |                                                     |
| `stroke?` | `number`                          | How thick the stroke of the circle should be        |
| `angle?`  | `number`                          | The angle/arc of the cirlce to draw                 |
| `dashed?` | `boolean`                         | If the circumference of the circle should be dashed |

#### Returns

`void`

---

### queueCircleWorldCenterOnly

▸ **queueCircleWorldCenterOnly**(`center`, `radius`, `color?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used for drawing the voyager (circle)

#### Parameters

| Name     | Type                                      | Description                                     |
| :------- | :---------------------------------------- | :---------------------------------------------- |
| `center` | [`WorldCoords`](../README.md#worldcoords) | center of the circle relative to the game world |
| `radius` | `number`                                  | size of the circle relative to the game world   |
| `color?` | [`RGBAVec`](../README.md#rgbavec)         |                                                 |

#### Returns

`void`
