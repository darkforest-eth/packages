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
export declare const NETWORK = 'xdai';
/**
 * The id of the network where these contracts are deployed.
 */
export declare const NETWORK_ID = 100;
/**
 * The block in which the DarkForestCore contract was deployed.
 */
export declare const START_BLOCK = 19219516;
/**
 * The address for the DarkForestUtils library.
 */
export declare const UTILS_LIBRARY_ADDRESS = '0xF2b9F0019f523E094C86A68E9a7C2eeb336EFe62';
/**
 * The address for the DarkForestPlanet library.
 */
export declare const PLANET_LIBRARY_ADDRESS = '0x736D15c92821D9E5F67e57C0e693c1344dCE31A6';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export declare const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x5f1780CfA33A4E48471c62d1C3f44807cB91D7eD';
/**
 * The address for the Verifier library.
 */
export declare const VERIFIER_LIBRARY_ADDRESS = '0x49b64CCD7AC8E7F24FFa49A954C594bBa87C5642';
/**
 * The address for the DarkForestInitialize library.
 */
export declare const INITIALIZE_LIBRARY_ADDRESS = '0xb949aFCCc7Cf81eb22Ca9a080D9c3c3eD509C8FD';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export declare const LAZY_UPDATE_LIBRARY_ADDRESS = '0x79c63546dD9b87484E8FbDb578dd613B08B6c164';
/**
 * The address for the DarkForestCore contract.
 */
export declare const CORE_CONTRACT_ADDRESS = '0x56AE132B68aEe8da96e4B1376a2CB2711F6FD790';
/**
 * The address for the DarkForestTokens contract.
 */
export declare const TOKENS_CONTRACT_ADDRESS = '0x0e742d2cc96BdDe83aa1BCF05BbF81c28568890e';
/**
 * The address for the DarkForestGetters contract.
 */
export declare const GETTERS_CONTRACT_ADDRESS = '0x731209D398f4899cdDbfBc99593BB139033F5A6a';
/**
 * The address for the Whitelist contract.
 */
export declare const WHITELIST_CONTRACT_ADDRESS = '0xdA651D70f1BDdc13265803f102Fa7A115e3D0934';
