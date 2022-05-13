# @darkforest_eth/contracts

This package contains deployed contract addresses, ABIs, and Typechain types
for the Dark Forest game.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/contracts
```

```bash
yarn add @darkforest_eth/contracts
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts';
```

## Typechain

The Typechain types can be found in the `typechain` directory.

## ABIs

The contract ABIs can be found in the `abis` directory.

## Table of contents

### Variables

- [CONTRACT_ADDRESS](README.md#contract_address)
- [INIT_ADDRESS](README.md#init_address)
- [NETWORK](README.md#network)
- [NETWORK_ID](README.md#network_id)
- [START_BLOCK](README.md#start_block)

## Variables

### CONTRACT_ADDRESS

• `Const` **CONTRACT_ADDRESS**: `"0x5da117b8aB8b739346F5EdC166789E5aFb1a7145"`

The address for the DarkForest contract.

---

### INIT_ADDRESS

• `Const` **INIT_ADDRESS**: `"0x162564a30C73204A0b404D23A033bFBA377ADdc2"`

The address for the initalizer contract. Useful for lobbies.

---

### NETWORK

• `Const` **NETWORK**: `"xdai"`

The name of the network where these contracts are deployed.

---

### NETWORK_ID

• `Const` **NETWORK_ID**: `100`

The id of the network where these contracts are deployed.

---

### START_BLOCK

• `Const` **START_BLOCK**: `20713468`

The block in which the DarkForest contract was initialized.
