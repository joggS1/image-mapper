import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const LIB_NAME = 'image-map-editor';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: LIB_NAME,
      fileName: (format) => `${LIB_NAME}.${format}.js`
    },
    rollupOptions: {
      external: [
        new URL('examples/*', import.meta.url),
        new URL('public', import.meta.url),
        'src/test',
        /node_modules/
      ],
      output: {
        exports: 'named'
      }
    }
  }
});
