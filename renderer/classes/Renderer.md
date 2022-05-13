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
- [captureZoneRenderer](Renderer.md#capturezonerenderer)
- [circleRenderer](Renderer.md#circlerenderer)
- [config](Renderer.md#config)
- [context](Renderer.md#context)
- [frameCount](Renderer.md#framecount)
- [frameRequestId](Renderer.md#framerequestid)
- [glCanvas](Renderer.md#glcanvas)
- [glManager](Renderer.md#glmanager)
- [lineRenderer](Renderer.md#linerenderer)
- [mineBodyRenderer](Renderer.md#minebodyrenderer)
- [mineRenderer](Renderer.md#minerenderer)
- [now](Renderer.md#now)
- [overlay2dRenderer](Renderer.md#overlay2drenderer)
- [perlinRenderer](Renderer.md#perlinrenderer)
- [planetRenderManager](Renderer.md#planetrendermanager)
- [planetRenderer](Renderer.md#planetrenderer)
- [previousRenderTimestamp](Renderer.md#previousrendertimestamp)
- [quasarBodyRenderer](Renderer.md#quasarbodyrenderer)
- [quasarRayRenderer](Renderer.md#quasarrayrenderer)
- [quasarRenderer](Renderer.md#quasarrenderer)
- [rectRenderer](Renderer.md#rectrenderer)
- [rendererStack](Renderer.md#rendererstack)
- [ringRenderer](Renderer.md#ringrenderer)
- [ruinsRenderer](Renderer.md#ruinsrenderer)
- [spaceRenderer](Renderer.md#spacerenderer)
- [spacetimeRipRenderer](Renderer.md#spacetimeriprenderer)
- [spriteRenderer](Renderer.md#spriterenderer)
- [textRenderer](Renderer.md#textrenderer)
- [uiRenderManager](Renderer.md#uirendermanager)
- [unminedRenderer](Renderer.md#unminedrenderer)
- [viewport](Renderer.md#viewport)
- [voyageRenderManager](Renderer.md#voyagerendermanager)
- [wormholeRenderManager](Renderer.md#wormholerendermanager)
- [instance](Renderer.md#instance)

### Methods

- [addCustomRenderer](Renderer.md#addcustomrenderer)
- [draw](Renderer.md#draw)
- [get2DRenderer](Renderer.md#get2drenderer)
- [getViewport](Renderer.md#getviewport)
- [loop](Renderer.md#loop)
- [recordRender](Renderer.md#recordrender)
- [removeCustomRenderer](Renderer.md#removecustomrenderer)
- [setRenderer](Renderer.md#setrenderer)
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

• **asteroidRenderer**: `AsteroidRendererType`

---

### beltRenderer

• **beltRenderer**: `BeltRendererType`

---

### bgRenderer

• **bgRenderer**: `BackgroundRendererType`

---

### blackDomainRenderer

• **blackDomainRenderer**: `BlackDomainRendererType`

---

### bufferCanvas

• **bufferCanvas**: `HTMLCanvasElement`

---

### canvas

• **canvas**: `HTMLCanvasElement`

---

### captureZoneRenderer

• **captureZoneRenderer**: `CaptureZoneRendererType`

---

### circleRenderer

• **circleRenderer**: `CircleRendererType`

---

### config

• **config**: `IRendererConfig`

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

• **lineRenderer**: `LineRendererType`

---

### mineBodyRenderer

• **mineBodyRenderer**: `MineBodyRendererType`

---

### mineRenderer

• **mineRenderer**: `MineRendererType`

---

### now

• **now**: `number`

---

### overlay2dRenderer

• **overlay2dRenderer**: `Overlay2DRenderer`

---

### perlinRenderer

• **perlinRenderer**: `PerlinRendererType`

---

### planetRenderManager

• **planetRenderManager**: `PlanetRenderManagerType`

---

### planetRenderer

• **planetRenderer**: `PlanetRendererType`

---

### previousRenderTimestamp

• `Private` **previousRenderTimestamp**: `number`

---

### quasarBodyRenderer

• **quasarBodyRenderer**: `QuasarBodyRendererType`

---

### quasarRayRenderer

• **quasarRayRenderer**: `QuasarRayRendererType`

---

### quasarRenderer

• **quasarRenderer**: `QuasarRendererType`

---

### rectRenderer

• **rectRenderer**: `RectRendererType`

---

### rendererStack

• **rendererStack**: `BaseRenderer`[]

---

### ringRenderer

• **ringRenderer**: `RingRendererType`

---

### ruinsRenderer

• **ruinsRenderer**: `RuinsRendererType`

---

### spaceRenderer

• **spaceRenderer**: `SpaceRendererType`

---

### spacetimeRipRenderer

• **spacetimeRipRenderer**: `SpacetimeRipRendererType`

---

### spriteRenderer

• **spriteRenderer**: `SpriteRendererType`

---

### textRenderer

• **textRenderer**: `TextRendererType`

---

### uiRenderManager

• **uiRenderManager**: `UIRendererType`

---

### unminedRenderer

• **unminedRenderer**: `UnminedRendererType`

---

### viewport

• `Private` **viewport**: `GameViewport`

---

### voyageRenderManager

• **voyageRenderManager**: `VoyageRendererType`

---

### wormholeRenderManager

• **wormholeRenderManager**: `WormholeRendererType`

---

### instance

▪ `Static` **instance**: `null` \| [`Renderer`](Renderer.md)

## Methods

### addCustomRenderer

▸ **addCustomRenderer**(`renderer`): `void`

Called by GameUIManager to add custom renderer into the game.
The function automatically determines what kind of renderer it is based on the type property.
The renderer is then added onto the rendering stack
The renderer stack is a data structure used to determine which renderer to draw with.
The most recently added renderers to the stack will be the ones to be used.

#### Parameters

| Name       | Type           |
| :--------- | :------------- |
| `renderer` | `BaseRenderer` |

#### Returns

`void`

---

### draw

▸ `Private` **draw**(): `void`

#### Returns

`void`

---

### get2DRenderer

▸ **get2DRenderer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

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

### removeCustomRenderer

▸ **removeCustomRenderer**(`renderer`): `void`

Called by GameUIManager to remove the passed in renderers from the game.

#### Parameters

| Name       | Type           | Description        |
| :--------- | :------------- | :----------------- |
| `renderer` | `BaseRenderer` | passed in renderer |

#### Returns

`void`

---

### setRenderer

▸ `Private` **setRenderer**(`renderer`): `boolean`

Determines the type of the passed in renderer and replaces the
current renderer of the same type with the one passed in.
If the renderer is determined to not follow any of the renderer
types it will print a message into the console

#### Parameters

| Name       | Type           | Description         |
| :--------- | :------------- | :------------------ |
| `renderer` | `BaseRenderer` | an unknown renderer |

#### Returns

`boolean`

---

### setup

▸ `Private` **setup**(): `void`

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
