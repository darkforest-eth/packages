# Interface: BeltRendererType

## Table of contents

### Properties

- [rendererType](BeltRendererType.md#renderertype)

### Methods

- [flush](BeltRendererType.md#flush)
- [queueBeltAtIdx](BeltRendererType.md#queuebeltatidx)
- [setUniforms](BeltRendererType.md#setuniforms)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued asteroid field belts.

#### Returns

`void`

---

### queueBeltAtIdx

▸ **queueBeltAtIdx**(`planet`, `center`, `radius?`, `color?`, `beltIdx?`, `angle?`, `screen?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Draw the Rings around the Mine/Asteroid Field

#### Parameters

| Name       | Type                                                                           | Description                                                                                            |
| :--------- | :----------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| `planet`   | [`Planet`](../README.md#planet)                                                | an object that contains info about the Mine/Asteroid Field                                             |
| `center`   | [`WorldCoords`](../README.md#worldcoords) \| [`CanvasCoords`](CanvasCoords.md) | The location of the center of the planet. The coordinate system is determined by the screen arguement. |
| `radius?`  | `number`                                                                       | The radius of the planet relative to game world                                                        |
| `color?`   | [`RGBVec`](../README.md#rgbvec)                                                |                                                                                                        |
| `beltIdx?` | `number`                                                                       | the index of the belt, the belt with the higher idx is the one rendered on top                         |
| `angle?`   | `number`                                                                       | The angle the belt should be tilted                                                                    |
| `screen?`  | `boolean`                                                                      | True: coordinates is relative to the canvas False: coordinates are relative to the game world          |

#### Returns

`void`

---

### setUniforms

▸ `Optional` **setUniforms**(): `void`

#### Returns

`void`
