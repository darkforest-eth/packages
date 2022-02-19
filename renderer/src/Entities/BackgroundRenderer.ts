import {
  Chunk,
  PerlinConfig,
  RGBVec,
  SpaceColorConfiguration,
  SpaceType,
} from '@darkforest_eth/types';
import { Renderer } from '../Renderer';
import { GameGLManager } from '../WebGL/GameGLManager';
import { PerlinRenderer } from './PerlinRenderer';
import { RectRenderer } from './RectRenderer';
import { SpaceRenderer } from './SpaceRenderer';
import { UnmindedRenderer } from './UnminedRenderer';

export class BackgroundRenderer {
  manager: GameGLManager;
  renderer: Renderer;

  spaceRenderer: SpaceRenderer;
  perlinRenderer: PerlinRenderer;
  borderRenderer: RectRenderer;
  chunkShadowRenderer: RectRenderer;
  unminedRenderer: UnmindedRenderer;
  highQuality = true;

  constructor(
    manager: GameGLManager,
    config: PerlinConfig,
    thresholds: [number, number, number],
    spaceColors: SpaceColorConfiguration
  ) {
    this.manager = manager;
    this.renderer = manager.renderer;

    const rectRenderer = new RectRenderer(manager);
    this.borderRenderer = rectRenderer;
    this.spaceRenderer = new SpaceRenderer(manager, config, thresholds, rectRenderer, spaceColors);
    this.perlinRenderer = new PerlinRenderer(manager, config, thresholds, rectRenderer);

    this.chunkShadowRenderer = new RectRenderer(manager);
    this.unminedRenderer = new UnmindedRenderer(manager);
  }

  drawChunks(
    exploredChunks: Iterable<Chunk>,
    highPerfMode: boolean,
    drawChunkBorders: boolean,
    disableFancySpaceEffect: boolean,
    innerNebulaColor?: string,
    nebulaColor?: string,
    spaceColor?: string,
    deepSpaceColor?: string,
    deadSpaceColor?: string
  ): void {
    // upload current camera transform to shader
    if (highPerfMode) return;

    // use low quality effect if:
    // the user explicitly disabled it OR the user is in high perf mode
    this.highQuality = !(disableFancySpaceEffect || highPerfMode);

    /* draw using mask program */
    const viewport = this.manager.renderer.getViewport();

    // draw large background rect underneath everything
    this.unminedRenderer.queueRect(
      { x: 0, y: 0 },
      viewport.viewportWidth,
      viewport.viewportHeight,
      [0, 0, 0],
      4
    );

    this.spaceRenderer.setColorConfiguration(
      innerNebulaColor,
      nebulaColor,
      spaceColor,
      deepSpaceColor,
      deadSpaceColor
    );

    for (const exploredChunk of exploredChunks) {
      if (viewport.intersectsViewport(exploredChunk)) {
        // add this chunk to the verts array
        if (this.highQuality) {
          this.spaceRenderer.queueChunk(exploredChunk);
          this.chunkShadowRenderer.queueChunkBorderWithPadding(
            exploredChunk,
            1 + 1 * viewport.scale
          );
        } else {
          this.perlinRenderer.queueChunk(exploredChunk);
        }

        if (drawChunkBorders) {
          this.borderRenderer.queueChunkBorder(exploredChunk);
          // this.renderer.overlay2dRenderer.drawChunk(exploredChunk);
        }
      }
    }

    this.flush();
  }

  fillPerlin() {
    const {
      canvas: { width, height },
      ctx,
    } = this.renderer.overlay2dRenderer;

    const { context } = this.renderer;
    const viewport = this.manager.renderer.getViewport();

    ctx.globalAlpha = 0.5;
    for (let x = 0; x < width; x += 100) {
      for (let y = 0; y < height; y += 100) {
        const worldCoords = viewport.canvasToWorldCoords({ x, y });

        const space = context.spaceTypeFromPerlin(context.getSpaceTypePerlin(worldCoords, false));

        let color: RGBVec = [255, 0, 0];
        // if (space === SpaceType.NEBULA) ctx.fillStyle = '#ff0000';
        if (space === SpaceType.SPACE) color = [0, 255, 0];
        if (space === SpaceType.DEEP_SPACE) color = [0, 0, 255];
        if (space === SpaceType.DEAD_SPACE) color = [0, 255, 0];

        // ctx.beginPath();
        // ctx.fillRect(x, y, 20, 20);

        this.borderRenderer.queueRect({ x, y }, 20, 20, color);
      }
    }

    ctx.globalAlpha = 1.0;
  }

  flush(): void {
    if (this.highQuality) {
      this.unminedRenderer.flush();
      this.chunkShadowRenderer.flush();
      this.spaceRenderer.flush();
    } else {
      this.perlinRenderer.flush();
    }
    this.borderRenderer.flush();
  }
}
