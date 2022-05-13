# @darkforest_eth/snarks

This package contains `.wasm` compiled SNARK circuits and `.zkey`
proving/verifier keys for the Dark Forest SNARKs. It also contains typescript
types for inputs and outputs to the SnarkJS functions we use to calculate
Dark Forest SNARK proofs, as well as conversion methods that convert between
SnarkJS outputs and Dark Forest contract call args.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/snarks
```

```bash
yarn add @darkforest_eth/snarks
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as snarks from 'http://cdn.skypack.dev/@darkforest_eth/snarks';
```

## Table of contents

### Interfaces

- [BiomebaseSnarkInput](interfaces/BiomebaseSnarkInput.md)
- [InitSnarkInput](interfaces/InitSnarkInput.md)
- [MoveSnarkInput](interfaces/MoveSnarkInput.md)
- [RevealSnarkInput](interfaces/RevealSnarkInput.md)
- [SnarkJSProof](interfaces/SnarkJSProof.md)
- [SnarkJSProofAndSignals](interfaces/SnarkJSProofAndSignals.md)
- [WhitelistSnarkInput](interfaces/WhitelistSnarkInput.md)

### Type aliases

- [BiomebaseSnarkContractCallArgs](README.md#biomebasesnarkcontractcallargs)
- [ContractCallArgs](README.md#contractcallargs)
- [InitSnarkContractCallArgs](README.md#initsnarkcontractcallargs)
- [MoveSnarkContractCallArgs](README.md#movesnarkcontractcallargs)
- [RevealSnarkContractCallArgs](README.md#revealsnarkcontractcallargs)
- [WhitelistSnarkContractCallArgs](README.md#whitelistsnarkcontractcallargs)

### Functions

- [buildContractCallArgs](README.md#buildcontractcallargs)

## Type aliases

### BiomebaseSnarkContractCallArgs

Ƭ **BiomebaseSnarkContractCallArgs**: [[`string`, `string`], [[`string`, `string`], [`string`, `string`]], [`string`, `string`], [`string`, `string`, `string`, `string`, `string`, `string`, `string`]]

Shape of the args for `findArtifact` DarkForest contract call.

---

### ContractCallArgs

Ƭ **ContractCallArgs**: [`RevealSnarkContractCallArgs`](README.md#revealsnarkcontractcallargs) \| [`InitSnarkContractCallArgs`](README.md#initsnarkcontractcallargs) \| [`MoveSnarkContractCallArgs`](README.md#movesnarkcontractcallargs) \| [`BiomebaseSnarkContractCallArgs`](README.md#biomebasesnarkcontractcallargs) \| [`WhitelistSnarkContractCallArgs`](README.md#whitelistsnarkcontractcallargs)

Type representing the shape of args that are passed into DarkForest
functions that require zkSNARK verification.

---

### InitSnarkContractCallArgs

Ƭ **InitSnarkContractCallArgs**: [[`string`, `string`], [[`string`, `string`], [`string`, `string`]], [`string`, `string`], [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`]]

Shape of the args for the `initializePlayer` DarkForest contract call

---

### MoveSnarkContractCallArgs

Ƭ **MoveSnarkContractCallArgs**: [[`string`, `string`], [[`string`, `string`], [`string`, `string`]], [`string`, `string`], [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`]]

(Almost) shape of the args for `move` DarkForest contract call.
The fourth array element additionally needs shipsMoved, silverMoved, and
artifactIdMoved before it can be passed as args to `move`, but those values
are not part of the zkSNARK.

---

### RevealSnarkContractCallArgs

Ƭ **RevealSnarkContractCallArgs**: [[`string`, `string`], [[`string`, `string`], [`string`, `string`]], [`string`, `string`], [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`]]

Shape of the args for `revealLocation` DarkForest contract call

---

### WhitelistSnarkContractCallArgs

Ƭ **WhitelistSnarkContractCallArgs**: [[`string`, `string`], [[`string`, `string`], [`string`, `string`]], [`string`, `string`], [`string`, `string`]]

Shape of the args for `whitelistRegister` DarkForest contract call.

## Functions

### buildContractCallArgs

▸ **buildContractCallArgs**(`snarkProof`, `publicSignals`): [`ContractCallArgs`](README.md#contractcallargs)

Method for converting the output of snarkJS `fullProve` into args that can be
passed into DarkForest smart contract functions which perform zk proof
verification.

#### Parameters

| Name            | Type                                         | Description                                                                 |
| :-------------- | :------------------------------------------- | :-------------------------------------------------------------------------- |
| `snarkProof`    | [`SnarkJSProof`](interfaces/SnarkJSProof.md) | the SNARK proof                                                             |
| `publicSignals` | `string`[]                                   | the circuit's public signals (i.e. output signals and public input signals) |

#### Returns

[`ContractCallArgs`](README.md#contractcallargs)
