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
export const START_BLOCK = 19024173;
/**
 * The address for the DarkForestUtils library.
 */
export const UTILS_LIBRARY_ADDRESS = '0x1f8C3c1e1d35121a37104D7da66fb195361D5153';
/**
 * The address for the DarkForestPlanet library.
 */
export const PLANET_LIBRARY_ADDRESS = '0xc45daf423AFE70d91652a01DCcA68259B495c75d';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x44404864520109CbE5f6d813719Cd2cf3F336985';
/**
 * The address for the Verifier library.
 */
export const VERIFIER_LIBRARY_ADDRESS = '0x1d39F4e9797CA38c1b8E57C7CBbCa6360f327D3e';
/**
 * The address for the DarkForestInitialize library.
 */
export const INITIALIZE_LIBRARY_ADDRESS = '0xE5A4F58dA55003eaD578a1449DE977945B9e532b';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export const LAZY_UPDATE_LIBRARY_ADDRESS = '0x9c761e95D16d7B57f33dDe372c52c49D39FB50EB';
/**
 * The address for the DarkForestCore contract.
 */
export const CORE_CONTRACT_ADDRESS = '0x148cEcfeda0E8f4Fc7E17EdAd386E093A3926B49';
/**
 * The address for the DarkForestTokens contract.
 */
export const TOKENS_CONTRACT_ADDRESS = '0xbB0F25fd71d7DC2d7D043C81E4C102CefC8A8964';
/**
 * The address for the DarkForestGetters contract.
 */
export const GETTERS_CONTRACT_ADDRESS = '0x95b9aD77a7336382A8A517605e1F2617FF88dc7C';
/**
 * The address for the Whitelist contract.
 */
export const WHITELIST_CONTRACT_ADDRESS = '0x37322d65Ad7bc420CDfBf827964BE508409d7C66';
/**
 * The address for the DarkForestGPTCredit contract.
 */
export const GPT_CREDIT_CONTRACT_ADDRESS = '0xc4456Ae9dc6a7cf9eB137431f688F8b6c929d587';
/**
 * The address for the DarkForestScoring contract.
 */
export const SCORING_CONTRACT_ADDRESS = '';
