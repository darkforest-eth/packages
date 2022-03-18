# Interface: BackgroundRendererType

## Table of contents

### Properties

- [rendererType](BackgroundRendererType.md#renderertype)

### Methods

- [flush](BackgroundRendererType.md#flush)
- [queueChunks](BackgroundRendererType.md#queuechunks)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws the background

#### Returns

`void`

---

### queueChunks

▸ **queueChunks**(`exploredChunks`, `highPerfMode`, `drawChunkBorders`, `disableFancySpaceEffect`, `innerNebulaColor?`, `nebulaColor?`, `spaceColor?`, `deepSpaceColor?`, `deadSpaceColor?`): `void`

#### Parameters

| Name                      | Type                             | Description                                                          |
| :------------------------ | :------------------------------- | :------------------------------------------------------------------- |
| `exploredChunks`          | `Iterable`<[`Chunk`](Chunk.md)\> | an object that contains a alls chunks of space the user has explored |
| `highPerfMode`            | `boolean`                        | if the game is in high perofromance mode found in settings           |
| `drawChunkBorders`        | `boolean`                        | draws the boarders on each chunk in the game                         |
| `disableFancySpaceEffect` | `boolean`                        | if background renderering should use perlin renderer                 |
| `innerNebulaColor?`       | `string`                         |                                                                      |
| `nebulaColor?`            | `string`                         |                                                                      |
| `spaceColor?`             | `string`                         |                                                                      |
| `deepSpaceColor?`         | `string`                         |                                                                      |
| `deadSpaceColor?`         | `string`                         |                                                                      |

#### Returns

`void`
