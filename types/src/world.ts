import type { LocationId } from './identifier';

// TODO we should do the &never TS thing for world / canvas coords; as this is a
// common source of bugs
/**
 * Represents the coordinates of a location in the world.
 */
export type WorldCoords = {
  x: number;
  y: number;
};

/**
 * A location in the world with relevant properties: the location's ID
 * (deterministically generated from its coords), the spacetype perlin value at
 * these coordinates, and the biomebase perlin value at these coordinates
 * (combined with spacetype to derive the biome here)
 */
export type WorldLocation = {
  coords: WorldCoords;
  hash: LocationId;
  perlin: number;
  biomebase: number; // biome perlin value. combined with spaceType to get the actual biome
};
