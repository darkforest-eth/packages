# Interface: LineRendererType

## Table of contents

### Properties

- [rendererType](LineRendererType.md#renderertype)

### Methods

- [flush](LineRendererType.md#flush)
- [queueLineWorld](LineRendererType.md#queuelineworld)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued lines

#### Returns

`void`

---

### queueLineWorld

▸ **queueLineWorld**(`start`, `end`, `color?`, `width?`, `zIdx?`, `dashed?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
This will affect every line drawn in the game.
Used to draw the line that the voyager take and wormholes

#### Parameters

| Name      | Type                                      | Description                                                         |
| :-------- | :---------------------------------------- | :------------------------------------------------------------------ |
| `start`   | [`WorldCoords`](../README.md#worldcoords) | The coordinates of where the lines start relative to the game world |
| `end`     | [`WorldCoords`](../README.md#worldcoords) | The coordinates of where the lines end relative to the game world   |
| `color?`  | [`RGBAVec`](../README.md#rgbavec)         |                                                                     |
| `width?`  | `number`                                  | how thick the line should be from the center                        |
| `zIdx?`   | `number`                                  | Z axis                                                              |
| `dashed?` | `boolean`                                 | if the line should be dashed                                        |

#### Returns

`void`
