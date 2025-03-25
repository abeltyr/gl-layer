export const setFloatUniform = async ({
  gl,
  value,
  uniformLocation,
  render = false,
}: {
  gl: WebGLRenderingContext;
  uniformLocation: any;
  value: number;
  render: boolean;
}) => {
  gl.uniform1f(uniformLocation, value);
  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
