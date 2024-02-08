import path from 'path';
import { defineConfig } from 'vite';

const LIB_NAME = 'image-mapper';

export default defineConfig({
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

    }
  }
});
