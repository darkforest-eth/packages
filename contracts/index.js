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
exports.LIB_ARTIFACT_UTILS_ADDRESS =
  exports.LIB_PLANET_ADDRESS =
  exports.LIB_GAME_UTILS_ADDRESS =
  exports.VERIFIER_ADDRESS =
  exports.INIT_ADDRESS =
  exports.CONTRACT_ADDRESS =
  exports.START_BLOCK =
  exports.NETWORK_ID =
  exports.NETWORK =
    void 0;
/**
 * The name of the network where these contracts are deployed.
 */
exports.NETWORK = 'gnosis_optimism';
/**
 * The id of the network where these contracts are deployed.
 */
exports.NETWORK_ID = 300;
/**
 * The block in which the DarkForest contract was initialized.
 */
exports.START_BLOCK = 48135;
/**
 * The address for the DarkForest contract.
 */
exports.CONTRACT_ADDRESS = '0x9EED3460Ce72254f9F0ad5164C12F39E5E10A40C';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
exports.INIT_ADDRESS = '0x6b9EA68DbF64aFe8eeFED0169A8B4c5fa8c666cc';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
exports.VERIFIER_ADDRESS = '0xC6cDe623Dd2a027df6F7c13f7dD240E3A89CBA68';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
exports.LIB_GAME_UTILS_ADDRESS = '0xFcEF980d2433E335D66a838B86cd213Aa710378D';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
exports.LIB_PLANET_ADDRESS = '0x58eD9B2E7f1fEC6889D137Bc7Ced7ecD87aD06Ee';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
exports.LIB_ARTIFACT_UTILS_ADDRESS = '0x816a0EC0a526968a8d79e7D0e7113d5afAc25eD0';
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.FAUCET_ADDRESS = void 0;
/**
 * The address for the Faucet contract. Useful for lobbies.
 */
exports.FAUCET_ADDRESS = '0xEb1E97445A9E8042a5120ECE339aB70b07307edf';