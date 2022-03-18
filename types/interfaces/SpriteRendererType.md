# Interface: SpriteRendererType

## Table of contents

### Properties

- [rendererType](SpriteRendererType.md#renderertype)

### Methods

- [flush](SpriteRendererType.md#flush)
- [queueArtifact](SpriteRendererType.md#queueartifact)
- [queueArtifactWorld](SpriteRendererType.md#queueartifactworld)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued Artifacts.

#### Returns

`void`

---

### queueArtifact

▸ **queueArtifact**(`artifact`, `pos`, `width?`, `alpha?`, `atFrame?`, `color?`, `theta?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw artifacts when traveling with the voyager

#### Parameters

| Name       | Type                                      | Description                                      |
| :--------- | :---------------------------------------- | :----------------------------------------------- |
| `artifact` | [`RenderedArtifact`](RenderedArtifact.md) | information on the type of artifact              |
| `pos`      | [`CanvasCoords`](CanvasCoords.md)         | the position relative to the canvas              |
| `width?`   | `number`                                  | the width of the artifact relative to the canvas |
| `alpha?`   | `number`                                  | The opacity of the image of the artifact         |
| `atFrame?` | `number`                                  |                                                  |
| `color?`   | [`RGBVec`](../README.md#rgbvec)           |                                                  |
| `theta?`   | `number`                                  | The angle the artifact should be rotated         |

#### Returns

`void`

---

### queueArtifactWorld

▸ **queueArtifactWorld**(`artifact`, `posW`, `widthW`, `alpha?`, `atFrame?`, `color?`, `theta?`, `viewport?`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw Artifacts onto the screen when around hovering around a planet

#### Parameters

| Name        | Type                                      | Description                                                 |
| :---------- | :---------------------------------------- | :---------------------------------------------------------- |
| `artifact`  | [`RenderedArtifact`](RenderedArtifact.md) | an object that contains information on the current Artifact |
| `posW`      | [`CanvasCoords`](CanvasCoords.md)         | The position of the artifact relative to the game world     |
| `widthW`    | `number`                                  | The size of the artifact relative to then game world        |
| `alpha?`    | `number`                                  | The opacity of the image of the artifact                    |
| `atFrame?`  | `number`                                  |                                                             |
| `color?`    | [`RGBVec`](../README.md#rgbvec)           |                                                             |
| `theta?`    | `number`                                  | The angle the artifact should be rotated                    |
| `viewport?` | [`GameViewport`](GameViewport.md)         | a GameViewport class                                        |

#### Returns

`void`
