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
export const START_BLOCK = 18308935;
/**
 * The address for the DarkForestUtils library.
 */
export const UTILS_LIBRARY_ADDRESS = '0x96fE1810dfaAc3be44E4AaD2fCfD873AAAca499A';
/**
 * The address for the DarkForestPlanet library.
 */
export const PLANET_LIBRARY_ADDRESS = '0x86beb6fED3C37C7ac7EC9c367F824F8e34b3Dae6';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x1b3662fb53B7A10bf2b7Fd9d219077B5EcCF4e91';
/**
 * The address for the Verifier library.
 */
export const VERIFIER_LIBRARY_ADDRESS = '0x3Ade807dF64044114B4c43Bb0cCBbe83EEEd2661';
/**
 * The address for the DarkForestInitialize library.
 */
export const INITIALIZE_LIBRARY_ADDRESS = '0x67073DeE809C11dea9Fdc5169750f4e052D94feb';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export const LAZY_UPDATE_LIBRARY_ADDRESS = '0xddb8DB88E2c72dbd820266fD55C11CEA1d1A8bEE';
/**
 * The address for the DarkForestCore contract.
 */
export const CORE_CONTRACT_ADDRESS = '0x19A07F2e81d144788d45873355c01FC2Be3724F6';
/**
 * The address for the DarkForestTokens contract.
 */
export const TOKENS_CONTRACT_ADDRESS = '0xb4112582D061D6D0ce0aDF8D6fdbf09C173A68c9';
/**
 * The address for the DarkForestGetters contract.
 */
export const GETTERS_CONTRACT_ADDRESS = '0x31d25df40d61b24146118BC219bD2C1468598539';
/**
 * The address for the Whitelist contract.
 */
export const WHITELIST_CONTRACT_ADDRESS = '0xd01485b3C2ae85FCe013535456969Df72a6e8069';
/**
 * The address for the DarkForestGPTCredit contract.
 */
export const GPT_CREDIT_CONTRACT_ADDRESS = '0x79C17c06011C757f68085DDAb280f3B08F6627f8';
/**
 * The address for the DarkForestScoring contract.
 */
export const SCORING_CONTRACT_ADDRESS = '';
