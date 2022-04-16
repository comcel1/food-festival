const path = require('path');
const webpack = require('webpack');

// main configuration; we write options within this object to instruct webpack
module.exports = {
  // entry is where the webpack looks to start building the module
  entry: './assets/js/script.js',
  // used to tell webpack where the files will go and what their names are.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
    }),
  ],
  // development or production are options.
  // development will offer hot reloading of webpack and debugging features.
  // production will run uglify and build your source files into minimize files.
  mode: 'development',
};
