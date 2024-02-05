// import wpmerge from 'webpack-merge';
// const { merge } = wpmerge;
// import common from './webpack.common.js';
import path, { dirname } from 'path';
import { fileURLToPath, URL } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  entry: {
    'index': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: {
      name: 'image-map-editor',
      type: 'umd',
    },
    umdNamedDefine: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,

    }]
  }
}
