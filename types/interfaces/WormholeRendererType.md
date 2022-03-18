# Interface: WormholeRendererType

## Table of contents

### Properties

- [rendererType](WormholeRendererType.md#renderertype)

### Methods

- [flush](WormholeRendererType.md#flush)
- [queueWormholes](WormholeRendererType.md#queuewormholes)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all Wormholes.

#### Returns

`void`

---

### queueWormholes

▸ **queueWormholes**(): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Unlike most renderer you will not be given information about wormholes.
GameUIManager.getUnconfirmedWormholeActivations() to get all unconfirmed wormholes
GameUIManager.getWormholes() to get all active confirmed wormholes

#### Returns

`void`
