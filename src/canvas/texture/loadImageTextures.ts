import { loadTexture } from "./loadTexture";

import { TexturesParams } from "@/canvas/types/texture-shader.types";

export const loadImageTextures = async ({
  gl,
  images,
}: TexturesParams): Promise<WebGLTexture[]> => {
  let imageTextures: WebGLTexture[] = [];

  for (let data of images) {
    const value = await loadTexture({ gl, url: data });
    if (value) imageTextures = [...imageTextures, value];
  }

  return imageTextures;
};
