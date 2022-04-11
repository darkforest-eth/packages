import {
  ContractMethodName,
  Transaction,
  TxIntent,
  UnconfirmedActivateArtifact,
  UnconfirmedBuyHat,
  UnconfirmedCapturePlanet,
  UnconfirmedClaimVictory,
  UnconfirmedDeactivateArtifact,
  UnconfirmedDepositArtifact,
  UnconfirmedFindArtifact,
  UnconfirmedGetShips,
  UnconfirmedInit,
  UnconfirmedInvadePlanet,
  UnconfirmedInvadeTargetPlanet,
  UnconfirmedMove,
  UnconfirmedPlanetTransfer,
  UnconfirmedProspectPlanet,
  UnconfirmedReveal,
  UnconfirmedUpgrade,
  UnconfirmedWithdrawArtifact,
  UnconfirmedWithdrawSilver,
} from '@darkforest_eth/types';

// @todo:
// - these `isUnconfirmedX` should be named something that matches the naming convention of the
//   `TxIntent` subtypes - `isXIntent`
// - these `isUnconfirmedX` should check something more than the method name

export function isUnconfirmedReveal(txIntent: TxIntent): txIntent is UnconfirmedReveal {
  return txIntent.methodName === ContractMethodName.REVEAL_LOCATION;
}

export function isUnconfirmedInit(txIntent: TxIntent): txIntent is UnconfirmedInit {
  return txIntent.methodName === ContractMethodName.INIT;
}

export function isUnconfirmedMove(txIntent: TxIntent): txIntent is UnconfirmedMove {
  return txIntent.methodName === ContractMethodName.MOVE;
}

export function isUnconfirmedRelease(txIntent: TxIntent): txIntent is UnconfirmedMove {
  return isUnconfirmedMove(txIntent) && txIntent.abandoning;
}

export function isUnconfirmedUpgrade(txIntent: TxIntent): txIntent is UnconfirmedUpgrade {
  return txIntent.methodName === ContractMethodName.UPGRADE;
}

export function isUnconfirmedBuyHat(txIntent: TxIntent): txIntent is UnconfirmedBuyHat {
  return txIntent.methodName === ContractMethodName.BUY_HAT;
}

export function isUnconfirmedTransfer(txIntent: TxIntent): txIntent is UnconfirmedPlanetTransfer {
  return txIntent.methodName === ContractMethodName.PLANET_TRANSFER;
}

export function isUnconfirmedFindArtifact(txIntent: TxIntent): txIntent is UnconfirmedFindArtifact {
  return txIntent.methodName === ContractMethodName.FIND_ARTIFACT;
}

export function isUnconfirmedDepositArtifact(
  txIntent: TxIntent
): txIntent is UnconfirmedDepositArtifact {
  return txIntent.methodName === ContractMethodName.DEPOSIT_ARTIFACT;
}

export function isUnconfirmedWithdrawArtifact(
  txIntent: TxIntent
): txIntent is UnconfirmedWithdrawArtifact {
  return txIntent.methodName === ContractMethodName.WITHDRAW_ARTIFACT;
}

export function isUnconfirmedProspectPlanet(
  txIntent: TxIntent
): txIntent is UnconfirmedProspectPlanet {
  return txIntent.methodName === ContractMethodName.PROSPECT_PLANET;
}

export function isUnconfirmedActivateArtifact(
  txIntent: TxIntent
): txIntent is UnconfirmedActivateArtifact {
  return txIntent.methodName === ContractMethodName.ACTIVATE_ARTIFACT;
}

export function isUnconfirmedDeactivateArtifact(
  txIntent: TxIntent
): txIntent is UnconfirmedDeactivateArtifact {
  return txIntent.methodName === ContractMethodName.DEACTIVATE_ARTIFACT;
}

export function isUnconfirmedWithdrawSilver(
  txIntent: TxIntent
): txIntent is UnconfirmedWithdrawSilver {
  return txIntent.methodName === ContractMethodName.WITHDRAW_SILVER;
}

export function isUnconfirmedGetShips(txIntent: TxIntent): txIntent is UnconfirmedGetShips {
  return txIntent.methodName === ContractMethodName.GET_SHIPS;
}

export function isUnconfirmedCapturePlanet(
  txIntent: TxIntent
): txIntent is UnconfirmedCapturePlanet {
  return txIntent.methodName === ContractMethodName.CAPTURE_PLANET;
}

