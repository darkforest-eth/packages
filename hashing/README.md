# @darkforest_eth/hashing

This package contains MiMC hashing utilities for use with Dark Forest.
The MiMC algorithm is used for both finding planet hashes and calculating
the perlin in-game. Among other things, these values are often needed for
generating Snarks.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/hashing
```

```bash
yarn add @darkforest_eth/hashing
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as hashing from 'http://cdn.skypack.dev/@darkforest_eth/hashing';
```

## Table of contents

### Interfaces

- [IntegerVector](interfaces/IntegerVector.md)

### Variables

- [Fraction](README.md#fraction)
- [MAX_PERLIN_VALUE](README.md#max_perlin_value)

### Functions

- [getRandomGradientAt](README.md#getrandomgradientat)
- [mimcHash](README.md#mimchash)
- [mimcSponge](README.md#mimcsponge)
- [modPBigInt](README.md#modpbigint)
- [modPBigIntNative](README.md#modpbigintnative)
- [perlin](README.md#perlin)
- [rand](README.md#rand)
- [seededRandom](README.md#seededrandom)

## Variables

### Fraction

• **Fraction**: `IFraction`

---

### MAX_PERLIN_VALUE

• `Const` **MAX_PERLIN_VALUE**: `32`

## Functions

### getRandomGradientAt

▸ **getRandomGradientAt**(`point`, `scale`, `randFn`): `Vector`

#### Parameters

| Name     | Type        |
| :------- | :---------- |
| `point`  | `Vector`    |
| `scale`  | `IFraction` |
| `randFn` | `HashFn`    |

#### Returns

`Vector`

---

### mimcHash

▸ **mimcHash**(`key`): (...`inputs`: `number`[]) => `BigInteger`

The primary function used to build any MiMC hashing algorithm for Dark Forest.

#### Parameters

| Name  | Type     | Description                                                                                      |
| :---- | :------- | :----------------------------------------------------------------------------------------------- |
| `key` | `number` | The key for the MiMC algorithm. Will usually be PLANETHASH_KEY, SPACETYPE_KEY, or BIOMEBASE_KEY. |

#### Returns

`fn`

▸ (...`inputs`): `BigInteger`

##### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `...inputs` | `number`[] |

##### Returns

`BigInteger`

---

### mimcSponge

▸ **mimcSponge**(`inputs`, `nOutputs`, `rounds`, `key`): `BigInteger`[]

#### Parameters

| Name       | Type           |
| :--------- | :------------- |
| `inputs`   | `BigInteger`[] |
| `nOutputs` | `number`       |
| `rounds`   | `number`       |
| `key`      | `number`       |

#### Returns

`BigInteger`[]

---

### modPBigInt

▸ **modPBigInt**(`x`): `BigInteger`

Modulo a number with the LOCATION_ID_UB constant.
If the result is < 0, the LOCATION_ID_UB will then be added.

#### Parameters

| Name | Type     | Description                                 |
| :--- | :------- | :------------------------------------------ |
| `x`  | `number` | The number to modulo against LOCATION_ID_UB |

#### Returns

`BigInteger`

---

### modPBigIntNative

▸ **modPBigIntNative**(`x`): `BigInteger`

Modulo a BigInt with the LOCATION_ID_UB constant.
If the result is < 0, the LOCATION_ID_UB will then be added.

#### Parameters

| Name | Type         | Description                                 |
| :--- | :----------- | :------------------------------------------ |
| `x`  | `BigInteger` | The number to modulo against LOCATION_ID_UB |

#### Returns

`BigInteger`

---

### perlin

▸ **perlin**(`coords`, `options`): `number`

Calculates the perlin for a location, given the x,y pair and the PerlinConfig for the game.

#### Parameters

| Name      | Type                                           | Description                                                            |
| :-------- | :--------------------------------------------- | :--------------------------------------------------------------------- |
| `coords`  | [`IntegerVector`](interfaces/IntegerVector.md) | An object of the x,y coordinates for which perlin is being calculated. |
| `options` | `PerlinConfig`                                 | An object containing the configuration for the perlin algorithm.       |

#### Returns

`number`

---

### rand

▸ **rand**(`key`): (...`args`: `number`[]) => `number`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `number` |

#### Returns

`fn`

▸ (...`args`): `number`

##### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `...args` | `number`[] |

##### Returns

`number`

---

### seededRandom

▸ **seededRandom**(`seed`): `number`

Generate a random number based on some seed. Useful for procedural generation.

#### Parameters

| Name   | Type     | Description                    |
| :----- | :------- | :----------------------------- |
| `seed` | `number` | The seed of the random number. |

#### Returns

`number`
