export const setVec4Uniform = async ({
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
    a: number;
  };
  render: boolean;
}) => {
  gl.uniform4fv(uniformLocation, [value.x, value.y, value.z, value.a]);
  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
