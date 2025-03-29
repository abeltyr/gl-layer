import { FloatUniformParams } from "../../../types/uniform.types";

export const setFloatUniform = async ({
  gl,
  value,
  uniformLocation,
  render = false,
}: FloatUniformParams) => {
  gl.uniform1f(uniformLocation, value);
  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
