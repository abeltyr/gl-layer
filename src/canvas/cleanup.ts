import { CleanupWebGLParams } from "../types/render.types";

export const cleanupWebGLResources = async ({ canvas }: CleanupWebGLParams) => {
  if (canvas) {
    const gl = canvas.getContext("webgl");
    if (gl) {
      // Clean up buffer resources
      const buffers = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
      if (buffers) gl.deleteBuffer(buffers);

      // Clean up shader programs
      const program = gl.getParameter(gl.CURRENT_PROGRAM);
      if (program) {
        // Clean up attached shaders before deleting program
        const shaders = gl.getAttachedShaders(program);
        if (shaders) {
          shaders.forEach((shader) => {
            if (shader) gl.deleteShader(shader);
          });
        }
        gl.deleteProgram(program);
      }

      // Clean up textures
      const texture = gl.getParameter(gl.TEXTURE_BINDING_2D);
      if (texture) gl.deleteTexture(texture);

      // Clean up frame buffers
      const framebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
      if (framebuffer) gl.deleteFramebuffer(framebuffer);

      // Clean up render buffers
      const renderbuffer = gl.getParameter(gl.RENDERBUFFER_BINDING);
      if (renderbuffer) gl.deleteRenderbuffer(renderbuffer);
    }
  }
};
