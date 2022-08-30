import { Abstract } from './utility';

export type BadgeType = Abstract<string, 'BadgeType'>;

export const BadgeType = {
  StartYourEngine: 'StartYourEngine' as BadgeType,
  Wallbreaker: 'Wallbreaker' as BadgeType,
  Tree: 'Tree' as BadgeType,
  Nice: 'Nice' as BadgeType,
  Sleepy: 'Sleepy' as BadgeType,
} as const;

export type GrandPrixBadge = {
  configHash: string;
  badge: BadgeType;
};
