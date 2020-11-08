const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: `${__dirname}/src/public/js`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
