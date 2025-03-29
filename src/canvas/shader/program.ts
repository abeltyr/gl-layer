import { loadShader } from "./loadShader";

import { ShaderProgramParams } from "@/types/texture-shader.types";

// Initialize shader program
export function initShaderProgram({
  gl,
  fragmentShaderSource,
  vertexShaderSource,
}: ShaderProgramParams) {
  const vertexShader = loadShader({
    gl,
    type: gl.VERTEX_SHADER,
    source: vertexShaderSource,
  });
  const fragmentShader = loadShader({
    gl,
    type: gl.FRAGMENT_SHADER,
    source: fragmentShaderSource,
  });

  if (!vertexShader || !fragmentShader) return null;

  const shaderProgram = gl.createProgram();
  if (!shaderProgram) return null;

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(shaderProgram),
    );
    return null;
  }

  return shaderProgram;
}
