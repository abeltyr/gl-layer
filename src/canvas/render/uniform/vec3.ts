import { Vec3UniformParams } from "../../types/uniform.types";

export const setVec3Uniform = async ({
  gl,
  value,
  uniformLocation,
  render = false,
}: Vec3UniformParams) => {
  gl.uniform3fv(uniformLocation, [value.x, value.y, value.z]);
  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
