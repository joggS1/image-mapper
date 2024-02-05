import path, { dirname } from 'path';
import { fileURLToPath, URL } from 'url';

// Windows
const __dirname = dirname(fileURLToPath(import.meta.url));

// Linux
//const __dirname = new URL('.', import.meta.url).pathname;

export default {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'image-map-editor',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

};
