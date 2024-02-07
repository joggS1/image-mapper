// import wpmerge from 'webpack-merge';
// const { merge } = wpmerge;
// import common from './webpack.common.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'image-map-editor',
    libraryTarget:'umd'
  },

  resolve: {
    extensions: ['.ts']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/

    }]
  }
};
