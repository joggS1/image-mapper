import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'

const LIB_NAME = 'image-mapper';

export default defineConfig({
  plugins: [dts({
    outDir: path.resolve(__dirname, 'dist/ts'),

  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: LIB_NAME,
      fileName: (format) => `${LIB_NAME}.${format}.js`,
    },
    rollupOptions: {
      external: [
        new URL('examples/*', import.meta.url),
        new URL('public', import.meta.url),
        'src/test',
      ],
      treeshake: true,

    }
  }
});
