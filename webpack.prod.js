// import wpmerge from 'webpack-merge';
// const { merge } = wpmerge;
// import common from './webpack.common.js';
import path, { dirname } from 'path';
import { fileURLToPath, URL } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    'image-map-editor': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'image-map-editor',
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
