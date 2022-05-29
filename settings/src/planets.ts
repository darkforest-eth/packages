import * as decoders from 'decoders';

const decodeAdminPlanet = decoders.exact({
  x: decoders.number,
  y: decoders.number,
  level: decoders.number,
  planetType: decoders.number,
  requireValidLocationId: decoders.boolean,
  revealLocation: decoders.boolean,
});

export type AdminPlanets = ReturnType<typeof decodeAdminPlanets>;

export const decodeAdminPlanets = decoders.guard(decoders.array(decodeAdminPlanet), {
  style: 'simple',
});


// Arena

export const decodeArenaPlanet = decoders.exact({
  location: decoders.string,
  x: decoders.string, /* string bc converting to uint, but input can be negative */
  y: decoders.string,
  perlin: decoders.number,
  level: decoders.number,
  planetType: decoders.number,
  requireValidLocationId: decoders.boolean,
  isTargetPlanet: decoders.boolean,
  isSpawnPlanet: decoders.boolean,
});

export type ArenaPlanets = ReturnType<typeof decodeArenaPlanets>;

export const decodeArenaPlanets = decoders.guard(decoders.array(decodeArenaPlanet), {
  style: 'simple',
});
