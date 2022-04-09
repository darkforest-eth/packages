import * as decoders from 'decoders';

export type Contracts = ReturnType<typeof decodeContracts>;

export const decodeContracts = decoders.guard(
  decoders.exact({
    /**
     * Network information
     */
    NETWORK: decoders.string,
    NETWORK_ID: decoders.number,
    START_BLOCK: decoders.number,
    /**
     * Contract addresses
     */
    CONTRACT_ADDRESS: decoders.string,
    INIT_ADDRESS: decoders.string,
    /**
     * Library addresses
     */
    VERIFIER_ADDRESS: decoders.string,
    LIB_GAME_UTILS_ADDRESS: decoders.string,
    LIB_PLANET_ADDRESS: decoders.string,
    LIB_ARTIFACT_UTILS_ADDRESS: decoders.string,
  }),
  { style: 'simple' }
);
