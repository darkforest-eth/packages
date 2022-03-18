# Interface: UIRendererType

## Table of contents

### Properties

- [rendererType](UIRendererType.md#renderertype)

### Methods

- [drawMiner](UIRendererType.md#drawminer)
- [flush](UIRendererType.md#flush)
- [queueBorders](UIRendererType.md#queueborders)
- [queueHoveringRect](UIRendererType.md#queuehoveringrect)
- [queueMousePath](UIRendererType.md#queuemousepath)
- [queueSelectedRangeRing](UIRendererType.md#queueselectedrangering)
- [queueSelectedRect](UIRendererType.md#queueselectedrect)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### drawMiner

▸ **drawMiner**(): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw the Miner

#### Returns

`void`

---

### flush

▸ **flush**(): `void`

Draws all queued items

#### Returns

`void`

---

### queueBorders

▸ **queueBorders**(): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw the boarder of the game.

#### Returns

`void`

---

### queueHoveringRect

▸ **queueHoveringRect**(): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw a rectangle around a planet to indicate that the planet is being hovered over

#### Returns

`void`

---

### queueMousePath

▸ **queueMousePath**(): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw the path the mouse is taking when trying to transfer energy

#### Returns

`void`

---

### queueSelectedRangeRing

▸ **queueSelectedRangeRing**(): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw the range of a planet when it is selected

#### Returns

`void`

---

### queueSelectedRect

▸ **queueSelectedRect**(): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Used to draw a rectangle around a planet to indicate that the planet has been selected

#### Returns

`void`
