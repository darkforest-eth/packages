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
 * npm install --save @dfdao/contracts
 * ```
 * ```bash
 * yarn add @dfdao/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@dfdao/contracts'
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
 * The block in which the DarkForest contract was initialized.
 */
export declare const START_BLOCK = 21588501;
/**
 * The address for the DarkForest contract.
 */
export declare const CONTRACT_ADDRESS = '0xFFA8e73f34fEE02dA0CDBf8437cCa96832128c42';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export declare const INIT_ADDRESS = '0x9D9ae4819278bB7E8811945CA74aB8F9fD603493';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
export declare const VERIFIER_ADDRESS = '0xaf146666e82015E81143cD40d9dc641251Bcb393';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
export declare const LIB_GAME_UTILS_ADDRESS = '0x2c7b6DADB6aba60161598095C2a2E47c616869D0';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
export declare const LIB_PLANET_ADDRESS = '0x482617c9dd34596825B0FA3b7788A11de6F451C4';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
export declare const LIB_ARTIFACT_UTILS_ADDRESS = '0x6D23f9457db6992b3fa1F47231f617dFc2650093';
