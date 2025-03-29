export interface BaseUniformParams {
  gl: WebGLRenderingContext;
  uniformLocation: WebGLUniformLocation;
  render?: boolean;
}

export interface Vec2Value {
  x: number;
  y: number;
}

export interface Vec3Value extends Vec2Value {
  z: number;
}

export interface Vec4Value extends Vec3Value {
  a: number;
}

export interface FloatUniformParams extends BaseUniformParams {
  value: number;
}

export interface Vec2UniformParams extends BaseUniformParams {
  value: Vec2Value;
}

export interface Vec3UniformParams extends BaseUniformParams {
  value: Vec3Value;
}

export interface Vec4UniformParams extends BaseUniformParams {
  value: Vec4Value;
}

export interface ImageUniformParams extends BaseUniformParams {
  textureNumber: number;
  texture: WebGLTexture | string;
  index: number;
}
