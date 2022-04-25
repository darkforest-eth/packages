import type { Abstract } from './utility';

export type ModifierType = Abstract<number, 'ModifierType'>;

/**
 * Enumeration of artifact rarity levels. Common = 1, Mythic = 5
 * # popCap, popGrowth, silverCap, silverGrowth, range, speed, defense
 */
export const ModifierType = {
  PopulationCap: 0 as ModifierType,
  PopulationGrowth: 1 as ModifierType,
  SilverCap: 2 as ModifierType,
  SilverGrowth: 3 as ModifierType,
  Range: 4 as ModifierType,
  Speed: 5 as ModifierType,
  Defense: 6 as ModifierType,
  Pirates: 7 as ModifierType
  // Don't forget to update MIN_ARTIFACT_RARITY and/or MAX_ARTIFACT_RARITY in the `constants` package
} as const;

/**
 * Mapping from ArtifactRarity to pretty-printed names.
 */
export const ModifierTypeNames = {
  [ModifierType.PopulationCap]: 'Energy Cap',
  [ModifierType.PopulationGrowth]: 'Energy Gro.',
  [ModifierType.SilverCap]: 'Silver Cap',
  [ModifierType.SilverGrowth]: 'Silver Gro.',
  [ModifierType.Range]: 'Range',
  [ModifierType.Speed]: 'Speed',
  [ModifierType.Defense]: 'Defense',
  [ModifierType.Pirates]: 'Pirates'
} as const;