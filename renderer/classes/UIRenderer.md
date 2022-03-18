# Class: UIRenderer

## Implements

- `UIRendererType`

## Table of contents

### Constructors

- [constructor](UIRenderer.md#constructor)

### Properties

- [renderer](UIRenderer.md#renderer)
- [rendererType](UIRenderer.md#renderertype)

### Methods

- [drawMiner](UIRenderer.md#drawminer)
- [flush](UIRenderer.md#flush)
- [queueBorders](UIRenderer.md#queueborders)
- [queueHoveringRect](UIRenderer.md#queuehoveringrect)
- [queueMousePath](UIRenderer.md#queuemousepath)
- [queueRectAtPlanet](UIRenderer.md#queuerectatplanet)
- [queueSelectedRangeRing](UIRenderer.md#queueselectedrangering)
- [queueSelectedRect](UIRenderer.md#queueselectedrect)

## Constructors

### constructor

• **new UIRenderer**(`gl`)

#### Parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `gl` | [`GameGLManager`](GameGLManager.md) |

## Properties

### renderer

• **renderer**: [`Renderer`](Renderer.md)

---

### rendererType

• **rendererType**: `RendererType` = `RendererType.UI`

#### Implementation of

UIRendererType.rendererType

## Methods

### drawMiner

▸ **drawMiner**(): `void`

#### Returns

`void`

#### Implementation of

UIRendererType.drawMiner

---

### flush

▸ **flush**(): `void`

#### Returns

`void`

#### Implementation of

UIRendererType.flush

---

### queueBorders

▸ **queueBorders**(): `void`

#### Returns

`void`

#### Implementation of

UIRendererType.queueBorders

---

### queueHoveringRect

▸ **queueHoveringRect**(): `void`

#### Returns

`void`

#### Implementation of

UIRendererType.queueHoveringRect

---

### queueMousePath

▸ **queueMousePath**(): `void`

#### Returns

`void`

#### Implementation of

UIRendererType.queueMousePath

---

### queueRectAtPlanet

▸ `Private` **queueRectAtPlanet**(`planet`, `coords`, `color`): `void`

#### Parameters

| Name     | Type          |
| :------- | :------------ |
| `planet` | `Planet`      |
| `coords` | `WorldCoords` |
| `color`  | `RGBVec`      |

#### Returns

`void`

---

### queueSelectedRangeRing

▸ **queueSelectedRangeRing**(): `void`

#### Returns

`void`

#### Implementation of

UIRendererType.queueSelectedRangeRing

---

### queueSelectedRect

▸ **queueSelectedRect**(): `void`

#### Returns

`void`

#### Implementation of

UIRendererType.queueSelectedRect
