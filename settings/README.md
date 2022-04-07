# @darkforest_eth/settings

This package contains decoders and types for settings required
to prepare and deploy the Dark Forest smart contracts.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/settings
```

```bash
yarn add @darkforest_eth/settings
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as settings from 'http://cdn.skypack.dev/@darkforest_eth/settings';
```

## Table of contents

### Type aliases

- [AdminPlanets](README.md#adminplanets)
- [Contracts](README.md#contracts)
- [Initializers](README.md#initializers)

### Functions

- [decodeAdminPlanets](README.md#decodeadminplanets)
- [decodeContracts](README.md#decodecontracts)
- [decodeInitializers](README.md#decodeinitializers)

## Type aliases

### AdminPlanets

Ƭ **AdminPlanets**: `ReturnType`<typeof [`decodeAdminPlanets`](README.md#decodeadminplanets)\>

---

### Contracts

Ƭ **Contracts**: `ReturnType`<typeof [`decodeContracts`](README.md#decodecontracts)\>

---

### Initializers

Ƭ **Initializers**: `ReturnType`<typeof [`decodeInitializers`](README.md#decodeinitializers)\>

## Functions

### decodeAdminPlanets

▸ **decodeAdminPlanets**(`blob`): { `level`: `number` ; `planetType`: `number` ; `requireValidLocationId`: `boolean` ; `revealLocation`: `boolean` ; `x`: `number` ; `y`: `number` }[]

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `blob` | `unknown` |

#### Returns

{ `level`: `number` ; `planetType`: `number` ; `requireValidLocationId`: `boolean` ; `revealLocation`: `boolean` ; `x`: `number` ; `y`: `number` }[]

---

### decodeContracts

▸ **decodeContracts**(`blob`): `Object`

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `blob` | `unknown` |

#### Returns

`Object`

| Name               | Type     |
| :----------------- | :------- |
| `CONTRACT_ADDRESS` | `string` |
| `INIT_ADDRESS`     | `string` |
| `NETWORK`          | `string` |
| `NETWORK_ID`       | `number` |
| `START_BLOCK`      | `number` |

---

### decodeInitializers

▸ **decodeInitializers**(`blob`): `Object`

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `blob` | `unknown` |

#### Returns

`Object`

| Name                                  | Type                      |
| :------------------------------------ | :------------------------ |
| `ABANDON_RANGE_CHANGE_PERCENT`        | `number`                  |
| `ABANDON_SPEED_CHANGE_PERCENT`        | `number`                  |
| `ADMIN_CAN_ADD_PLANETS`               | `boolean`                 |
| `ARTIFACT_POINT_VALUES`               | `Tuple6`<`number`\>       |
| `BIOMEBASE_KEY`                       | `number`                  |
| `BIOME_THRESHOLD_1`                   | `number`                  |
| `BIOME_THRESHOLD_2`                   | `number`                  |
| `CAPTURE_ZONES_ENABLED`               | `boolean`                 |
| `CAPTURE_ZONES_PER_5000_WORLD_RADIUS` | `number`                  |
| `CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL`  | `number`                  |
| `CAPTURE_ZONE_COUNT`                  | `number`                  |
| `CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED`   | `number`                  |
| `CAPTURE_ZONE_PLANET_LEVEL_SCORE`     | `ExactArray10`<`number`\> |
| `CAPTURE_ZONE_RADIUS`                 | `number`                  |
| `CLAIM_PLANET_COOLDOWN`               | `number`                  |
| `DISABLE_ZK_CHECKS`                   | `boolean`                 |
| `INIT_PERLIN_MAX`                     | `number`                  |
| `INIT_PERLIN_MIN`                     | `number`                  |
| `LOCATION_REVEAL_COOLDOWN`            | `number`                  |
| `MAX_NATURAL_PLANET_LEVEL`            | `number`                  |
| `PERLIN_LENGTH_SCALE`                 | `number`                  |
| `PERLIN_MIRROR_X`                     | `boolean`                 |
| `PERLIN_MIRROR_Y`                     | `boolean`                 |
| `PERLIN_THRESHOLD_1`                  | `number`                  |
| `PERLIN_THRESHOLD_2`                  | `number`                  |
| `PERLIN_THRESHOLD_3`                  | `number`                  |
| `PHOTOID_ACTIVATION_DELAY`            | `number`                  |
| `PLANETHASH_KEY`                      | `number`                  |
| `PLANET_LEVEL_JUNK`                   | `ExactArray10`<`number`\> |
| `PLANET_LEVEL_THRESHOLDS`             | `ExactArray10`<`number`\> |
| `PLANET_RARITY`                       | `number`                  |
| `PLANET_TRANSFER_ENABLED`             | `boolean`                 |
| `PLANET_TYPE_WEIGHTS`                 | `PlanetTypeWeights`       |
| `SILVER_SCORE_VALUE`                  | `number`                  |
| `SPACETYPE_KEY`                       | `number`                  |
| `SPACE_JUNK_ENABLED`                  | `boolean`                 |
| `SPACE_JUNK_LIMIT`                    | `number`                  |
| `SPAWN_RIM_AREA`                      | `number`                  |
| `START_PAUSED`                        | `boolean`                 |
| `TIME_FACTOR_HUNDREDTHS`              | `number`                  |
| `TOKEN_MINT_END_TIMESTAMP`            | `number`                  |
| `WORLD_RADIUS_LOCKED`                 | `boolean`                 |
| `WORLD_RADIUS_MIN`                    | `number`                  |
