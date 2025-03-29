import { initShaderProgram } from "@/canvas/shader/program";
import { initBuffers } from "@/canvas/buffer/initBuffers";
import { InitializeWebGLParams, ProgramInfo } from "@/types/webgl.types";

export const initializeWebGL = ({
  gl,
  uniforms,
  shader,
  attributes,
}: InitializeWebGLParams) => {
  // Initialize shader program
  const shaderProgram = initShaderProgram({
    gl,
    ...shader,
  });

  if (!shaderProgram) return;

  let uniformLocations: { [key: string]: WebGLUniformLocation } = {};
  if (uniforms)
    for (let uniform of uniforms) {
      const uniformLocationData = gl.getUniformLocation(
        shaderProgram,
        uniform.webglName,
      );
      if (uniformLocationData)
        uniformLocations[uniform.uniformName] = uniformLocationData;
    }

  let attribLocations: { [key: string]: number } = {};
  if (attributes)
    for (let attribute of attributes) {
      const attribLocationData = gl.getAttribLocation(
        shaderProgram,
        attribute.webglName,
      );
      if (attribLocationData)
        attribLocations[attribute.attributeName] = attribLocationData;
    }

  const programInfoRefCurrent: ProgramInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      ...attribLocations,
    },
    uniformLocations: {
      ...uniformLocations,
    },
  };

  // Initialize buffers
  const buffersRefCurrent = initBuffers(gl);

  return {
    programInfoRefCurrent,
    buffersRefCurrent,
  };
};
