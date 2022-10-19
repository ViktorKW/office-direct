const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env) => {
  const production = env.mode === 'production';

  const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ];

  const babelOptions = {
    plugins: [!production && require.resolve('react-refresh/babel')].filter(
      Boolean
    ),
  };

  if (!production) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return {
    mode: production ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      filename: production ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext][query]',
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpe?g|gif|ico)$/,
          type: 'asset/resource',
        },
        {
          test: /\.s(a|c)ss$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '',
              },
            },
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(js|jsx|ts|tsx)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions,
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
    plugins: plugins,

    resolve: {
      extensions: ['.js', '.jsx', '.tsx'],
    },

    devtool: production ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      // static: './dist',
      hot: true,
      port: 3001,
    },
  };
};
