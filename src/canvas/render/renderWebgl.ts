import { RenderWebGLParams } from "../types/render.types";

export const renderWebGL = async ({
  gl,
  buffersRefCurrent,
  programInfoRefCurrent,
  size,
  secondLayer,
}: RenderWebGLParams) => {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(programInfoRefCurrent.program);

  gl.bindBuffer(gl.ARRAY_BUFFER, buffersRefCurrent.position);
  gl.vertexAttribPointer(
    programInfoRefCurrent.attribLocations.vertexPosition,
    2,
    gl.FLOAT,
    false,
    0,
    0,
  );

  gl.enableVertexAttribArray(
    programInfoRefCurrent.attribLocations.vertexPosition,
  );

  gl.uniform2fv(programInfoRefCurrent.uniformLocations.uResolution, [
    size.width,
    size.height,
  ]);

  if (secondLayer) secondLayer();

  // Draw the scene
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};
