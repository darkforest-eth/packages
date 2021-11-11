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

/**
 * The name of the network where these contracts are deployed.
 */
export const NETWORK = 'xdai';
/**
 * The id of the network where these contracts are deployed.
 */
export const NETWORK_ID = 100;
/**
 * The block in which the DarkForestCore contract was deployed.
 */
export const START_BLOCK = 19023772;
/**
 * The address for the DarkForestUtils library.
 */
export const UTILS_LIBRARY_ADDRESS = '0x6a2cC48ba1e1E77d5E87c49d0df0EC5C0E9cFA6C';
/**
 * The address for the DarkForestPlanet library.
 */
export const PLANET_LIBRARY_ADDRESS = '0x87A38570AAa07413Af1665E891E0b392b1A65c1f';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0xBefF028A043078F66Fa549ac59f78fa630468e2E';
/**
 * The address for the Verifier library.
 */
export const VERIFIER_LIBRARY_ADDRESS = '0x6957A95b49E0d3964484A031e58BcE2BDd4bF4DE';
/**
 * The address for the DarkForestInitialize library.
 */
export const INITIALIZE_LIBRARY_ADDRESS = '0xB9007C788258086B174d7B4910BB975a592199b2';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export const LAZY_UPDATE_LIBRARY_ADDRESS = '0x3c19c36F24923345c1d2705F48bc04ea9534Fcd4';
/**
 * The address for the DarkForestCore contract.
 */
export const CORE_CONTRACT_ADDRESS = '0xBA479b1aC2cf18d9EB1E88bc25487051f4906baE';
/**
 * The address for the DarkForestTokens contract.
 */
export const TOKENS_CONTRACT_ADDRESS = '0xC56135DB1F362C8C7AE6824D23cF77b646D30fB9';
/**
 * The address for the DarkForestGetters contract.
 */
export const GETTERS_CONTRACT_ADDRESS = '0x2f4Bef4418Dd14FF690a441d1e710558e6D70681';
/**
 * The address for the Whitelist contract.
 */
export const WHITELIST_CONTRACT_ADDRESS = '0x1788258B5592b8dC7812f0e763826265f60d7796';
/**
 * The address for the DarkForestGPTCredit contract.
 */
export const GPT_CREDIT_CONTRACT_ADDRESS = '0xC8c7903CD8dB3F2D7956AEBA57A8897F2BB9480C';
/**
 * The address for the DarkForestScoring contract.
 */
export const SCORING_CONTRACT_ADDRESS = '';
