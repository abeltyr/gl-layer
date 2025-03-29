import { Vec2UniformParams } from "../../../types/uniform.types";

export const setVec2Uniform = async ({
  gl,
  value,
  uniformLocation,
  render = false,
}: Vec2UniformParams) => {
  gl.uniform2fv(uniformLocation, [value.x, value.y]);
  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
