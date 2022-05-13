# @darkforest_eth/constants

This package contains useful constants for use when interacting with
the Dark Forest smart contracts within JavaScript or TypeScript.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/constants
```

```bash
yarn add @darkforest_eth/constants
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as constants from 'http://cdn.skypack.dev/@darkforest_eth/constants';
```

## Table of contents

### Variables

- [BLOCK_EXPLORER_URL](README.md#block_explorer_url)
- [CONTRACT_PRECISION](README.md#contract_precision)
- [DEFAULT_GAS_PRICES](README.md#default_gas_prices)
- [DEFAULT_MAX_CALL_RETRIES](README.md#default_max_call_retries)
- [EMPTY_ADDRESS](README.md#empty_address)
- [EMPTY_ARTIFACT_ID](README.md#empty_artifact_id)
- [EMPTY_LOCATION_ID](README.md#empty_location_id)
- [GAS_PRICES_INTERVAL_MS](README.md#gas_prices_interval_ms)
- [GAS_PRICE_API](README.md#gas_price_api)
- [HAT_SIZES](README.md#hat_sizes)
- [LOCATION_ID_UB](README.md#location_id_ub)
- [MAX_ARTIFACT_RARITY](README.md#max_artifact_rarity)
- [MAX_ARTIFACT_TYPE](README.md#max_artifact_type)
- [MAX_AUTO_GAS_PRICE_GWEI](README.md#max_auto_gas_price_gwei)
- [MAX_BIOME](README.md#max_biome)
- [MAX_PLANET_LEVEL](README.md#max_planet_level)
- [MAX_SPACESHIP_TYPE](README.md#max_spaceship_type)
- [MIN_ARTIFACT_RARITY](README.md#min_artifact_rarity)
- [MIN_ARTIFACT_TYPE](README.md#min_artifact_type)
- [MIN_BIOME](README.md#min_biome)
- [MIN_PLANET_LEVEL](README.md#min_planet_level)
- [MIN_SPACESHIP_TYPE](README.md#min_spaceship_type)
- [PLANET_CLAIM_MIN_LEVEL](README.md#planet_claim_min_level)
- [RECOMMENDED_MODAL_WIDTH](README.md#recommended_modal_width)
- [SpecialKey](README.md#specialkey)
- [THEGRAPH_API_URL](README.md#thegraph_api_url)

## Variables

### BLOCK_EXPLORER_URL

• `Const` **BLOCK_EXPLORER_URL**: `"https://dashboard.tenderly.co/tx/xdai"`

The URL to the block explorer for the chain being used. Prepended to transaction links, etc

---

### CONTRACT_PRECISION

• `Const` **CONTRACT_PRECISION**: `1000`

The precision of Energy & Silver stored in the Dark Forest smart contracts.

Energy and Silver are not stored as floats in the smart contracts,
so any of those values coming from the contracts need to be divided by `CONTRACT_PRECISION`
and any values being sent to the contract need to be multiplied by `CONTRACT_PRECISION`.

---

### DEFAULT_GAS_PRICES

• `Const` **DEFAULT_GAS_PRICES**: `GasPrices`

In case we cannot load gas prices from xDai, these are the default auto gas prices.

---

### DEFAULT_MAX_CALL_RETRIES

• `Const` **DEFAULT_MAX_CALL_RETRIES**: `12`

By default, the various {@link ContractCaller} will retry a blockchain read this many times.

---

### EMPTY_ADDRESS

• `Const` **EMPTY_ADDRESS**: `EthAddress`

The 0x0 Ethereum address, which is used for unowned planets, artifacts without an owner, etc.

---

### EMPTY_ARTIFACT_ID

• `Const` **EMPTY_ARTIFACT_ID**: `ArtifactId`

A blank ArtifactID (all zeros).

---

### EMPTY_LOCATION_ID

• `Const` **EMPTY_LOCATION_ID**: `LocationId`

A blank LocationID (all zeros).

---

### GAS_PRICES_INTERVAL_MS

• `Const` **GAS_PRICES_INTERVAL_MS**: `60000`

The amount of time between gas price refreshes when fetching prices from the oracle.

---

### GAS_PRICE_API

• `Const` **GAS_PRICE_API**: `"https://blockscout.com/xdai/mainnet/api/v1/gas-price-oracle"`

The URL for xDai's API that returns the gas prices for 35th, 60th, and 90th percentiles of gas prices in the
previous 200 blocks. Useful for auto gas price setting.

https://www.xdaichain.com/for-developers/developer-resources/gas-price-oracle

---

### HAT_SIZES

• `Const` **HAT_SIZES**: `string`[]

---

### LOCATION_ID_UB

• `Const` **LOCATION_ID_UB**: `BigInteger`

The upper-bounds of a LocationID.

Represents the maximum possible value that the MiMC hash function (used for IDing locations in the universe) can output.
A LocationID must be less than `LOCATION_ID_UB / PLANET_RARITY` in order to be considered a valid planet.

---

### MAX_ARTIFACT_RARITY

• `Const` **MAX_ARTIFACT_RARITY**: `ArtifactRarity` = `ArtifactRarity.Mythic`

The value of the maximum, valid artifact rarity

---

### MAX_ARTIFACT_TYPE

• `Const` **MAX_ARTIFACT_TYPE**: `ArtifactType` = `ArtifactType.ShipTitan`

The value of the maximum, valid artifact type

---

### MAX_AUTO_GAS_PRICE_GWEI

• `Const` **MAX_AUTO_GAS_PRICE_GWEI**: `15`

In case xDai's auto-price is something ridiculous, we don't want our players to insta run out of
money.

---

### MAX_BIOME

• `Const` **MAX_BIOME**: `Biome` = `Biome.CORRUPTED`

The value of the maximum, valid biome

---

### MAX_PLANET_LEVEL

• `Const` **MAX_PLANET_LEVEL**: `PlanetLevel` = `PlanetLevel.NINE`

The value of the maximum, valid planet level

---

### MAX_SPACESHIP_TYPE

• `Const` **MAX_SPACESHIP_TYPE**: `ArtifactType` = `ArtifactType.ShipTitan`

The value of the maximum, valid spaceship type

---

### MIN_ARTIFACT_RARITY

• `Const` **MIN_ARTIFACT_RARITY**: `ArtifactRarity` = `ArtifactRarity.Common`

The value of the minimum, valid artifact rarity

---

### MIN_ARTIFACT_TYPE

• `Const` **MIN_ARTIFACT_TYPE**: `ArtifactType` = `ArtifactType.Monolith`

The value of the minimum, valid artifact type

---

### MIN_BIOME

• `Const` **MIN_BIOME**: `Biome` = `Biome.OCEAN`

The value of the minimum, valid biome

---

### MIN_PLANET_LEVEL

• `Const` **MIN_PLANET_LEVEL**: `PlanetLevel` = `PlanetLevel.ZERO`

The value of the minimum, valid planet level

---

### MIN_SPACESHIP_TYPE

• `Const` **MIN_SPACESHIP_TYPE**: `ArtifactType` = `ArtifactType.ShipMothership`

The value of the minimum, valid spaceship type

---

### PLANET_CLAIM_MIN_LEVEL

• `Const` **PLANET_CLAIM_MIN_LEVEL**: `3`

The minimum level required for claiming a planet.

---

### RECOMMENDED_MODAL_WIDTH

• `Const` **RECOMMENDED_MODAL_WIDTH**: `"400px"`

{@link PlanetContextPane} is this wide, and all the subpanes of that modal also try to stay this
size as well.

---

### SpecialKey

• `Const` **SpecialKey**: `Object`

Keys to handle in a special fashion when dealing with key presses

#### Type declaration

| Name      | Type        |
| :-------- | :---------- |
| `Control` | `"Control"` |
| `Escape`  | `"Escape"`  |
| `Shift`   | `"Shift"`   |
| `Space`   | `" "`       |
| `Tab`     | `"Tab"`     |

---

### THEGRAPH_API_URL

• `Const` **THEGRAPH_API_URL**: `"https://api.thegraph.com/subgraphs/name/darkforest-eth/dark-forest-v06-round-5"`

This should be updated every round.
