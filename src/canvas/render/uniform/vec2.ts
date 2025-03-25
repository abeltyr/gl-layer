export const setVec2Uniform = async ({
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
  };
  render: boolean;
}) => {
  gl.uniform2fv(uniformLocation, [value.x, value.y]);
  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
