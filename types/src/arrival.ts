import type { ArtifactId, EthAddress, LocationId, VoyageId } from './identifier';

/**
 * Represents a voyage.
 */
export interface QueuedArrival {
  eventId: VoyageId;
  player: EthAddress;
  fromPlanet: LocationId;
  toPlanet: LocationId;
  energyArriving: number;
  silverMoved: number;
  artifactId?: ArtifactId;
  departureTime: number;
  arrivalTime: number;
}

/**
 * Convenience type for storing a voyage and a reference to a timeout that is triggered on voyage
 * arrival (in case the timeout needs to be cancelled).
 */
export interface ArrivalWithTimer {
  /**
   * TODO: rename to `arrival` or 'voyage'.
   */
  arrivalData: QueuedArrival;
  timer: ReturnType<typeof setTimeout>;
}
