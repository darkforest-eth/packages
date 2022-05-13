# Class: GenericRenderer<T, U\>

Takes in a gl context, program sources (frag and vert shader),
and data about attribs / uniforms and provides:

- attrib managers
- uniform setters
- skeleton code for rendering in our engine via `flush()`

## Type parameters

| Name | Type                                                                          |
| :--- | :---------------------------------------------------------------------------- |
| `T`  | extends [`EngineProgramDefinition`](../interfaces/EngineProgramDefinition.md) |
| `U`  | extends [`WebGLManager`](WebGLManager.md) = [`WebGLManager`](WebGLManager.md) |

## Hierarchy

- **`GenericRenderer`**

  ↳ [`SpriteRenderer`](SpriteRenderer.md)

## Table of contents

### Constructors

- [constructor](GenericRenderer.md#constructor)

### Properties

- [attribData](GenericRenderer.md#attribdata)
- [attribManagers](GenericRenderer.md#attribmanagers)
- [manager](GenericRenderer.md#manager)
- [program](GenericRenderer.md#program)
- [uniformData](GenericRenderer.md#uniformdata)
- [uniformLocs](GenericRenderer.md#uniformlocs)
- [uniformSetters](GenericRenderer.md#uniformsetters)
- [verts](GenericRenderer.md#verts)

### Methods

- [flush](GenericRenderer.md#flush)
- [setUniforms](GenericRenderer.md#setuniforms)

## Constructors

### constructor

• **new GenericRenderer**<`T`, `U`\>(`glManager`, `programData`)

Create a renderer from a GameGLManager and program data.

#### Type parameters

| Name | Type                                                                                |
| :--- | :---------------------------------------------------------------------------------- |
| `T`  | extends [`EngineProgramDefinition`](../interfaces/EngineProgramDefinition.md)       |
| `U`  | extends [`WebGLManager`](WebGLManager.md)<`U`\> = [`WebGLManager`](WebGLManager.md) |

#### Parameters

| Name          | Type | Description                                                   |
| :------------ | :--- | :------------------------------------------------------------ |
| `glManager`   | `U`  | GameGLManager which holds context for rendering this program. |
| `programData` | `T`  | ProgramData describing this program.                          |

## Properties

### attribData

• **attribData**: [`AttribData`](../README.md#attribdata)

Uniform data for this program. Typically not used after construction.
Kept for use in inherited classes.

---

### attribManagers

• **attribManagers**: [`AttribManagers`](../README.md#attribmanagers)<`T`\>

A dictionary of attrib managers, keyed by attrib name.

---

### manager

• **manager**: `U`

GameGLManager corresponding to this program.

---

### program

• **program**: `WebGLProgram`

The program corresponding to this renderer.

---

### uniformData

• **uniformData**: [`UniformData`](../README.md#uniformdata)

Uniform data for this program. Typically not used after construction.
Kept for use in inherited classes.

---

### uniformLocs

• **uniformLocs**: [`UniformLocs`](../README.md#uniformlocs)<`T`\>

Uniform locs for this program. Typically not referenced directly,
but rather through generated uniformSetters. Kept for use in inherited classes.

---

### uniformSetters

• **uniformSetters**: [`UniformSetters`](../README.md#uniformsetters)<`T`\>

A dictionary of uniform setters, keyed by uniform name.

---

### verts

• **verts**: `number`

The number of queued vertices so far. Used for batch rendering.

## Methods

### flush

▸ **flush**(`drawMode?`): `void`

Draw all buffered vertices to the screen.

#### Parameters

| Name       | Type       | Default value        | Description                                                     |
| :--------- | :--------- | :------------------- | :-------------------------------------------------------------- |
| `drawMode` | `DrawMode` | `DrawMode.Triangles` | The drawing mode for the buffered vertices. Default: Triangles. |

#### Returns

`void`

---

### setUniforms

▸ **setUniforms**(): `void`

Run by flush(). Override this in child classes. Programs with uniformss
should always override this.

#### Returns

`void`
