import { loadImageTextures } from "@/canvas/texture/loadImageTextures";

import { ImageUniformParams } from "../../types/uniform.types";

export const setImageUniform = async ({
  gl,
  textureNumber,
  texture,
  index,
  uniformLocation,
  render = false,
}: ImageUniformParams) => {
  let textureData: WebGLTexture = texture;
  if (typeof texture === "string") {
    const data = await loadImageTextures({ gl, images: [texture] });
    textureData = data[0];
  }

  gl.activeTexture(textureNumber);
  gl.bindTexture(gl.TEXTURE_2D, textureData);
  gl.uniform1i(uniformLocation, index);

  if (render) {
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
