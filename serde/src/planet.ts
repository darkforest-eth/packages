import { CONTRACT_PRECISION } from '@darkforest_eth/constants';
import type { DarkForest } from '@darkforest_eth/contracts/typechain';
import { bonusFromHex } from '@darkforest_eth/hexgen';
import type {
  Planet,
  PlanetDefaults,
  PlanetLevel,
  PlanetType,
  SpaceType,
} from '@darkforest_eth/types';
import { address } from './address';
import { locationIdFromDecStr } from './location';

export type RawPlanet = Awaited<ReturnType<DarkForest['planets']>>;
export type RawPlanetExtendedInfo = Awaited<ReturnType<DarkForest['planetsExtendedInfo']>>;
export type RawPlanetExtendedInfo2 = Awaited<ReturnType<DarkForest['planetsExtendedInfo2']>>;

/**
 * Converts data obtained from a contract call (typed with Typechain) into a
 * `Planet` that can be used by the client (see @darkforest_eth/types). Note
 * that some `Planet` fields (1) store client data that the blockchain is not
 * aware of, such as `unconfirmedDepartures`, (2) store derived data that is
 * calculated later by the client, such as `silverSpent` and `bonus`, or (3)
 * store data which must be added later from the results of additional contract
 * calls, such as `coordsRevealed` and `heldArtifactIds`. Therefore this
 * function may not be very useful to you outside of the specific context of the
 * provided Dark Forest web client.
 *
 * @param rawLocationId string of decimal digits representing a number equal to
 * a planet's ID
 * @param rawPlanet typechain-typed result of a call returning a
 * `PlanetTypes.Planet`
 * @param rawPlanetExtendedInfo typechain-typed result of a call returning a
 * `PlanetTypes.PlanetExtendedInfo`
 * @param rawPlanetExtendedInfo2 typechain-typed result of a call returning a
 * `PlanetTypes.PlanetExtendedInfo2`
 */
export function decodePlanet(
  rawLocationId: string,
  rawPlanet: RawPlanet,
  rawPlanetExtendedInfo: RawPlanetExtendedInfo,
  rawPlanetExtendedInfo2: RawPlanetExtendedInfo2
): Planet {
  const locationId = locationIdFromDecStr(rawLocationId.toString());

  const planet: Planet = {
    locationId: locationId,
    perlin: rawPlanetExtendedInfo.perlin.toNumber(),
    spaceType: rawPlanetExtendedInfo.spaceType as SpaceType,
    owner: address(rawPlanet.owner),
    hatLevel: rawPlanetExtendedInfo.hatLevel.toNumber(),

    planetLevel: rawPlanet.planetLevel.toNumber() as PlanetLevel,
    planetType: rawPlanet.planetType as PlanetType,
    isHomePlanet: rawPlanet.isHomePlanet,

    energyCap: rawPlanet.populationCap.toNumber() / CONTRACT_PRECISION,
    energyGrowth: rawPlanet.populationGrowth.toNumber() / CONTRACT_PRECISION,

    silverCap: rawPlanet.silverCap.toNumber() / CONTRACT_PRECISION,
    silverGrowth: rawPlanet.silverGrowth.toNumber() / CONTRACT_PRECISION,

    energy: rawPlanet.population.toNumber() / CONTRACT_PRECISION,
    silver: rawPlanet.silver.toNumber() / CONTRACT_PRECISION,

    range: rawPlanet.range.toNumber(),
    speed: rawPlanet.speed.toNumber(),
    defense: rawPlanet.defense.toNumber(),

    spaceJunk: rawPlanetExtendedInfo.spaceJunk.toNumber(),

    // metadata
    lastUpdated: rawPlanetExtendedInfo.lastUpdated.toNumber(),
    upgradeState: [
      rawPlanetExtendedInfo.upgradeState0.toNumber(),
      rawPlanetExtendedInfo.upgradeState1.toNumber(),
      rawPlanetExtendedInfo.upgradeState2.toNumber(),
    ],
    unconfirmedClearEmoji: false,
    unconfirmedAddEmoji: false,
    loadingServerState: false,
    needsServerRefresh: true,
    silverSpent: 0, // this is stale and will be updated in GameObjects
    coordsRevealed: false, // this is stale and will be updated in GameObjects

    isInContract: true,
    syncedWithContract: true,
    hasTriedFindingArtifact: rawPlanetExtendedInfo[9],
    prospectedBlockNumber: rawPlanetExtendedInfo.prospectedBlockNumber.eq(0)
      ? undefined
      : rawPlanetExtendedInfo.prospectedBlockNumber.toNumber(),
    destroyed: rawPlanetExtendedInfo[11],
    heldArtifactIds: [], // this is stale and will be updated in GameObjects
    bonus: bonusFromHex(locationId),
    pausers: rawPlanetExtendedInfo2.pausers.toNumber(),

    invader: address(rawPlanetExtendedInfo2.invader),
    capturer: address(rawPlanetExtendedInfo2.capturer),
    invadeStartBlock: rawPlanetExtendedInfo2.invadeStartBlock.eq(0)
      ? undefined
      : rawPlanetExtendedInfo2.invadeStartBlock.toNumber(),
  };

  return planet;
}

type RawDefaults = Awaited<ReturnType<DarkForest['getDefaultStats']>>;

/**
 * Converts the raw typechain result of a call which fetches a
 * `PlanetTypes.PlanetDefaultStats[]` array of structs, and converts it into
 * an object with type `PlanetDefaults` (see @darkforest_eth/types).
 *
 * @param rawDefaults result of a ethers.js contract call which returns a raw
 * `PlanetTypes.PlanetDefaultStats` struct, typed with typechain.
 */
export function decodePlanetDefaults(rawDefaults: RawDefaults): PlanetDefaults {
  return {
    populationCap: rawDefaults.map((x) => x[1].toNumber() / CONTRACT_PRECISION),
    populationGrowth: rawDefaults.map((x) => x[2].toNumber() / CONTRACT_PRECISION),
    range: rawDefaults.map((x) => x[3].toNumber()),
    speed: rawDefaults.map((x) => x[4].toNumber()),
    defense: rawDefaults.map((x) => x[5].toNumber()),
    silverGrowth: rawDefaults.map((x) => x[6].toNumber() / CONTRACT_PRECISION),
    silverCap: rawDefaults.map((x) => x[7].toNumber() / CONTRACT_PRECISION),
    barbarianPercentage: rawDefaults.map((x) => x[8].toNumber()),
  };
}
