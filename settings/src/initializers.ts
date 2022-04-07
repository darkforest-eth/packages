import * as decoders from 'decoders';
import type { ExactArray10, ExactArray4, ExactArray5, Tuple6 } from './decoder-helpers';
import {
  array6,
  between,
  exactArray10,
  exactArray4,
  exactArray5,
  withDefault,
} from './decoder-helpers';

type PlanetTypeWeights = ExactArray4<ExactArray10<ExactArray5<number>>>;

// Handle Date or ISO8601 strings because the TOML parser converts to Date already
const dateInSeconds = decoders.map(decoders.either(decoders.date, decoders.iso8601), (val) =>
  Math.floor(val.getTime() / 1000)
);

// Generates the default for TOKEN_MINT_END_TIMESTAMP
function oneYearFromNow() {
  const oneYear = 60 * 60 * 24 * 365 * 1000;
  // The default doesn't get passed through the transform so we still need to divide by 1000
  return Math.floor((Date.now() + oneYear) / 1000);
}

export type Initializers = ReturnType<typeof decodeInitializers>;

export const decodeInitializers = decoders.guard(
  decoders.exact({
    START_PAUSED: withDefault(decoders.boolean, false),
    ADMIN_CAN_ADD_PLANETS: withDefault(decoders.boolean, false),
    TOKEN_MINT_END_TIMESTAMP: withDefault(dateInSeconds, oneYearFromNow()),
    WORLD_RADIUS_LOCKED: withDefault(decoders.boolean, false),
    WORLD_RADIUS_MIN: withDefault(decoders.number, 6000),
    /**
     * SNARK keys & Perlin parameters
     */
    DISABLE_ZK_CHECKS: withDefault(decoders.boolean, false),
    PLANETHASH_KEY: decoders.number,
    SPACETYPE_KEY: decoders.number,
    BIOMEBASE_KEY: decoders.number,
    PERLIN_MIRROR_X: withDefault(decoders.boolean, false),
    PERLIN_MIRROR_Y: withDefault(decoders.boolean, false),
    PERLIN_LENGTH_SCALE: withDefault(decoders.number, 8192), // must be power of two at most 8192
    /**
     * Game configuration
     */
    MAX_NATURAL_PLANET_LEVEL: withDefault(decoders.number, 9),
    TIME_FACTOR_HUNDREDTHS: withDefault(decoders.number, 100),
    PERLIN_THRESHOLD_1: withDefault(decoders.number, 13),
    PERLIN_THRESHOLD_2: withDefault(decoders.number, 15),
    PERLIN_THRESHOLD_3: withDefault(decoders.number, 18),
    INIT_PERLIN_MIN: withDefault(decoders.number, 12),
    INIT_PERLIN_MAX: withDefault(decoders.number, 13),
    BIOME_THRESHOLD_1: withDefault(decoders.number, 15),
    BIOME_THRESHOLD_2: withDefault(decoders.number, 17),
    PLANET_LEVEL_THRESHOLDS: withDefault<ExactArray10<number>>(
      exactArray10(decoders.number),
      [16777216, 4194292, 1048561, 262128, 65520, 16368, 4080, 1008, 240, 48]
    ),
    PLANET_RARITY: withDefault(decoders.number, 16384),
    PLANET_TRANSFER_ENABLED: withDefault(decoders.boolean, true),
    PHOTOID_ACTIVATION_DELAY: withDefault(decoders.number, 60 * 60 * 12),
    SPAWN_RIM_AREA: withDefault(decoders.number, 0),
    LOCATION_REVEAL_COOLDOWN: withDefault(decoders.number, 60 * 60 * 24),
    CLAIM_PLANET_COOLDOWN: withDefault(decoders.number, 60 * 60 * 3),
    PLANET_TYPE_WEIGHTS: withDefault<PlanetTypeWeights>(
      exactArray4(exactArray10(exactArray5(between(decoders.number, 0, 255)))),
      [
        [
          [1, 0, 0, 0, 0],
          [13, 2, 0, 0, 1],
          [13, 2, 0, 0, 1],
          [13, 2, 0, 0, 1],
          [13, 2, 0, 0, 1],
          [13, 2, 0, 0, 1],
          [13, 2, 0, 0, 1],
          [13, 2, 0, 0, 1],
          [13, 2, 0, 0, 1],
          [13, 2, 0, 0, 1],
        ],
        [
          [1, 0, 0, 0, 0],
          [12, 2, 1, 0, 1],
          [12, 2, 1, 0, 1],
          [12, 2, 1, 0, 1],
          [12, 2, 1, 0, 1],
          [12, 2, 1, 0, 1],
          [12, 2, 1, 0, 1],
          [12, 2, 1, 0, 1],
          [12, 2, 1, 0, 1],
          [12, 2, 1, 0, 1],
        ],
        [
          [1, 0, 0, 0, 0],
          [10, 4, 1, 0, 1],
          [10, 4, 1, 0, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
        ],
        [
          [1, 0, 0, 0, 0],
          [10, 4, 1, 0, 1],
          [10, 4, 1, 0, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
          [8, 4, 1, 2, 1],
        ],
      ]
    ),
    SILVER_SCORE_VALUE: withDefault<number>(decoders.number, 100),
    ARTIFACT_POINT_VALUES: withDefault<Tuple6<number>>(
      array6(decoders.number),
      [0, 2000, 10000, 200000, 3000000, 20000000]
    ),
    /**
     * Space Junk
     */
    SPACE_JUNK_ENABLED: withDefault(decoders.boolean, true),
    SPACE_JUNK_LIMIT: withDefault(decoders.number, 1000),
    PLANET_LEVEL_JUNK: withDefault<ExactArray10<number>>(
      exactArray10(decoders.number),
      [20, 25, 30, 35, 40, 45, 50, 55, 60, 65]
    ),
    ABANDON_SPEED_CHANGE_PERCENT: withDefault(decoders.number, 150),
    ABANDON_RANGE_CHANGE_PERCENT: withDefault(decoders.number, 150),
    /**
     * Capture Zones
     */
    CAPTURE_ZONES_ENABLED: withDefault(decoders.boolean, true),
    CAPTURE_ZONE_COUNT: withDefault(decoders.number, 20),
    CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL: withDefault(decoders.number, 255),
    CAPTURE_ZONE_RADIUS: withDefault(decoders.number, 500),
    CAPTURE_ZONE_PLANET_LEVEL_SCORE: withDefault<ExactArray10<number>>(
      exactArray10(decoders.number),
      [20_000, 25_000, 30_000, 35_000, 40_000, 45_000, 50_000, 55_000, 60_000, 65_000]
    ),
    CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED: withDefault(decoders.number, 16),
    CAPTURE_ZONES_PER_5000_WORLD_RADIUS: withDefault(decoders.number, 1),
  }),
  { style: 'simple' }
);
