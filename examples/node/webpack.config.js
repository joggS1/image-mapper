// Script 'npm run demo' uses this config. Output file demo.js is then loaded by /public/index.html in the Webpack devserver.
import webpack from 'webpack';

export default {
  mode: 'none',
  entry: './examples/node/index.js',
  output: {
    filename: './demo.js',
  },

  devServer: {
    port: 9000,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
     ".js": [".js", ".ts"],
     ".cjs": [".cjs", ".cts"],
     ".mjs": [".mjs", ".mts"]
    }
  },
  module: {
    rules: [
      // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    /*
    // npm install process
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    */
  ],
};
