import {
  Artifact,
  ArtifactId,
  CaptureZone,
  Chunk,
  DiagnosticUpdater,
  EthAddress,
  GameViewport,
  IRendererConfig,
  LocatablePlanet,
  LocationId,
  PerlinConfig,
  Planet,
  PlanetLevel,
  PlanetRenderInfo,
  Player,
  QueuedArrival,
  Setting,
  SpaceType,
  Transaction,
  UnconfirmedActivateArtifact,
  UnconfirmedMove,
  WorldCoords,
  WorldLocation,
  Wormhole,
} from '@darkforest_eth/types';
import autoBind from 'auto-bind';
import { AsteroidRenderer } from './Entities/AsteroidRenderer';
import { BackgroundRenderer } from './Entities/BackgroundRenderer';
import { BeltRenderer } from './Entities/BeltRenderer';
import { BlackDomainRenderer } from './Entities/BlackDomainRenderer';
import { CircleRenderer } from './Entities/CircleRenderer';
import { LineRenderer } from './Entities/LineRenderer';
import { MineRenderer } from './Entities/MineRenderer';
import { PlanetRenderer } from './Entities/PlanetRenderer';
import { PlanetRenderManager } from './Entities/PlanetRenderManager';
import { QuasarRenderer } from './Entities/QuasarRenderer';
import { RectRenderer } from './Entities/RectRenderer';
import { RingRenderer } from './Entities/RingRenderer';
import { RuinsRenderer } from './Entities/RuinsRenderer';
import { SpacetimeRipRenderer } from './Entities/SpacetimeRipRenderer';
import { SpriteRenderer } from './Entities/SpriteRenderer';
import { TextRenderer } from './Entities/TextRenderer';
import { VoyageRenderer } from './Entities/VoyageRenderer';
import { WormholeRenderer } from './Entities/WormholeRenderer';
import { Overlay2DRenderer } from './Overlay2DRenderer';
import { UIRenderer } from './UIRenderer';
import { GameGLManager } from './WebGL/GameGLManager';

export interface RendererGameContext extends DiagnosticUpdater {
  getStringSetting(setting: Setting): string | undefined;
  getBooleanSetting(setting: Setting): boolean;
  getIsHighPerfMode(): boolean;
  getWorldRadius(): number;
  getMouseDownPlanet(): LocatablePlanet | undefined;
  getLocationsAndChunks(): { chunks: Set<Chunk>; cachedPlanets: Map<LocationId, PlanetRenderInfo> };
  getLocationOfPlanet(planetId: LocationId): WorldLocation | undefined;
  getPlanetWithId(planetId: LocationId | undefined): Planet | undefined;
  getAccount(): EthAddress | undefined;
  getAllVoyages(): QueuedArrival[];
  getPlayer(address?: EthAddress): Player | undefined;
  getUnconfirmedMoves(): Transaction<UnconfirmedMove>[];
  spaceTypeFromPerlin(perlin: number): SpaceType;
  getPerlinConfig(isBiome: boolean): PerlinConfig;
  getArtifactWithId(artifactId: ArtifactId | undefined): Artifact | undefined;
  getSpaceTypePerlin(coords: WorldCoords, floor: boolean): number;
  getPerlinThresholds(): [number, number, number];
  isOwnedByMe(planet: Planet): boolean;
  getArtifactsWithIds(artifactIds: ArtifactId[]): Array<Artifact | undefined>;
  getSelectedPlanet(): LocatablePlanet | undefined;
  getHoveringOverPlanet(): Planet | undefined;
  getHoveringOverCoords(): WorldCoords | undefined;
  getSelectedCoords(): WorldCoords | undefined;
  getForcesSending(planetId: LocationId): number;
  getEnergyArrivingForMove(
    from: LocationId,
    to: LocationId | undefined,
    dist: number | undefined,
    energy: number
  ): number;
  getIsChoosingTargetPlanet(): boolean;
  getWormholes(): Iterable<Wormhole>;
  getRadiusOfPlanetLevel(planetRarity: PlanetLevel): number;
  getDistCoords(from: WorldCoords, to: WorldCoords): number;
  isOverOwnPlanet(coords: WorldCoords): Planet | undefined;
  getPlanetWithCoords(coords: WorldCoords | undefined): Planet | undefined;
  getUnconfirmedWormholeActivations(): Transaction<UnconfirmedActivateArtifact>[];
  getAllMinerLocations(): WorldCoords[];
  drawAllRunningPlugins(ctx: CanvasRenderingContext2D): void;
  isSendingShip(planetId: LocationId): boolean;
  isAbandoning(): boolean;
  getArtifactSending(planetId: LocationId): Artifact | undefined;
  getAbandonRangeChangePercent(): number;
  getCaptureZones(): Iterable<CaptureZone>;
}

