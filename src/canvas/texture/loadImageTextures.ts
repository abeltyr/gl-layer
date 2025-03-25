import { loadTexture } from "./loadTexture";

export const loadImageTextures = async ({
  gl,
  images,
}: {
  gl: WebGLRenderingContext;
  images: string[];
}): Promise<WebGLTexture[]> => {
  let imageTextures: WebGLTexture[] = [];

  for (let data of images) {
    const value = await loadTexture(gl, data);
    if (value) imageTextures = [...imageTextures, value];
  }

  return imageTextures;
};
