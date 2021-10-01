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
export const START_BLOCK = 18361165;
/**
 * The address for the DarkForestUtils library.
 */
export const UTILS_LIBRARY_ADDRESS = '0x53B0aF9cfe7f9FCAAa530702754EA05D70592E28';
/**
 * The address for the DarkForestPlanet library.
 */
export const PLANET_LIBRARY_ADDRESS = '0x044823869f814bA6e36f8f63FEe97EbFfaD67440';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x9733188Cb05d3e070A4bf47A705Cf6a5b82aE74d';
/**
 * The address for the Verifier library.
 */
export const VERIFIER_LIBRARY_ADDRESS = '0x542B74c71adaEa9F6BeEeB916c85dC4785C26311';
/**
 * The address for the DarkForestInitialize library.
 */
export const INITIALIZE_LIBRARY_ADDRESS = '0x3f67B15395b730689e64196093A9f11B513f7DCd';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export const LAZY_UPDATE_LIBRARY_ADDRESS = '0x8b04d70Efc21A58bD6c3030D22aAE93a7763d52F';
/**
 * The address for the DarkForestCore contract.
 */
export const CORE_CONTRACT_ADDRESS = '0x27a166aE00C33Bef64306760aCd7C9fD3c2fEB74';
/**
 * The address for the DarkForestTokens contract.
 */
export const TOKENS_CONTRACT_ADDRESS = '0x8e7Fc9c67Cf2bc5D001682d17355dc5c7f41e4C1';
/**
 * The address for the DarkForestGetters contract.
 */
export const GETTERS_CONTRACT_ADDRESS = '0x71eF8b8D795AEbaf6dd6a2A0397B5D3A0e2B226E';
/**
 * The address for the Whitelist contract.
 */
export const WHITELIST_CONTRACT_ADDRESS = '0xed6b8BC35405bF6aa231CDDe9ec994b9DBF1f501';
/**
 * The address for the DarkForestGPTCredit contract.
 */
export const GPT_CREDIT_CONTRACT_ADDRESS = '0x204104155100d6bc0d8928d720b3CD8d845B0F28';
/**
 * The address for the DarkForestScoring contract.
 */
export const SCORING_CONTRACT_ADDRESS = '';
