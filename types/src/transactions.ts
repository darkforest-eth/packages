import type { ArtifactId, EthAddress, LocationId } from './identifier';
import type { WorldLocation } from './world';

/**
 * @hidden
 */
//eslint-disable-next-line @projectsophon/typescript-enum/no-enum
export const enum ContractMethodName {
  // DarkForestCore
  REVEAL_LOCATION = 'revealLocation',
  INIT = 'initializePlayer',
  MOVE = 'move',
  UPGRADE = 'upgradePlanet',
  BUY_HAT = 'buyHat',
  PLANET_TRANSFER = 'transferOwnership',
  FIND_ARTIFACT = 'findArtifact',
  PROSPECT_PLANET = 'prospectPlanet',
  DEPOSIT_ARTIFACT = 'depositArtifact',
  WITHDRAW_ARTIFACT = 'withdrawArtifact',
  ACTIVATE_ARTIFACT = 'activateArtifact',
  DEACTIVATE_ARTIFACT = 'deactivateArtifact',
  WITHDRAW_SILVER = 'withdrawSilver',

  // Whitelist
  USE_KEY = 'useKey',
  ADD_KEYS = 'addKeys',
}

/**
 * @hidden
 */
//eslint-disable-next-line @projectsophon/typescript-enum/no-enum
export const enum EthTxStatus {
  Init,
  Submit,
  Confirm,
  Fail,
}

/**
 * @hidden
 */
export type TxIntent = {
  // we generate a txId so we can reference the tx
  // before it is submitted to chain and given a txHash
  actionId: string;
  methodName: ContractMethodName;
};

/**
 * @hidden
 */
export type SubmittedTx = TxIntent & {
  txHash: string;
  sentAtTimestamp: number;
};

/**
 * @hidden
 */
export type SubmittedReveal = UnconfirmedReveal & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedInit = TxIntent & {
  methodName: ContractMethodName.INIT;
  locationId: LocationId;
  location: WorldLocation;
};

/**
 * @hidden
 */
export type SubmittedInit = UnconfirmedInit & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedMove = TxIntent & {
  methodName: ContractMethodName.MOVE;
  from: LocationId;
  to: LocationId;
  forces: number;
  silver: number;
  artifact?: ArtifactId;
};

/**
 * @hidden
 */
export type SubmittedMove = UnconfirmedMove & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedFindArtifact = TxIntent & {
  methodName: ContractMethodName.FIND_ARTIFACT;
  planetId: LocationId;
};

/**
 * @hidden
 */
export type SubmittedFindArtifact = UnconfirmedFindArtifact & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedProspectPlanet = TxIntent & {
  methodName: ContractMethodName.PROSPECT_PLANET;
  planetId: LocationId;
};

/**
 * @hidden
 */
export type SubmittedProspectPlanet = UnconfirmedProspectPlanet & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedPlanetTransfer = TxIntent & {
  methodName: ContractMethodName.PLANET_TRANSFER;
  planetId: LocationId;
  newOwner: EthAddress;
};

/**
 * @hidden
 */
export type SubmittedPlanetTransfer = UnconfirmedPlanetTransfer & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedUpgrade = TxIntent & {
  methodName: ContractMethodName.UPGRADE;
  locationId: LocationId;
  upgradeBranch: number; // 0, 1, or 2
};

/**
 * @hidden
 */
export type SubmittedUpgrade = UnconfirmedUpgrade & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedBuyHat = TxIntent & {
  methodName: ContractMethodName.BUY_HAT;
  locationId: LocationId;
};

/**
 * @hidden
 */
export type SubmittedBuyHat = UnconfirmedBuyHat & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedDepositArtifact = TxIntent & {
  methodName: ContractMethodName.DEPOSIT_ARTIFACT;
  locationId: LocationId;
  artifactId: ArtifactId;
};

/**
 * @hidden
 */
export type SubmittedDepositArtifact = UnconfirmedDepositArtifact & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedWithdrawArtifact = TxIntent & {
  methodName: ContractMethodName.WITHDRAW_ARTIFACT;
  locationId: LocationId;
  artifactId: ArtifactId;
};

/**
 * @hidden
 */
export type SubmittedWithdrawArtifact = UnconfirmedWithdrawArtifact & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedActivateArtifact = TxIntent & {
  locationId: LocationId;
  artifactId: ArtifactId;
  wormholeTo?: LocationId;
};

/**
 * @hidden
 */
export type SubmittedActivateArtifact = UnconfirmedActivateArtifact & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedDeactivateArtifact = TxIntent & {
  locationId: LocationId;
  artifactId: ArtifactId;
};

/**
 * @hidden
 */
export type SubmittedDeactivateArtifact = UnconfirmedDeactivateArtifact & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedWithdrawSilver = TxIntent & {
  methodName: ContractMethodName.WITHDRAW_SILVER;
  locationId: LocationId;
  amount: number;
};

/**
 * @hidden
 */
export type SubmittedWithdrawSilver = UnconfirmedWithdrawSilver & SubmittedTx;

/**
 * @hidden
 */
export type UnconfirmedReveal = TxIntent & {
  methodName: ContractMethodName.REVEAL_LOCATION;
  locationId: LocationId;
  location: WorldLocation;
};
