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
exports.SCORING_CONTRACT_ADDRESS =
  exports.GPT_CREDIT_CONTRACT_ADDRESS =
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
exports.START_BLOCK = 19103930;
/**
 * The address for the DarkForestUtils library.
 */
exports.UTILS_LIBRARY_ADDRESS = '0xde9d284A98696cb6ECB7D5B4353C6AD9d0460096';
/**
 * The address for the DarkForestPlanet library.
 */
exports.PLANET_LIBRARY_ADDRESS = '0x9dCAAF7f070851e312642F59e39bc10Fc2F9e10A';
/**
 * The address for the DarkForestArtifactUtils library.
 */
exports.ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x066d4C6505Ca059AD4755841137Bd0FFb585695d';
/**
 * The address for the Verifier library.
 */
exports.VERIFIER_LIBRARY_ADDRESS = '0x33B6aEf2111E40fC639a7100765aDb6594DD2CAc';
/**
 * The address for the DarkForestInitialize library.
 */
exports.INITIALIZE_LIBRARY_ADDRESS = '0x46680B48158CcA5F73997046a3C8aA4E0479E9f6';
/**
 * The address for the DarkForestLazyUpdate library.
 */
exports.LAZY_UPDATE_LIBRARY_ADDRESS = '0xd8235c70a48E9c8555Bb77CFdC2B93fa62A91681';
/**
 * The address for the DarkForestCore contract.
 */
exports.CORE_CONTRACT_ADDRESS = '0x256216b0841542E3517910222afB99e127cfed30';
/**
 * The address for the DarkForestTokens contract.
 */
exports.TOKENS_CONTRACT_ADDRESS = '0x1384Ff14de7B67435D7CA3982Ba7B3FD69CA18B8';
/**
 * The address for the DarkForestGetters contract.
 */
exports.GETTERS_CONTRACT_ADDRESS = '0x8170c6855f0FB667a97F70884FAf81bbB9eC775B';
/**
 * The address for the Whitelist contract.
 */
exports.WHITELIST_CONTRACT_ADDRESS = '0xB560D3fEA4B5Af9717EED27d5d99D049AeCAEa97';
/**
 * The address for the DarkForestGPTCredit contract.
 */
exports.GPT_CREDIT_CONTRACT_ADDRESS = '0xDac552B86bF60Da7EDE8C569B120032c94F7289f';
/**
 * The address for the DarkForestScoring contract.
 */
exports.SCORING_CONTRACT_ADDRESS = '';
