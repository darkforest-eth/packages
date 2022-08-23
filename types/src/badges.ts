import { Abstract } from "./utility";

export type BadgeType = Abstract<string, 'BadgeType'>;

export const BadgeType = {
  Dfdao: 'Dfdao' as BadgeType,
  StartYourEngine: 'StartYourEngine' as BadgeType,
  Wallbreaker: 'Wallbraeker' as BadgeType
} as const;

export type GrandPrixBadge = {
  configHash: string;
  badge: BadgeType;
} 

