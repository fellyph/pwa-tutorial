const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        {
          loader: 'eslint-loader',
          options: {
            rules: {
              'no-console': devMode ? 'off' : 'warn',
            },
          },
        },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          MiniCssExtractPlugin.loader,
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
          name: '[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Lorem Ipsum Front-end Engineer',
      template: './src/index.html',
      favicon: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: new RegExp('^https:\/\/fonts\.googleapis\.com/'),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts',
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      }],
    }),
    new WebpackPwaManifest({
      short_name: 'Lorem Ipsum',
      name: 'Lorem Ipsum Front-end Engineer',
      description: 'Progressive Web App Course fellyph cintra!',
      start_url: '/',
      background_color: '#000000',
      display: 'standalone',
      orientation: 'portrait',
      theme_color: '#000000',
      icons: [
        {
          src: path.resolve('src/assets/icons/icon-152-152.png'),
          type: 'image/png',
          sizes: '152x152',
        },
        {
          src: path.resolve('src/assets/icons/icon-180-180.png'),
          type: 'image/png',
          sizes: '180x180',
        },
        {
          src: path.resolve('src/assets/icons/icon-192-192.png'),
          type: 'image/png',
          sizes: '192x192',
        },
        {
          src: path.resolve('src/assets/icons/icon-512-512.png'),
          type: 'image/png',
          sizes: '512x512',
        },
      ],
    }),
  ],
};
