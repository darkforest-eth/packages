# Interface: QuasarBodyRendererType

## Table of contents

### Properties

- [rendererType](QuasarBodyRendererType.md#renderertype)

### Methods

- [flush](QuasarBodyRendererType.md#flush)
- [queueQuasarBody](QuasarBodyRendererType.md#queuequasarbody)
- [setUniforms](QuasarBodyRendererType.md#setuniforms)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draw all queued Quasar Bodies

#### Returns

`void`

---

### queueQuasarBody

▸ **queueQuasarBody**(`planet`, `centerW`, `radiusW`, `z?`, `angle?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to Draw the body of the Quasar

#### Parameters

| Name      | Type                                      | Description                                                                  |
| :-------- | :---------------------------------------- | :--------------------------------------------------------------------------- |
| `planet`  | [`Planet`](../README.md#planet)           | an object that contains info about the current Quasar planet                 |
| `centerW` | [`WorldCoords`](../README.md#worldcoords) | represents the coordinates of the current Quasar relative to the game world. |
| `radiusW` | `number`                                  | represents the radius of the Quasar relative to the size of the game world.  |
| `z?`      | `number`                                  | z axis                                                                       |
| `angle?`  | `number`                                  | the angle the body should be titled                                          |

#### Returns

`void`

---

### setUniforms

▸ `Optional` **setUniforms**(): `void`

#### Returns

`void`
