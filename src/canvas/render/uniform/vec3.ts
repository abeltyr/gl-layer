export const setVec3Uniform = async ({
  gl,
  value,
  uniformLocation,
  render = false,
}: {
  gl: WebGLRenderingContext;
  uniformLocation: any;
  value: {
    x: number;
    y: number;
    z: number;
  };
  render: boolean;
}) => {
  gl.uniform3fv(uniformLocation, [value.x, value.y, value.z]);
  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