export class Renderer {
  public static instance: Renderer | null;

  private viewport: GameViewport;

  canvas: HTMLCanvasElement;
  glCanvas: HTMLCanvasElement;

  bufferCanvas: HTMLCanvasElement;

  frameRequestId: number;
  context: RendererGameContext;

  frameCount: number;
  now: number; // so that we only need to compute Date.now() once per frame

  // render engines
  public glManager: GameGLManager;
  overlay2dRenderer: Overlay2DRenderer;

  // primitives
  lineRenderer: LineRenderer;
  circleRenderer: CircleRenderer;
  textRenderer: TextRenderer;
  rectRenderer: RectRenderer;

  // game entities
  bgRenderer: BackgroundRenderer;
  planetRenderer: PlanetRenderer;
  asteroidRenderer: AsteroidRenderer;
  beltRenderer: BeltRenderer;
  mineRenderer: MineRenderer;
  spriteRenderer: SpriteRenderer;
  quasarRenderer: QuasarRenderer;
  spacetimeRipRenderer: SpacetimeRipRenderer;
  ruinsRenderer: RuinsRenderer;
  ringRenderer: RingRenderer;
  blackDomainRenderer: BlackDomainRenderer;

  // render managers
  uiRenderManager: UIRenderer;
  planetRenderManager: PlanetRenderManager;
  voyageRenderManager: VoyageRenderer;
  wormholeRenderManager: WormholeRenderer;

  private previousRenderTimestamp: number;

  private constructor(
    canvas: HTMLCanvasElement,
    glCanvas: HTMLCanvasElement,
    bufferCanvas: HTMLCanvasElement,
    viewport: GameViewport,
    context: RendererGameContext,
    config: IRendererConfig
  ) {
    this.canvas = canvas;
    this.glCanvas = glCanvas;
    this.bufferCanvas = bufferCanvas;
    this.context = context;

    this.glManager = new GameGLManager(this, this.glCanvas);
    this.overlay2dRenderer = new Overlay2DRenderer(this, this.canvas);
    this.previousRenderTimestamp = Date.now();

    this.viewport = viewport;

    this.frameCount = 0;
    this.now = Date.now();

    autoBind(this);

    // do async stuff here e.g.: loadTextures(() => this.setup());
    this.setup(config);
  }

  private setup(config: IRendererConfig) {
    this.bgRenderer = new BackgroundRenderer(
      this.glManager,
      this.context.getPerlinConfig(false),
      this.context.getPerlinThresholds(),
      config.spaceColors
    );
    this.planetRenderer = new PlanetRenderer(this.glManager);
    this.asteroidRenderer = new AsteroidRenderer(this.glManager);
    this.beltRenderer = new BeltRenderer(this.glManager);
    this.mineRenderer = new MineRenderer(this.glManager);
    this.spriteRenderer = new SpriteRenderer(this.glManager, true, true);
    this.quasarRenderer = new QuasarRenderer(this.glManager);
    this.spacetimeRipRenderer = new SpacetimeRipRenderer(this.glManager);
    this.ruinsRenderer = new RuinsRenderer(this.glManager);
    this.ringRenderer = new RingRenderer(this.glManager);
    this.blackDomainRenderer = new BlackDomainRenderer(this.glManager);

    this.lineRenderer = new LineRenderer(this.glManager);
    this.circleRenderer = new CircleRenderer(this.glManager);
    this.rectRenderer = new RectRenderer(this.glManager);
    this.textRenderer = new TextRenderer(this.glManager, this.bufferCanvas);

    this.voyageRenderManager = new VoyageRenderer(this);
    this.wormholeRenderManager = new WormholeRenderer(this);
    this.planetRenderManager = new PlanetRenderManager(this);
    this.uiRenderManager = new UIRenderer(this);

    this.loop();
  }

