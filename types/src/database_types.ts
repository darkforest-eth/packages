import type { EthAddress } from './identifier';

/**
 * Map from game version -> leaderboard.
 *
 * @hidden
 */
export interface AllAddressScoreMaps {
  [version: string]: AddressScoreMap;
}

/**
 * @hidden
 */
export interface AddressScoreMap {
  [key: string]: number | undefined;
}

export interface Leaderboard {
  entries: LeaderboardEntry[];
  length: number;
}

export interface LeaderboardEntry {
  score: number | undefined;
  moves: number;
  time: number;
  ethAddress: EthAddress;
  twitter?: string;
  startTime: number;
  endTime: number;
}

export interface ArenaLeaderboard {
  entries: ArenaLeaderboardEntry[];
}

export interface ArenaLeaderboardEntry {
  address: string;
  twitter?: string;
  games: number;
  wins: number;
}

