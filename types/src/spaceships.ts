import type { Abstract } from './utility';

export type SpaceshipType = Abstract<number, 'SpaceshipType'>;

/**
 * Enumeration of spaceships
 */
export const SpaceshipType = {
  Mothership: 0 as SpaceshipType,
  Whale: 1 as SpaceshipType,
  Crescent: 2 as SpaceshipType,
  Gear: 3 as SpaceshipType,
  Titan: 4 as SpaceshipType,
} as const;

/**
 * Mapping from Spaceships to pretty-printed names.
 */
export const SpaceshipTypeNames = {
  [SpaceshipType.Mothership]: 'Mothership',
  [SpaceshipType.Whale]: 'Whale',
  [SpaceshipType.Crescent]: 'Crescent',
  [SpaceshipType.Gear]: 'Gear',
  [SpaceshipType.Titan]: 'Titan',
} as const;

/**
 * Mapping from Spaceships to pretty-printed descriptions.
 */
 export const SpaceshipTypeDesc = {
    [SpaceshipType.Mothership]: '2x Energy Growth',
    [SpaceshipType.Whale]: '2x Silver Growth',
    [SpaceshipType.Crescent]: 'Convert to Asteroid',
    [SpaceshipType.Gear]: 'Prospect Artifacts',
    [SpaceshipType.Titan]: 'Halt Energy & Silver Growth',
  } as const;