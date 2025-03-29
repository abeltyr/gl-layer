// Initialize buffers for vertex positions and texture coordinates

import { BufferInitializationResult } from "../../types/render.types";

export const initBuffers = (
  gl: WebGLRenderingContext,
): BufferInitializationResult => {
  const positions = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0];
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
  };
};
