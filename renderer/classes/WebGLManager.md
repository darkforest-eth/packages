# Class: WebGLManager

## Hierarchy

- **`WebGLManager`**

  ↳ [`GameGLManager`](GameGLManager.md)

## Table of contents

### Constructors

- [constructor](WebGLManager.md#constructor)

### Properties

- [canvas](WebGLManager.md#canvas)
- [gl](WebGLManager.md#gl)
- [projectionMatrix](WebGLManager.md#projectionmatrix)
- [texIdx](WebGLManager.md#texidx)

### Methods

- [clear](WebGLManager.md#clear)
- [getTexIdx](WebGLManager.md#gettexidx)
- [setProjectionMatrix](WebGLManager.md#setprojectionmatrix)

## Constructors

### constructor

• **new WebGLManager**(`canvas`, `attr?`)

#### Parameters

| Name     | Type                     |
| :------- | :----------------------- |
| `canvas` | `HTMLCanvasElement`      |
| `attr?`  | `WebGLContextAttributes` |

## Properties

### canvas

• **canvas**: `HTMLCanvasElement`

---

### gl

• **gl**: `WebGL2RenderingContext`

---

### projectionMatrix

• **projectionMatrix**: `mat4`

---

### texIdx

• `Private` **texIdx**: `number` = `0`

## Methods

### clear

▸ **clear**(`bits?`, `color?`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `bits?`  | `number`  |
| `color?` | `RGBAVec` |

#### Returns

`void`

---

### getTexIdx

▸ **getTexIdx**(): `number`

#### Returns

`number`

---

### setProjectionMatrix

▸ **setProjectionMatrix**(): `void`

#### Returns

`void`
