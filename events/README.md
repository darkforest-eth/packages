# @darkforest_eth/events

This package contains a typed, single pub/sub pattern used in the Dark Forest game.
Inspired by https://www.npmjs.com/package/monomitter

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/events
```

```bash
yarn add @darkforest_eth/events
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as events from 'http://cdn.skypack.dev/@darkforest_eth/events';
```

## Table of contents

### Type aliases

- [Callback](README.md#callback)
- [Monomitter](README.md#monomitter)
- [Subscription](README.md#subscription)

### Functions

- [monomitter](README.md#monomitter)

## Type aliases

### Callback

Ƭ **Callback**<`T`\>: (`data`: `T`) => `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name   | Type |
| :----- | :--- |
| `data` | `T`  |

##### Returns

`void`

---

### Monomitter

Ƭ **Monomitter**<`T`\>: `Object`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Type declaration

| Name        | Type                                                                                       |
| :---------- | :----------------------------------------------------------------------------------------- |
| `clear`     | () => `void`                                                                               |
| `publish`   | (`data`: `T`) => `void`                                                                    |
| `subscribe` | (`cb`: [`Callback`](README.md#callback)<`T`\>) => [`Subscription`](README.md#subscription) |

---

### Subscription

Ƭ **Subscription**: `Object`

#### Type declaration

| Name          | Type         |
| :------------ | :----------- |
| `unsubscribe` | () => `void` |

## Functions

### monomitter

▸ **monomitter**<`T`\>(`emitLatestOnSubscribe?`): [`Monomitter`](README.md#monomitter)<`T`\>

Constructs a new event emitter, whose purpose is to emit values of the given type.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                    | Type      | Default value | Description                                                                                      |
| :---------------------- | :-------- | :------------ | :----------------------------------------------------------------------------------------------- |
| `emitLatestOnSubscribe` | `boolean` | `false`       | if this is true, upon subscription immediately emit the most recently set value, if there is one |

#### Returns

[`Monomitter`](README.md#monomitter)<`T`\>
