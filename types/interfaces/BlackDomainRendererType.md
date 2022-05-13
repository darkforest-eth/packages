# Interface: BlackDomainRendererType

## Table of contents

### Properties

- [rendererType](BlackDomainRendererType.md#renderertype)

### Methods

- [flush](BlackDomainRendererType.md#flush)
- [queueBlackDomain](BlackDomainRendererType.md#queueblackdomain)

## Properties

### rendererType

• **rendererType**: [`RendererType`](../README.md#renderertype)

## Methods

### flush

▸ **flush**(): `void`

Draws all queued planets with black domain effect.

#### Returns

`void`

---

### queueBlackDomain

▸ **queueBlackDomain**(`planet`, `centerW`, `radiusW`): `void`

The game calls the queue function when the entities should be put into a back buffer queue.
The back buffer is used to contain information on the entities being drawn for later use in the flush function.
The implementing renderer should contains its own back buffer.
Queue the planet that has been dystroyed to be drawn

#### Parameters

| Name      | Type                                      | Description                                           |
| :-------- | :---------------------------------------- | :---------------------------------------------------- |
| `planet`  | [`Planet`](../README.md#planet)           | an object that contains info about the current planet |
| `centerW` | [`WorldCoords`](../README.md#worldcoords) | Location of the planet relative to the game world     |
| `radiusW` | `number`                                  | Radius of the planet relative to the game world       |

#### Returns

`void`
