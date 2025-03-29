export interface WebGLUniform {
  uniformName: string;
  webglName: string;
}

export interface WebGLAttribute {
  attributeName: string;
  webglName: string;
}

export interface ShaderSource {
  fragmentShaderSource: string;
  vertexShaderSource: string;
}

export interface InitializeWebGLParams {
  gl: WebGLRenderingContext;
  uniforms?: WebGLUniform[];
  attributes?: WebGLAttribute[];
  shader: ShaderSource;
}

export interface ProgramInfo {
  program: WebGLProgram;
  attribLocations: {
    vertexPosition: number;
    [key: string]: number;
  };
  uniformLocations: {
    [key: string]: WebGLUniformLocation;
  };
}