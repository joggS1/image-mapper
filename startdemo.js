import { build, createServer } from 'vite';
import cluster from 'node:cluster'


if (cluster.isPrimary) {
  cluster.fork();
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
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
  })();
} else {
  (async () => {
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
    console.clear();
    server.printUrls();
  })();
}




