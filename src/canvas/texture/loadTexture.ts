import { TextureParams } from "@/types/texture-shader.types";

// Load texture from image URL
export const loadTexture = ({
  gl,
  url,
}: TextureParams): Promise<WebGLTexture | null> => {
  const texture = gl.createTexture();
  if (!texture) return Promise.resolve(null);

  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Put a single pixel in the texture so we can use it immediately
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1.0;
  const height = 1.0;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 0, 255]);
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel,
  );

  // Load the image
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = function () {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internalFormat,
        srcFormat,
        srcType,
        image,
      );

      // WebGL1 has different requirements for power of 2 images vs non power of 2 images
      if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
        gl.generateMipmap(gl.TEXTURE_2D);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }
      resolve(texture);
    };
    image.src = url;
  });
};

const isPowerOf2 = (value: number): boolean => {
  return (value & (value - 1)) === 0;
};
