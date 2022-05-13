# Interface: SpaceRendererType

## Table of contents

### Properties

- [rendererType](SpaceRendererType.md#renderertype)

### Methods

- [flush](SpaceRendererType.md#flush)
- [queueChunk](SpaceRendererType.md#queuechunk)
- [setColorConfiguration](SpaceRendererType.md#setcolorconfiguration)

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
Called by the game to draw a chunk of the background. A chunk is a square section of the background.

#### Parameters

| Name    | Type                | Description                                                                                                   |
| :------ | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| `chunk` | [`Chunk`](Chunk.md) | a variable that contains information on the chunk being drawn. A chunk is rectangle section of the background |

#### Returns

`void`

---

### setColorConfiguration

▸ **setColorConfiguration**(`innerNebulaColor`, `nebulaColor`, `spaceColor`, `deepSpaceColor`, `deadSpaceColor`): `void`

In the Darkforest settings players can choose to set their own color configuratio for the background. This is called when the color is changed.

#### Parameters

| Name               | Type     |
| :----------------- | :------- |
| `innerNebulaColor` | `string` |
| `nebulaColor`      | `string` |
| `spaceColor`       | `string` |
| `deepSpaceColor`   | `string` |
| `deadSpaceColor`   | `string` |

#### Returns

`void`
