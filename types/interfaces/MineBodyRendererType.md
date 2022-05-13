# Interface: MineBodyRendererType

## Table of contents

### Properties

- [rendererType](MineBodyRendererType.md#renderertype)

### Methods

- [flush](MineBodyRendererType.md#flush)
- [queueMineScreen](MineBodyRendererType.md#queueminescreen)
- [setUniforms](MineBodyRendererType.md#setuniforms)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued mine bodies.

#### Returns

`void`

---

### queueMineScreen

▸ **queueMineScreen**(`planet`, `center`, `radius`, `z`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Draw the body of the Mine/Asteroid Field

#### Parameters

| Name     | Type                                      | Description                                                                  |
| :------- | :---------------------------------------- | :--------------------------------------------------------------------------- |
| `planet` | [`Planet`](../README.md#planet)           | Planet class that contains information on the current Mine/Asteroid Field    |
| `center` | [`WorldCoords`](../README.md#worldcoords) | The location of the center of the Asteroid Field relative to the game world. |
| `radius` | `number`                                  | Radius of the Asteroid Field relative to the game world                      |
| `z`      | `number`                                  | The amount of Asteroids in the Asteroid field                                |

#### Returns

`void`

---

### setUniforms

▸ `Optional` **setUniforms**(): `void`

#### Returns

`void`
