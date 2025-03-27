export interface TextureParams {
  gl: WebGLRenderingContext;
  url: string;
}

export interface TexturesParams {
  gl: WebGLRenderingContext;
  images: string[];
}

export interface ShaderParams {
  gl: WebGLRenderingContext;
  type: number;
  source: string;
}

export interface ShaderProgramParams {
  gl: WebGLRenderingContext;
  fragmentShaderSource: string;
  vertexShaderSource: string;
}
