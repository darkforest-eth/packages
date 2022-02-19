# Class: UIRenderer

## Table of contents

### Constructors

- [constructor](UIRenderer.md#constructor)

### Properties

- [renderer](UIRenderer.md#renderer)

### Methods

- [drawMiner](UIRenderer.md#drawminer)
- [queueBorders](UIRenderer.md#queueborders)
- [queueHoveringRect](UIRenderer.md#queuehoveringrect)
- [queueMousePath](UIRenderer.md#queuemousepath)
- [queueRectAtPlanet](UIRenderer.md#queuerectatplanet)
- [queueSelectedRangeRing](UIRenderer.md#queueselectedrangering)
- [queueSelectedRect](UIRenderer.md#queueselectedrect)

## Constructors

### constructor

• **new UIRenderer**(`renderer`)

#### Parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `renderer` | [`Renderer`](Renderer.md) |

## Properties

### renderer

• **renderer**: [`Renderer`](Renderer.md)

## Methods

### drawMiner

▸ **drawMiner**(): `void`

#### Returns

`void`

---

### queueBorders

▸ **queueBorders**(): `void`

#### Returns

`void`

---

### queueHoveringRect

▸ **queueHoveringRect**(): `void`

#### Returns

`void`

---

### queueMousePath

▸ **queueMousePath**(): `void`

#### Returns

`void`

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

---

### queueSelectedRect

▸ **queueSelectedRect**(): `void`

#### Returns

`void`
