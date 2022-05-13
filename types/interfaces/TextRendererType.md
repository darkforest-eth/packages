# Interface: TextRendererType

## Table of contents

### Properties

- [rendererType](TextRendererType.md#renderertype)

### Methods

- [flush](TextRendererType.md#flush)
- [queueTextWorld](TextRendererType.md#queuetextworld)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all text in game.

#### Returns

`void`

---

### queueTextWorld

▸ **queueTextWorld**(`text`, `coords`, `color?`, `offY?`, `align?`, `anchor?`, `zIdx?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Queue text to be drawn at world Cooridnates

#### Parameters

| Name      | Type                                      | Description                                                                                  |
| :-------- | :---------------------------------------- | :------------------------------------------------------------------------------------------- |
| `text`    | `string`                                  | The text                                                                                     |
| `coords`  | [`WorldCoords`](../README.md#worldcoords) | The coordinates on relative to the game world                                                |
| `color?`  | [`RGBAVec`](../README.md#rgbavec)         | color of the text                                                                            |
| `offY?`   | `number`                                  | measured in text units - constant screen-coord offset that it useful for drawing nice things |
| `align?`  | [`TextAlign`](../README.md#textalign)     | how the text should be aligned                                                               |
| `anchor?` | [`TextAnchor`](../README.md#textanchor)   | How the text should be anchored                                                              |
| `zIdx?`   | `number`                                  | The z axis index of the text                                                                 |

#### Returns

`void`
