const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    main: './src/index.js',
    sw: './src/js/sw.js',
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        'eslint-loader',
      ] },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|gif|png|jpe?g)$/,
        loader: 'url-loader',
        options: {
          limit: 60,
          fallback: 'file-loader',
          publicPath: './img',
          outputPath: './img',
          name: '[name].[ext]'
        },
      },
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Fellyph Cintra Front-end Engineer',
      template: './src/index.html',
      favicon: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