  static destroy(): void {
    if (Renderer.instance) {
      window.cancelAnimationFrame(Renderer.instance.frameRequestId);
    }
    Renderer.instance = null;
  }

  static initialize(
    canvas: HTMLCanvasElement,
    glCanvas: HTMLCanvasElement,
    bufferCanvas: HTMLCanvasElement,
    viewport: GameViewport,
    context: RendererGameContext,
    config: IRendererConfig
  ) {
    const canvasRenderer = new Renderer(canvas, glCanvas, bufferCanvas, viewport, context, config);
    Renderer.instance = canvasRenderer;

    return canvasRenderer;
  }

  private recordRender(now: number) {
    this.context.updateDiagnostics((d) => {
      d.fps = 1000 / (now - this.previousRenderTimestamp);
    });

    this.previousRenderTimestamp = now;
  }

  private loop() {
    this.frameCount++;
    this.now = Date.now();
    this.draw();
    this.recordRender(Date.now());

    this.frameRequestId = window.requestAnimationFrame(() => this.loop());
  }

  /* one optimization we make is to queue batches of lots of vertices, then flush them all to the GPU in one go.
     one result of this is that things don't draw in the order they're queued - they draw in the order they're flushed.
     so *all lines* will draw before *all planets*. if you want to change the ordering on the layers, you need to add
     an early flush() somewhere. */

  private draw() {
    // write matrix uniform
    this.glManager.setProjectionMatrix();

    // clear all
    this.overlay2dRenderer.clear();
    this.glManager.isHighPerf = this.context.getIsHighPerfMode();
    this.glManager.clear();

    // get some data
    const { cachedPlanets, chunks } = this.context.getLocationsAndChunks();

    const innerNebulaColor = this.context.getStringSetting(Setting.RendererColorInnerNebula);
    const nebulaColor = this.context.getStringSetting(Setting.RendererColorNebula);
    const spaceColor = this.context.getStringSetting(Setting.RendererColorSpace);
    const deepSpaceColor = this.context.getStringSetting(Setting.RendererColorDeepSpace);
    const deadSpaceColor = this.context.getStringSetting(Setting.RendererColorDeadSpace);

    const isHighPerfMode = this.context.getBooleanSetting(Setting.HighPerformanceRendering);
    const disableEmojis = this.context.getBooleanSetting(Setting.DisableEmojiRendering);
    const disableHats = this.context.getBooleanSetting(Setting.DisableHatRendering);
    const drawChunkBorders = this.context.getBooleanSetting(Setting.DrawChunkBorders);
    const disableFancySpaceEffect = this.context.getBooleanSetting(Setting.DisableFancySpaceEffect);

    // draw the bg
    this.bgRenderer.drawChunks(
      chunks,
      isHighPerfMode,
      drawChunkBorders,
      disableFancySpaceEffect,
      innerNebulaColor,
      nebulaColor,
      spaceColor,
      deepSpaceColor,
      deadSpaceColor
    );

    this.uiRenderManager.queueBorders();

    for (const zone of this.context.getCaptureZones()) {
      this.circleRenderer.queueCircleWorld(zone.coords, zone.radius, [255, 215, 0, 75]);
    }
    this.circleRenderer.flush();

    this.uiRenderManager.queueSelectedRangeRing();
    this.uiRenderManager.queueSelectedRect();
    this.uiRenderManager.queueHoveringRect();
    this.uiRenderManager.queueMousePath();
    this.uiRenderManager.drawMiner(); // drawn to canvas, which sits above gl

    // queue voyages calls
    this.voyageRenderManager.queueVoyages();

    // queue wormhole calls
    this.wormholeRenderManager.queueWormholes();

    // queue planets
    this.planetRenderManager.queuePlanets(
      cachedPlanets,
      this.now,
      isHighPerfMode,
      disableEmojis,
      disableHats
    );

    // flush all - ordering matters! (they get drawn bottom-up)

    this.lineRenderer.flush();
    this.planetRenderManager.flush();

    this.circleRenderer.flush();
    this.rectRenderer.flush();

    this.textRenderer.flush();

    this.spriteRenderer.flush();

    // render all of the plugins
    this.context.drawAllRunningPlugins(this.overlay2dRenderer.ctx);
  }

  public getViewport(): GameViewport {
    return this.viewport;
  }
}
