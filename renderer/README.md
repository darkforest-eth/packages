# @darkforest_eth/renderer

## Table of contents

### Classes

- [AttribArray](classes/AttribArray.md)
- [AttribManager](classes/AttribManager.md)
- [EngineUtils](classes/EngineUtils.md)
- [GameGLManager](classes/GameGLManager.md)
- [GenericRenderer](classes/GenericRenderer.md)
- [ProgramUtils](classes/ProgramUtils.md)
- [Renderer](classes/Renderer.md)
- [ShaderMixins](classes/ShaderMixins.md)
- [SpriteRenderer](classes/SpriteRenderer.md)
- [UIRenderer](classes/UIRenderer.md)
- [WebGLManager](classes/WebGLManager.md)

### Interfaces

- [Attributes](interfaces/Attributes.md)
- [EngineProgramDefinition](interfaces/EngineProgramDefinition.md)
- [RendererGameContext](interfaces/RendererGameContext.md)
- [Uniforms](interfaces/Uniforms.md)

### Type aliases

- [AttribData](README.md#attribdata)
- [AttribManagers](README.md#attribmanagers)
- [AttributeSetters](README.md#attributesetters)
- [GLArray](README.md#glarray)
- [ProgramInfo](README.md#programinfo)
- [UniformData](README.md#uniformdata)
- [UniformLocs](README.md#uniformlocs)
- [UniformSetter](README.md#uniformsetter)
- [UniformSetters](README.md#uniformsetters)

### Variables

- [engineConsts](README.md#engineconsts)

### Functions

- [getUniformSetter](README.md#getuniformsetter)
- [glsl](README.md#glsl)

## Type aliases

### AttribData

Ƭ **AttribData**: `Object`

#### Index signature

▪ [key: `string`]: `AttribProps`

---

### AttribManagers

Ƭ **AttribManagers**<`T`\>: { [k in keyof T["attribs"]]: AttribManager }

#### Type parameters

| Name | Type                                                                       |
| :--- | :------------------------------------------------------------------------- |
| `T`  | extends [`EngineProgramDefinition`](interfaces/EngineProgramDefinition.md) |

---

### AttributeSetters

Ƭ **AttributeSetters**<`U`\>: { [key in keyof U]: Function }

#### Type parameters

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `U`  | extends [`Attributes`](interfaces/Attributes.md) |

---

### GLArray

Ƭ **GLArray**: `Float32Array` \| `Uint8Array`

---

### ProgramInfo

Ƭ **ProgramInfo**: `Object`

#### Type declaration

| Name           | Type                                 |
| :------------- | :----------------------------------- |
| `fragShader`   | `string`                             |
| `uniforms`     | [`Uniforms`](interfaces/Uniforms.md) |
| `vertexShader` | `string`                             |

---

### UniformData

Ƭ **UniformData**: `Object`

#### Index signature

▪ [key: `string`]: `UniformProps`

---

### UniformLocs

Ƭ **UniformLocs**<`T`\>: { [k in keyof T["uniforms"]]: WebGLUniformLocation }

#### Type parameters

| Name | Type                                                                       |
| :--- | :------------------------------------------------------------------------- |
| `T`  | extends [`EngineProgramDefinition`](interfaces/EngineProgramDefinition.md) |

---

### UniformSetter

Ƭ **UniformSetter**: (`el`: `any`) => `void`

#### Type declaration

▸ (`el`): `void`

##### Parameters

| Name | Type  |
| :--- | :---- |
| `el` | `any` |

##### Returns

`void`

---

### UniformSetters

Ƭ **UniformSetters**<`T`\>: { [k in keyof T["uniforms"]]: UniformSetter }

#### Type parameters

| Name | Type                                                                       |
| :--- | :------------------------------------------------------------------------- |
| `T`  | extends [`EngineProgramDefinition`](interfaces/EngineProgramDefinition.md) |

## Variables

### engineConsts

• `Const` **engineConsts**: `Object`

#### Type declaration

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colors`                 | { `artifacts`: { `shine`: `RGBVec` ; `trim`: `RGBVec` } ; `barbs`: `RGBVec` ; `barbsA`: `RGBAVec` ; `belt`: { `defense`: `RGBVec` ; `range`: `RGBVec` ; `silver`: `RGBVec` ; `speed`: `RGBVec` } ; `bonus`: { `defense`: `RGBVec` ; `energyCap`: `RGBVec` ; `energyGro`: `RGBVec` ; `range`: `RGBVec` ; `spaceJunk`: `RGBVec` ; `speed`: `RGBVec` } ; `gold`: `RGBVec` ; `orange`: `RGBVec` ; `orangeA`: `RGBAVec` ; `purple`: `RGBVec` ; `purpleA`: `RGBAVec` ; `range`: { `dash`: `RGBVec` ; `energy`: `RGBVec` } ; `red`: `RGBVec` ; `redA`: `RGBAVec` ; `voyage`: { `enemy`: `RGBVec` ; `enemyA`: `RGBAVec` ; `mine`: `RGBVec` ; `mineA`: `RGBAVec` ; `shipA`: `RGBAVec` } ; `white`: `RGBVec` ; `whiteA`: `RGBAVec` } |
| `colors.artifacts`       | { `shine`: `RGBVec` ; `trim`: `RGBVec` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.artifacts.shine` | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.artifacts.trim`  | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.barbs`           | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.barbsA`          | `RGBAVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `colors.belt`            | { `defense`: `RGBVec` ; `range`: `RGBVec` ; `silver`: `RGBVec` ; `speed`: `RGBVec` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `colors.belt.defense`    | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.belt.range`      | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.belt.silver`     | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.belt.speed`      | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.bonus`           | { `defense`: `RGBVec` ; `energyCap`: `RGBVec` ; `energyGro`: `RGBVec` ; `range`: `RGBVec` ; `spaceJunk`: `RGBVec` ; `speed`: `RGBVec` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `colors.bonus.defense`   | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.bonus.energyCap` | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.bonus.energyGro` | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.bonus.range`     | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.bonus.spaceJunk` | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.bonus.speed`     | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.gold`            | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.orange`          | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.orangeA`         | `RGBAVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `colors.purple`          | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.purpleA`         | `RGBAVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `colors.range`           | { `dash`: `RGBVec` ; `energy`: `RGBVec` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `colors.range.dash`      | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.range.energy`    | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.red`             | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.redA`            | `RGBAVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `colors.voyage`          | { `enemy`: `RGBVec` ; `enemyA`: `RGBAVec` ; `mine`: `RGBVec` ; `mineA`: `RGBAVec` ; `shipA`: `RGBAVec` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.voyage.enemy`    | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.voyage.enemyA`   | `RGBAVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `colors.voyage.mine`     | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.voyage.mineA`    | `RGBAVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `colors.voyage.shipA`    | `RGBAVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `colors.white`           | `RGBVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `colors.whiteA`          | `RGBAVec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `dashLength`             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `fontStyle`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `glyphs`                 | { `canvasDim`: `number` = 1024; `glyphH`: `number` = 64; `glyphW`: `number` = 40; `rowL`: `number` = 13; `scale`: `number` = 4 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `glyphs.canvasDim`       | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `glyphs.glyphH`          | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `glyphs.glyphW`          | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `glyphs.rowL`            | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `glyphs.scale`           | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `planet`                 | { `maxRadius`: `number` = 4 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `planet.maxRadius`       | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Functions

### getUniformSetter

▸ **getUniformSetter**(`gl`, `loc`, `props`): [`UniformSetter`](README.md#uniformsetter)

Create a setter which writes the given uniform specified by `props` to `loc`.
Note that this function does not call gl.useProgram().

#### Parameters

| Name    | Type                     | Description                                     |
| :------ | :----------------------- | :---------------------------------------------- |
| `gl`    | `WebGL2RenderingContext` | The WebGL rendering context this uniform is in. |
| `loc`   | `WebGLUniformLocation`   | The uniform location to write to.               |
| `props` | `UniformProps`           | UniformProps for this uniform.                  |

#### Returns

[`UniformSetter`](README.md#uniformsetter)

---

### glsl

▸ **glsl**(`arr`, ...`args`): `string`

#### Parameters

| Name      | Type                   |
| :-------- | :--------------------- |
| `arr`     | `TemplateStringsArray` |
| `...args` | `any`[]                |

#### Returns

`string`
