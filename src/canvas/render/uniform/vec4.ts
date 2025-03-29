import { Vec4UniformParams } from "../../../types/uniform.types";

export const setVec4Uniform = async ({
  gl,
  value,
  uniformLocation,
  render = false,
}: Vec4UniformParams) => {
  gl.uniform4fv(uniformLocation, [value.x, value.y, value.z, value.a]);
  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
