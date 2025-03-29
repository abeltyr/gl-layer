import { ProgramInfo } from "./webgl.types";

export interface BufferRefs {
  position: WebGLBuffer;
}

export interface RenderSize {
  width: number;
  height: number;
}

export interface RenderWebGLParams {
  gl: WebGLRenderingContext;
  buffersRefCurrent: BufferRefs;
  programInfoRefCurrent: ProgramInfo;
  size: RenderSize;
  secondLayer?: () => void;
}

export interface BufferInitializationResult {
  position: WebGLBuffer;
}

export interface CleanupWebGLParams {
  canvas?: HTMLCanvasElement | null;
}
