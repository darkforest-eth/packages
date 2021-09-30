import type { DarkForestCore, DarkForestGetters } from '@darkforest_eth/contracts/typechain';
import type { Awaited, Upgrade, UpgradeBranches } from '@darkforest_eth/types';

// Sort of duplicate of RawArtifactWithMetadata to avoid circular dependency
export type RawUpgrade = Awaited<ReturnType<DarkForestGetters['getArtifactById']>>['upgrade'];
export type RawUpgradesBranches = Awaited<ReturnType<DarkForestCore['getUpgrades']>>;

/**
 * Converts raw data received from a typechain-typed ethers.js contract call
 * returning a `DarkForestTypes.Upgrade` into an `Upgrade` object (see
 * @darkforest_eth/types)
 *
 * @param rawUpgrade raw data received from a typechain-typed ethers.js contract
 * call returning a `DarkForestTypes.Upgrade`
 */
export function decodeUpgrade(rawUpgrade: RawUpgrade): Upgrade {
  return {
    energyCapMultiplier: rawUpgrade.popCapMultiplier.toNumber(),
    energyGroMultiplier: rawUpgrade.popGroMultiplier.toNumber(),
    rangeMultiplier: rawUpgrade.rangeMultiplier.toNumber(),
    speedMultiplier: rawUpgrade.speedMultiplier.toNumber(),
    defMultiplier: rawUpgrade.defMultiplier.toNumber(),
  };
}

/**
 * Converts the raw return value of an ether.js contract call to
 * `DarkForestCore.getUpgrades` to a 2D array of `Upgrade`s.
 *
 * @param rawUpgradeBranches raw return value of ether.js contract call to
 * `DarkForestCore.getUpgrades`
 */
export function decodeUpgradeBranches(rawUpgradeBranches: RawUpgradesBranches): UpgradeBranches {
  return rawUpgradeBranches.map((a) => a.map(decodeUpgrade)) as UpgradeBranches;
}
