# Interface: PerlinRendererType

Perlin Renderer is only used when disable fancy space effects is true

## Table of contents

### Properties

- [rendererType](PerlinRendererType.md#renderertype)

### Methods

- [flush](PerlinRendererType.md#flush)
- [queueChunk](PerlinRendererType.md#queuechunk)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all discovered space

#### Returns

`void`

---

### queueChunk

▸ **queueChunk**(`chunk`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.

#### Parameters

| Name    | Type                | Description                                                                                                    |
| :------ | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| `chunk` | [`Chunk`](Chunk.md) | a variable that contains information on the chunk being drawn. A chunk is rectangle section of the background. |

#### Returns

`void`
