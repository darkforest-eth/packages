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
exports.START_BLOCK = 19220184;
/**
 * The address for the DarkForestUtils library.
 */
exports.UTILS_LIBRARY_ADDRESS = '0x7b255fC7e5be888b50f5Bc8f415dCa9b9b0CcBc9';
/**
 * The address for the DarkForestPlanet library.
 */
exports.PLANET_LIBRARY_ADDRESS = '0xF236A527B4ca1dEec5BE6C72E57636230bd27B08';
/**
 * The address for the DarkForestArtifactUtils library.
 */
exports.ARTIFACT_UTILS_LIBRARY_ADDRESS = '0xF008e60A7111709D8F1e7aD45D18ea30d3Feb2Ad';
/**
 * The address for the Verifier library.
 */
exports.VERIFIER_LIBRARY_ADDRESS = '0x0C3598874103A3b8559b2359EC448741Ba1D4f0B';
/**
 * The address for the DarkForestInitialize library.
 */
exports.INITIALIZE_LIBRARY_ADDRESS = '0x207cb177F7BCf318218cf5689e514E8e6577befF';
/**
 * The address for the DarkForestLazyUpdate library.
 */
exports.LAZY_UPDATE_LIBRARY_ADDRESS = '0x860d574d5211599D067A22C117f2eA0304547403';
/**
 * The address for the DarkForestCore contract.
 */
exports.CORE_CONTRACT_ADDRESS = '0xd0cB34DDd61c2D0B622ac3B5D9d0c66957E81b40';
/**
 * The address for the DarkForestTokens contract.
 */
exports.TOKENS_CONTRACT_ADDRESS = '0x2d345Bc745154Ab1bFC85C0E51bB987221723474';
/**
 * The address for the DarkForestGetters contract.
 */
exports.GETTERS_CONTRACT_ADDRESS = '0x2372e9c806fbE525131Af3d3aE41eB23300F0B69';
/**
 * The address for the Whitelist contract.
 */
exports.WHITELIST_CONTRACT_ADDRESS = '0x01c35f7ccEDDD65da91D46b78384e4eBb5782608';
