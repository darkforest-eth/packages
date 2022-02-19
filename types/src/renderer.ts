import { mat3, mat4 } from 'gl-matrix';
import { HatType } from './hat';
import { LocatablePlanet } from './planet';
import { Abstract } from './utility';
import { Chunk, WorldCoords } from './world';

export interface PlanetRenderInfo {
  planet: LocatablePlanet;
  radii: Radii;
}

export interface Radii {
  radiusWorld: number;
  radiusPixels: number;
}

export interface CanvasCoords {
  x: number;
  y: number;
}

export interface GameViewport {
  worldToCanvasCoords(worldCoords: WorldCoords): CanvasCoords;
  worldToCanvasDist(dist: number): number;
  canvasToWorldCoords(canvasCoord: CanvasCoords): WorldCoords;
  scale: number;
  centerWorldCoords: WorldCoords;
  viewportWidth: number;
  viewportHeight: number;
  intersectsViewport(chunk: Chunk): boolean;
}

export type AttribType = Abstract<number, 'AttribType'>;
export const AttribType = {
  Float: 5126 as AttribType, // window.WebGL2RenderingContext && WebGL2RenderingContext['FLOAT'],
  UByte: 5121 as AttribType, // window.WebGL2RenderingContext && WebGL2RenderingContext['UNSIGNED_BYTE'],
};

export type DrawMode = Abstract<number, 'DrawMode'>;
export const DrawMode = {
  Triangles: 4 as DrawMode, // window.WebGL2RenderingContext && WebGL2RenderingContext['TRIANGLES'],
  Lines: 1 as DrawMode, // window.WebGL2RenderingContext && WebGL2RenderingContext['LINES'],
  Points: 0 as DrawMode, // window.WebGL2RenderingContext && WebGL2RenderingContext['POINTS'],
};

export type AttribProps = {
  dim: number;
  type: AttribType; // gl.FLOAT, etc
  normalize: boolean;
  name: string;
};

export type UniformType = Abstract<number, 'UniformType'>;
export const UniformType = {
  Mat4: 0 as UniformType,
  Mat3: 1 as UniformType,
  UByte: 2 as UniformType,
  Float: 3 as UniformType,
  Texture: 4 as UniformType,
  Vec3: 5 as UniformType,
};

export type Vec3 = [number, number, number];

export type UniformJSType = mat4 | mat3 | number | Vec3;

export type UniformProps = {
  name: string;
  type: UniformType;
};

export type RGBVec = [number, number, number];

export type RGBAVec = [number, number, number, number];

export type Translation = {
  x: number;
  y: number;
};

export type Scaling = {
  x: number;
  y: number;
};
export type HSLVec = readonly [number, number, number];

export type TextAlign = Abstract<number, 'TextAlign'>;
export const TextAlign = {
  Left: 0 as TextAlign,
  Center: 0.5 as TextAlign,
  Right: 1 as TextAlign,
};

export type TextAnchor = Abstract<number, 'TextAnchor'>;
export const TextAnchor = {
  Top: 0 as TextAnchor,
  Middle: 0.5 as TextAnchor,
  Bottom: 1 as TextAnchor,
};

export type RenderZIndex = Abstract<number, 'RenderZIndex'>;
export const RenderZIndex = {
  Background: 0 as RenderZIndex,
  Voyages: -1 as RenderZIndex,
  Planets: -10 as RenderZIndex,
  Text: -11 as RenderZIndex,
  UI: -12 as RenderZIndex,

  DEFAULT: -98 as RenderZIndex,
  MAX: -99 as RenderZIndex,
};

export type RuinsInfo = {
  [PlanetLevel: number]: {
    weights: [number, number, number, number];
    props: [number, number, number, number];
  };
};

export interface PlanetCosmeticInfo {
  baseHue: number;

  baseStr: string;
  bgStr: string;

  baseColor: RGBVec;
  baseColor2: RGBVec;
  baseColor3: RGBVec;

  mtnColor: RGBVec;
  mtnColor2: RGBVec;
  mtnColor3: RGBVec;

  backgroundColor: RGBVec;
  previewColor: RGBVec;

  landRgb: RGBVec;
  oceanRgb: RGBVec;
  beachRgb: RGBVec;

  asteroidHsl: HSLVec;

  seed: number;

  hatType: HatType;

  spacetime1: RGBVec;
  spacetime2: RGBVec;
  spacetime3: RGBVec;

  ruins?: RuinsInfo;
}

export type SpaceColorConfiguration = {
  innerNebulaColor?: string;
  nebulaColor?: string;
  spaceColor?: string;
  deepSpaceColor?: string;
  deadSpaceColor?: string;
};

export interface IRendererConfig {
  spaceColors: SpaceColorConfiguration;
}
