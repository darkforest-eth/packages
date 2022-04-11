import type { Contract } from 'ethers';
import type { ArtifactId, EthAddress, LocationId } from './identifier';
import type { WorldLocation } from './world';

/**
 * @hidden
 */
//eslint-disable-next-line @projectsophon/typescript-enum/no-enum
export const enum ContractMethodName {
  REVEAL_LOCATION = 'revealLocation',
  INIT = 'initializePlayer',
  MOVE = 'move',
  UPGRADE = 'upgradePlanet',
  BUY_HAT = 'buyHat',
  PLANET_TRANSFER = 'transferPlanet',
  FIND_ARTIFACT = 'findArtifact',
  PROSPECT_PLANET = 'prospectPlanet',
  DEPOSIT_ARTIFACT = 'depositArtifact',
  WITHDRAW_ARTIFACT = 'withdrawArtifact',
  ACTIVATE_ARTIFACT = 'activateArtifact',
  DEACTIVATE_ARTIFACT = 'deactivateArtifact',
  WITHDRAW_SILVER = 'withdrawSilver',
  USE_KEY = 'useKey',
  ADD_KEYS = 'addKeys',
  GET_SHIPS = 'giveSpaceShips',
  CREATE_LOBBY = 'createLobby',
  INVADE_PLANET = 'invadePlanet',
  INVADE_TARGET_PLANET = 'invadeTargetPlanet',
  CAPTURE_PLANET = 'capturePlanet',
  CLAIM_VICTORY = "claimTargetPlanetVictory",
  CREATE_PLANET = "createPlanet",
  CREATE_ARENA_PLANET = "createArenaPlanet",
}

/**
 * @hidden
 */
//eslint-disable-next-line @projectsophon/typescript-enum/no-enum
export const enum EthTxStatus {
  Init = 'Init',
  Processing = 'Processing',
  Prioritized = 'Prioritized',
  Submit = 'Submit',
  Confirm = 'Confirm',
  Fail = 'Fail',
  Cancel = 'Cancel',
}

/**
 * The intent of this type is to represent a transaction that will occur on the blockchain in a way
 * that the game understands. This should usually be accessed as a member of {@link Transaction}.
 * @hidden
 */
export type TxIntent = {
  contract: Contract;
  methodName: ContractMethodName;
  args: Promise<unknown[]>;
};

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
export type UnconfirmedMove = TxIntent & {
  methodName: ContractMethodName.MOVE;
  from: LocationId;
  to: LocationId;
  forces: number;
  silver: number;
  abandoning: boolean;
  artifact?: ArtifactId;
};

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
export type UnconfirmedProspectPlanet = TxIntent & {
  methodName: ContractMethodName.PROSPECT_PLANET;
  planetId: LocationId;
};

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
export type UnconfirmedUpgrade = TxIntent & {
  methodName: ContractMethodName.UPGRADE;
  locationId: LocationId;
  upgradeBranch: number; // 0, 1, or 2
};

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
export type UnconfirmedDepositArtifact = TxIntent & {
  methodName: ContractMethodName.DEPOSIT_ARTIFACT;
  locationId: LocationId;
  artifactId: ArtifactId;
};

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
export type UnconfirmedActivateArtifact = TxIntent & {
  locationId: LocationId;
  artifactId: ArtifactId;
  wormholeTo?: LocationId;
};

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
export type UnconfirmedWithdrawSilver = TxIntent & {
  methodName: ContractMethodName.WITHDRAW_SILVER;
  locationId: LocationId;
  amount: number;
};

/**
 * @hidden
 */
export type UnconfirmedReveal = TxIntent & {
  methodName: ContractMethodName.REVEAL_LOCATION;
  locationId: LocationId;
  location: WorldLocation;
};

/**
 * @hidden
 */
export type UnconfirmedAddKeys = TxIntent & {
  methodName: ContractMethodName.ADD_KEYS;
};

/**
 * @hidden
 */
export type UnconfirmedUseKey = TxIntent & {
  methodName: ContractMethodName.USE_KEY;
};

/**
 * @hidden
 */
export type UnconfirmedGetShips = TxIntent & {
  methodName: ContractMethodName.GET_SHIPS;
  locationId: LocationId;
};

/**
 * @hidden
 */
export type UnconfirmedCreateLobby = TxIntent & {
  methodName: ContractMethodName.CREATE_LOBBY;
};

/**
 * @hidden
 */
export type UnconfirmedInvadePlanet = TxIntent & {
  methodName: ContractMethodName.INVADE_PLANET;
  locationId: LocationId;
};

/*
* @hidden
*/
export declare type UnconfirmedInvadeTargetPlanet = TxIntent & {
   methodName: ContractMethodName.INVADE_TARGET_PLANET;
   locationId: LocationId;
};

/**
 * @hidden
 */
export type UnconfirmedCapturePlanet = TxIntent & {
  methodName: ContractMethodName.CAPTURE_PLANET;
  locationId: LocationId;
};
/**
 * @hidden
 */
 export declare type UnconfirmedClaimVictory = TxIntent & {
  methodName: ContractMethodName.CLAIM_VICTORY;
  locationId: LocationId;
};
/**
 * @hidden
 */
 export declare type UnconfirmedCreateArenaPlanet = TxIntent & {
  methodName: ContractMethodName.CREATE_ARENA_PLANET;
};
