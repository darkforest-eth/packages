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
export declare const NETWORK = 'gnosis_optimism';
/**
 * The id of the network where these contracts are deployed.
 */
export declare const NETWORK_ID = 300;
/**
 * The block in which the DarkForest contract was initialized.
 */
export declare const START_BLOCK = 47399;
/**
 * The address for the DarkForest contract.
 */
export declare const CONTRACT_ADDRESS = '0xC31B2697f310aDDD8e241bcE1958Bce53Bbfaaed';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export declare const INIT_ADDRESS = '0xff3a25E86B2a9Fc5B2FfdE1553D8110C549AA899';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
export declare const VERIFIER_ADDRESS = '0x6b96263225CC723e72F274817a449a2FD8A6c25a';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
export declare const LIB_GAME_UTILS_ADDRESS = '0x9eC5082F943fF5Dd102450F496377D43f589eFa7';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
export declare const LIB_PLANET_ADDRESS = '0x06Eb5e618b313c6C7DeeDcE9e788BA7aE17A6de5';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
export declare const LIB_ARTIFACT_UTILS_ADDRESS = '0x19BfD86E25Cec4928626762Fe3d89E9624D5c51B';
