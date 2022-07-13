"use strict";
/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAUCET_ADDRESS = exports.LIB_ARTIFACT_UTILS_ADDRESS = exports.LIB_PLANET_ADDRESS = exports.LIB_GAME_UTILS_ADDRESS = exports.VERIFIER_ADDRESS = exports.INIT_ADDRESS = exports.CONTRACT_ADDRESS = exports.START_BLOCK = exports.NETWORK_ID = exports.NETWORK = void 0;
/**
 * The name of the network where these contracts are deployed.
 */
exports.NETWORK = 'gnosis_optimism';
/**
 * The id of the network where these contracts are deployed.
 */
exports.NETWORK_ID = 300;
/**
 * The block in which the DarkForest contract was initialized.
 */
exports.START_BLOCK = 1309111;
/**
 * The address for the DarkForest contract.
 */
exports.CONTRACT_ADDRESS = '0xf4597e9dCF55dC0fb7c3C36a7D56c39568582aC2';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
exports.INIT_ADDRESS = '0x523419D12bF3Ed7460B7cdE708c9C8953b95547D';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
exports.VERIFIER_ADDRESS = '0x885E92C27b15883498e7DbB7d6230fd562214fBF';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
exports.LIB_GAME_UTILS_ADDRESS = '0x3A63Ff08bA39C4e940e0B5043bcE279E4d248890';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
exports.LIB_PLANET_ADDRESS = '0x4170639cD9Ab0494c4f4835b4B5d05320C8dc120';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
exports.LIB_ARTIFACT_UTILS_ADDRESS = '0x99123645dF64D7CD1a38FC7b9cD5092Ad32DB974';
exports.FAUCET_ADDRESS = '0xEb1E97445A9E8042a5120ECE339aB70b07307edf';
//# sourceMappingURL=index.js.map