export function isUnconfirmedInvadePlanet(txIntent: TxIntent): txIntent is UnconfirmedInvadePlanet {
  return txIntent.methodName === ContractMethodName.INVADE_PLANET;
}

export function isUnconfirmedInvadeTargetPlanet(txIntent: TxIntent): txIntent is UnconfirmedInvadeTargetPlanet {
  return txIntent.methodName === ContractMethodName.INVADE_TARGET_PLANET;
}

export function isUnconfirmedClaimVictory(
  txIntent: TxIntent
): txIntent is UnconfirmedClaimVictory {
  return txIntent.methodName === ContractMethodName.CLAIM_VICTORY;
}

export function isUnconfirmedRevealTx(tx: Transaction): tx is Transaction<UnconfirmedReveal> {
  return isUnconfirmedReveal(tx.intent);
}

export function isUnconfirmedInitTx(tx: Transaction): tx is Transaction<UnconfirmedInit> {
  return isUnconfirmedInit(tx.intent);
}

export function isUnconfirmedMoveTx(tx: Transaction): tx is Transaction<UnconfirmedMove> {
  return isUnconfirmedMove(tx.intent);
}


export function isUnconfirmedReleaseTx(tx: Transaction): tx is Transaction<UnconfirmedMove> {
  return isUnconfirmedRelease(tx.intent);
}

export function isUnconfirmedUpgradeTx(tx: Transaction): tx is Transaction<UnconfirmedUpgrade> {
  return isUnconfirmedUpgrade(tx.intent);
}

export function isUnconfirmedBuyHatTx(tx: Transaction): tx is Transaction<UnconfirmedBuyHat> {
  return isUnconfirmedBuyHat(tx.intent);
}

export function isUnconfirmedTransferTx(
  tx: Transaction
): tx is Transaction<UnconfirmedPlanetTransfer> {
  return isUnconfirmedTransfer(tx.intent);
}

export function isUnconfirmedFindArtifactTx(
  tx: Transaction
): tx is Transaction<UnconfirmedFindArtifact> {
  return isUnconfirmedFindArtifact(tx.intent);
}

export function isUnconfirmedDepositArtifactTx(
  tx: Transaction
): tx is Transaction<UnconfirmedDepositArtifact> {
  return isUnconfirmedDepositArtifact(tx.intent);
}

export function isUnconfirmedWithdrawArtifactTx(
  tx: Transaction
): tx is Transaction<UnconfirmedWithdrawArtifact> {
  return isUnconfirmedWithdrawArtifact(tx.intent);
}

export function isUnconfirmedProspectPlanetTx(
  tx: Transaction
): tx is Transaction<UnconfirmedProspectPlanet> {
  return isUnconfirmedProspectPlanet(tx.intent);
}

export function isUnconfirmedActivateArtifactTx(
  tx: Transaction
): tx is Transaction<UnconfirmedActivateArtifact> {
  return isUnconfirmedActivateArtifact(tx.intent);
}

export function isUnconfirmedDeactivateArtifactTx(
  tx: Transaction
): tx is Transaction<UnconfirmedDeactivateArtifact> {
  return isUnconfirmedDeactivateArtifact(tx.intent);
}

export function isUnconfirmedWithdrawSilverTx(
  tx: Transaction
): tx is Transaction<UnconfirmedWithdrawSilver> {
  return isUnconfirmedWithdrawSilver(tx.intent);
}

export function isUnconfirmedGetShipsTx(tx: Transaction): tx is Transaction<UnconfirmedGetShips> {
  return isUnconfirmedGetShips(tx.intent);
}

export function isUnconfirmedInvadePlanetTx(
  tx: Transaction
): tx is Transaction<UnconfirmedInvadePlanet> {
  return isUnconfirmedInvadePlanet(tx.intent);
}

export function isUnconfirmedCapturePlanetTx(
  tx: Transaction
): tx is Transaction<UnconfirmedCapturePlanet> {
  return isUnconfirmedCapturePlanet(tx.intent);
}

export function isUnconfirmedInvadeTargetPlanetTx(
  tx: Transaction
): tx is Transaction<UnconfirmedInvadeTargetPlanet> {
  return isUnconfirmedInvadeTargetPlanet(tx.intent);
}

export function isUnconfirmedClaimVictoryTx(
  tx: Transaction
): tx is Transaction<UnconfirmedClaimVictory> {
  return isUnconfirmedClaimVictory(tx.intent);
}

