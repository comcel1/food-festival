const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// main configuration; we write options within this object to instruct webpack
module.exports = {
  // entry is where the webpack looks to start building the module
  entry: {
    app: './assets/js/script.js',
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js',
  },
  // used to tell webpack where the files will go and what their names are.
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      // this object will identify the type of files to pre-process using the test property
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name(file) {
                return '[path][name].[ext]';
              },
              publicPath: function (url) {
                return url.replace('../', '/assets/');
              },
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // the report outputs to an HTML file in the dist folder
    }),
  ],
  // development or production are options.
  // development will offer hot reloading of webpack and debugging features.
  // production will run uglify and build your source files into minimize files.
  mode: 'development',
};
