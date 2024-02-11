import { build, createServer } from 'vite';

(async () => {
  await build({
    root: './public_',
    build: {
      watch: true,
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
