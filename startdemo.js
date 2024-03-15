import { build, createServer } from 'vite';

(async () => {
  await build({
    root: './public_',
    mode: 'development',
    esbuild: {
      keepNames: true,
      minifyIdentifiers: false,
    },
    build: {
      watch: true,

      terserOptions: {
        compress: {
          keep_fnames: "*",
          keep_classnames: "*",
          keep_fargs: "*",
          keep_infinity: "*"
        }
      },
      rollupOptions: {
        input: './examples/node/index.ts',
        output: {
          entryFileNames: 'demo.js',
          dir: './public_'
        }
      }
    }
  });
  const server = await createServer({
    root: './public_',
    configFile: false,
    server: {
      hmr: true,
      host: true,
      port: 3000
    }
  });
  await server.listen();
  server.openBrowser();
  setTimeout(() => {
    process.stdout.write('\x1Bc')
    server.printUrls();
  }, 1000);
})();
