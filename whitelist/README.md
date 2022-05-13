# @darkforest_eth/whitelist

This package contains utilities for working with DarkForest whitelist keys.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/whitelist
```

```bash
yarn add @darkforest_eth/whitelist
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as whitelist from 'http://cdn.skypack.dev/@darkforest_eth/whitelist';
```

## Table of contents

### Variables

- [keysPerTx](README.md#keyspertx)

### Functions

- [bigIntFromKey](README.md#bigintfromkey)
- [generateKey](README.md#generatekey)
- [generateKeys](README.md#generatekeys)
- [keyHash](README.md#keyhash)

## Variables

### keysPerTx

• `Const` **keysPerTx**: `400`

## Functions

### bigIntFromKey

▸ **bigIntFromKey**(`key`): `BigInteger`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`BigInteger`

---

### generateKey

▸ **generateKey**(): `string`

#### Returns

`string`

---

### generateKeys

▸ **generateKeys**(`count`): `string`[]

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `count` | `number` |

#### Returns

`string`[]

---

### keyHash

▸ **keyHash**(`key`): `string`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`string`
