# Class: GameGLManager

## Hierarchy

- [`WebGLManager`](WebGLManager.md)

  ↳ **`GameGLManager`**

## Table of contents

### Constructors

- [constructor](GameGLManager.md#constructor)

### Properties

- [canvas](GameGLManager.md#canvas)
- [gl](GameGLManager.md#gl)
- [isHighPerf](GameGLManager.md#ishighperf)
- [projectionMatrix](GameGLManager.md#projectionmatrix)
- [renderer](GameGLManager.md#renderer)

### Methods

- [clear](GameGLManager.md#clear)
- [getTexIdx](GameGLManager.md#gettexidx)
- [setProjectionMatrix](GameGLManager.md#setprojectionmatrix)

## Constructors

### constructor

• **new GameGLManager**(`engine`, `glCanvas`)

#### Parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `engine`   | [`Renderer`](Renderer.md) |
| `glCanvas` | `HTMLCanvasElement`       |

#### Overrides

[WebGLManager](WebGLManager.md).[constructor](WebGLManager.md#constructor)

## Properties

### canvas

• **canvas**: `HTMLCanvasElement`

#### Inherited from

[WebGLManager](WebGLManager.md).[canvas](WebGLManager.md#canvas)

---

### gl

• **gl**: `WebGL2RenderingContext`

#### Overrides

[WebGLManager](WebGLManager.md).[gl](WebGLManager.md#gl)

---

### isHighPerf

• **isHighPerf**: `boolean`

---

### projectionMatrix

• **projectionMatrix**: `mat4`

#### Inherited from

[WebGLManager](WebGLManager.md).[projectionMatrix](WebGLManager.md#projectionmatrix)

---

### renderer

• **renderer**: [`Renderer`](Renderer.md)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

[WebGLManager](WebGLManager.md).[clear](WebGLManager.md#clear)

---

### getTexIdx

▸ **getTexIdx**(): `number`

#### Returns

`number`

#### Inherited from

[WebGLManager](WebGLManager.md).[getTexIdx](WebGLManager.md#gettexidx)

---

### setProjectionMatrix

▸ **setProjectionMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[WebGLManager](WebGLManager.md).[setProjectionMatrix](WebGLManager.md#setprojectionmatrix)
