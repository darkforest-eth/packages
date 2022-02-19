# Class: Renderer

## Table of contents

### Constructors

- [constructor](Renderer.md#constructor)

### Properties

- [asteroidRenderer](Renderer.md#asteroidrenderer)
- [beltRenderer](Renderer.md#beltrenderer)
- [bgRenderer](Renderer.md#bgrenderer)
- [blackDomainRenderer](Renderer.md#blackdomainrenderer)
- [bufferCanvas](Renderer.md#buffercanvas)
- [canvas](Renderer.md#canvas)
- [circleRenderer](Renderer.md#circlerenderer)
- [context](Renderer.md#context)
- [frameCount](Renderer.md#framecount)
- [frameRequestId](Renderer.md#framerequestid)
- [glCanvas](Renderer.md#glcanvas)
- [glManager](Renderer.md#glmanager)
- [lineRenderer](Renderer.md#linerenderer)
- [mineRenderer](Renderer.md#minerenderer)
- [now](Renderer.md#now)
- [overlay2dRenderer](Renderer.md#overlay2drenderer)
- [planetRenderManager](Renderer.md#planetrendermanager)
- [planetRenderer](Renderer.md#planetrenderer)
- [previousRenderTimestamp](Renderer.md#previousrendertimestamp)
- [quasarRenderer](Renderer.md#quasarrenderer)
- [rectRenderer](Renderer.md#rectrenderer)
- [ringRenderer](Renderer.md#ringrenderer)
- [ruinsRenderer](Renderer.md#ruinsrenderer)
- [spacetimeRipRenderer](Renderer.md#spacetimeriprenderer)
- [spriteRenderer](Renderer.md#spriterenderer)
- [textRenderer](Renderer.md#textrenderer)
- [uiRenderManager](Renderer.md#uirendermanager)
- [viewport](Renderer.md#viewport)
- [voyageRenderManager](Renderer.md#voyagerendermanager)
- [wormholeRenderManager](Renderer.md#wormholerendermanager)
- [instance](Renderer.md#instance)

### Methods

- [draw](Renderer.md#draw)
- [getViewport](Renderer.md#getviewport)
- [loop](Renderer.md#loop)
- [recordRender](Renderer.md#recordrender)
- [setup](Renderer.md#setup)
- [destroy](Renderer.md#destroy)
- [initialize](Renderer.md#initialize)

## Constructors

### constructor

• `Private` **new Renderer**(`canvas`, `glCanvas`, `bufferCanvas`, `viewport`, `context`, `config`)

#### Parameters

| Name           | Type                                                          |
| :------------- | :------------------------------------------------------------ |
| `canvas`       | `HTMLCanvasElement`                                           |
| `glCanvas`     | `HTMLCanvasElement`                                           |
| `bufferCanvas` | `HTMLCanvasElement`                                           |
| `viewport`     | `GameViewport`                                                |
| `context`      | [`RendererGameContext`](../interfaces/RendererGameContext.md) |
| `config`       | `IRendererConfig`                                             |

## Properties

### asteroidRenderer

• **asteroidRenderer**: `AsteroidRenderer`

---

### beltRenderer

• **beltRenderer**: `BeltRenderer`

---

### bgRenderer

• **bgRenderer**: `BackgroundRenderer`

---

### blackDomainRenderer

• **blackDomainRenderer**: `BlackDomainRenderer`

---

### bufferCanvas

• **bufferCanvas**: `HTMLCanvasElement`

---

### canvas

• **canvas**: `HTMLCanvasElement`

---

### circleRenderer

• **circleRenderer**: `CircleRenderer`

---

### context

• **context**: [`RendererGameContext`](../interfaces/RendererGameContext.md)

---

### frameCount

• **frameCount**: `number`

---

### frameRequestId

• **frameRequestId**: `number`

---

### glCanvas

• **glCanvas**: `HTMLCanvasElement`

---

### glManager

• **glManager**: [`GameGLManager`](GameGLManager.md)

---

### lineRenderer

• **lineRenderer**: `LineRenderer`

---

### mineRenderer

• **mineRenderer**: `MineRenderer`

---

### now

• **now**: `number`

---

### overlay2dRenderer

• **overlay2dRenderer**: `Overlay2DRenderer`

---

### planetRenderManager

• **planetRenderManager**: `PlanetRenderManager`

---

### planetRenderer

• **planetRenderer**: `PlanetRenderer`

---

### previousRenderTimestamp

• `Private` **previousRenderTimestamp**: `number`

---

### quasarRenderer

• **quasarRenderer**: `QuasarRenderer`

---

### rectRenderer

• **rectRenderer**: `RectRenderer`

---

### ringRenderer

• **ringRenderer**: `RingRenderer`

---

### ruinsRenderer

• **ruinsRenderer**: `RuinsRenderer`

---

### spacetimeRipRenderer

• **spacetimeRipRenderer**: `SpacetimeRipRenderer`

---

### spriteRenderer

• **spriteRenderer**: [`SpriteRenderer`](SpriteRenderer.md)

---

### textRenderer

• **textRenderer**: `TextRenderer`

---

### uiRenderManager

• **uiRenderManager**: [`UIRenderer`](UIRenderer.md)

---

### viewport

• `Private` **viewport**: `GameViewport`

---

### voyageRenderManager

• **voyageRenderManager**: `VoyageRenderer`

---

### wormholeRenderManager

• **wormholeRenderManager**: `WormholeRenderer`

---

### instance

▪ `Static` **instance**: `null` \| [`Renderer`](Renderer.md)

## Methods

### draw

▸ `Private` **draw**(): `void`

#### Returns

`void`

---

### getViewport

▸ **getViewport**(): `GameViewport`

#### Returns

`GameViewport`

---

### loop

▸ `Private` **loop**(): `void`

#### Returns

`void`

---

### recordRender

▸ `Private` **recordRender**(`now`): `void`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `now` | `number` |

#### Returns

`void`

---

### setup

▸ `Private` **setup**(`config`): `void`

#### Parameters

| Name     | Type              |
| :------- | :---------------- |
| `config` | `IRendererConfig` |

#### Returns

`void`

---

### destroy

▸ `Static` **destroy**(): `void`

#### Returns

`void`

---

### initialize

▸ `Static` **initialize**(`canvas`, `glCanvas`, `bufferCanvas`, `viewport`, `context`, `config`): [`Renderer`](Renderer.md)

#### Parameters

| Name           | Type                                                          |
| :------------- | :------------------------------------------------------------ |
| `canvas`       | `HTMLCanvasElement`                                           |
| `glCanvas`     | `HTMLCanvasElement`                                           |
| `bufferCanvas` | `HTMLCanvasElement`                                           |
| `viewport`     | `GameViewport`                                                |
| `context`      | [`RendererGameContext`](../interfaces/RendererGameContext.md) |
| `config`       | `IRendererConfig`                                             |

#### Returns

[`Renderer`](Renderer.md)
