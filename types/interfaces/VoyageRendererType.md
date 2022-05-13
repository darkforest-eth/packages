# Interface: VoyageRendererType

## Table of contents

### Properties

- [rendererType](VoyageRendererType.md#renderertype)

### Methods

- [flush](VoyageRendererType.md#flush)
- [queueVoyages](VoyageRendererType.md#queuevoyages)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all active voyages.

#### Returns

`void`

---

### queueVoyages

▸ **queueVoyages**(): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Unlike most renderer you will not be given information about voyages.
You can access all voyages by usin GameUIManger.getAllVoyages()

#### Returns

`void`
