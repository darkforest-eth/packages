import { BadgeType } from "./badges";
import { BadgeSet } from "./graph_types";

 export interface SeasonHistory {
  seasonId: number;
  rank: number;
  score: number;
  players: number;
  grandPrixs: GrandPrixHistory[];
}

export interface GrandPrixHistory {
  configHash: string;
  rank: number;
  score: number;
  players: number;
  badges: BadgeType[];
}

export interface CleanConfigPlayer {
  id: string;
  address: string;
  duration: number;
  moves: number;
  startTime: number;
  endTime: number;
  badges: BadgeType[];
  configHash: string;
  gamesStarted: number;
  gamesFinished: number;
  score: number;
}

export interface ConfigBadges {
  configHash: string;
  badge: BadgeSet;
}

export interface SeasonPlayers {
  [address: string]: CleanConfigPlayer[];
}

export interface GrandPrixPlayers {
  [configHash: string]: CleanConfigPlayer[];
}

export interface SeasonScore {
  player: string;
  score: number;
}

export interface Wallbreaker {
  configHash: string;
  player: string;
  duration: number;
  arenaAddress: string;
}

export interface GrandPrixResult {
  bestTime: number;
  moves: number;
  badges: BadgeSet;
}
