'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
exports.WHITELIST_CONTRACT_ADDRESS =
  exports.GETTERS_CONTRACT_ADDRESS =
  exports.TOKENS_CONTRACT_ADDRESS =
  exports.CORE_CONTRACT_ADDRESS =
  exports.LAZY_UPDATE_LIBRARY_ADDRESS =
  exports.INITIALIZE_LIBRARY_ADDRESS =
  exports.VERIFIER_LIBRARY_ADDRESS =
  exports.ARTIFACT_UTILS_LIBRARY_ADDRESS =
  exports.PLANET_LIBRARY_ADDRESS =
  exports.UTILS_LIBRARY_ADDRESS =
  exports.START_BLOCK =
  exports.NETWORK_ID =
  exports.NETWORK =
    void 0;
/**
 * The name of the network where these contracts are deployed.
 */
exports.NETWORK = 'xdai';
/**
 * The id of the network where these contracts are deployed.
 */
exports.NETWORK_ID = 100;
/**
 * The block in which the DarkForestCore contract was deployed.
 */
exports.START_BLOCK = 19397418;
/**
 * The address for the DarkForestUtils library.
 */
exports.UTILS_LIBRARY_ADDRESS = '0xc321028EFDF94A838A1d96c32Df17598d3A5bDDc';
/**
 * The address for the DarkForestPlanet library.
 */
exports.PLANET_LIBRARY_ADDRESS = '0x721A137df0F8fC2DD30eb47a05233477d47fD29A';
/**
 * The address for the DarkForestArtifactUtils library.
 */
exports.ARTIFACT_UTILS_LIBRARY_ADDRESS = '0xbcc81C6636522cfBb2DC0ef0fcFdf62e287c6a87';
/**
 * The address for the Verifier library.
 */
exports.VERIFIER_LIBRARY_ADDRESS = '0x0B3537b6256385B7fA5ad595227F617aF40a4dda';
/**
 * The address for the DarkForestInitialize library.
 */
exports.INITIALIZE_LIBRARY_ADDRESS = '0xC84B257d24f423AFE5eDD81da1493d6BFc1dF830';
/**
 * The address for the DarkForestLazyUpdate library.
 */
exports.LAZY_UPDATE_LIBRARY_ADDRESS = '0xA924AD7aA8F2Bc972d634dE54AeB921cdE72571f';
/**
 * The address for the DarkForestCore contract.
 */
exports.CORE_CONTRACT_ADDRESS = '0x61690202fA9f49d829A8823e54c184A60e16B003';
/**
 * The address for the DarkForestTokens contract.
 */
exports.TOKENS_CONTRACT_ADDRESS = '0x0e2a8279C3ed4ee091096418dFA60D48d98cF04F';
/**
 * The address for the DarkForestGetters contract.
 */
exports.GETTERS_CONTRACT_ADDRESS = '0xeB4FFAe45C74eCdEf0E93Ba4be10aB592f7128B2';
/**
 * The address for the Whitelist contract.
 */
exports.WHITELIST_CONTRACT_ADDRESS = '0xfbB1c976DDAcC1523AdacFaFd8eF2168E9921d3a';
