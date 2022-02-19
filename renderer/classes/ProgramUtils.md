# Class: ProgramUtils

## Table of contents

### Constructors

- [constructor](ProgramUtils.md#constructor)

### Methods

- [createProgram](ProgramUtils.md#createprogram)
- [createShader](ProgramUtils.md#createshader)
- [programFromSources](ProgramUtils.md#programfromsources)

## Constructors

### constructor

• **new ProgramUtils**()

## Methods

### createProgram

▸ `Static` **createProgram**(`gl`, `vertexShader`, `fragShader`): `null` \| `WebGLProgram`

#### Parameters

| Name           | Type                     |
| :------------- | :----------------------- |
| `gl`           | `WebGL2RenderingContext` |
| `vertexShader` | `WebGLShader`            |
| `fragShader`   | `WebGLShader`            |

#### Returns

`null` \| `WebGLProgram`

---

### createShader

▸ `Static` **createShader**(`gl`, `type`, `source`): `null` \| `WebGLShader`

#### Parameters

| Name     | Type                     |
| :------- | :----------------------- |
| `gl`     | `WebGL2RenderingContext` |
| `type`   | `number`                 |
| `source` | `string`                 |

#### Returns

`null` \| `WebGLShader`

---

### programFromSources

▸ `Static` **programFromSources**(`gl`, `vertexShaderSource`, `fragShaderSource`): `null` \| `WebGLProgram`

#### Parameters

| Name                 | Type                     |
| :------------------- | :----------------------- |
| `gl`                 | `WebGL2RenderingContext` |
| `vertexShaderSource` | `string`                 |
| `fragShaderSource`   | `string`                 |

#### Returns

`null` \| `WebGLProgram`
