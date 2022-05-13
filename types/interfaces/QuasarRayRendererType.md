# Interface: QuasarRayRendererType

## Table of contents

### Properties

- [rendererType](QuasarRayRendererType.md#renderertype)

### Methods

- [flush](QuasarRayRendererType.md#flush)
- [queueQuasarRay](QuasarRayRendererType.md#queuequasarray)
- [setUniforms](QuasarRayRendererType.md#setuniforms)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draw all queued Quasar Rays

#### Returns

`void`

---

### queueQuasarRay

▸ **queueQuasarRay**(`planet`, `centerW`, `radiusW`, `z?`, `top?`, `angle?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw the rays on the Quasar.
There are 2 rays one on top and one on the bottom

#### Parameters

| Name      | Type                                      | Description                                                                  |
| :-------- | :---------------------------------------- | :--------------------------------------------------------------------------- |
| `planet`  | [`Planet`](../README.md#planet)           | an object that contains info about the current Quasar planet                 |
| `centerW` | [`WorldCoords`](../README.md#worldcoords) | represents the coordinates of the current Quasar relative to the game world. |
| `radiusW` | `number`                                  | represents the radius of the Quasar relative to the size of the game world.  |
| `z?`      | `number`                                  | z axis                                                                       |
| `top?`    | `boolean`                                 | if the ray is ontop of the Quasar                                            |
| `angle?`  | `number`                                  | the angle the body should be titled                                          |

#### Returns

`void`

---

### setUniforms

▸ `Optional` **setUniforms**(): `void`

#### Returns

`void`
