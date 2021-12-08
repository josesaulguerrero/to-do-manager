const HTMLplugin = require('html-webpack-plugin');
const cssMinimizer = require('css-minimizer-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
   mode: 'production',
   entry: '/src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[fullhash].js',
      clean: true,
   },
   resolve: {
      extensions: ['.js', '.jsx', '.mjs'],
      alias: {
         '@src': path.resolve(__dirname, 'src'),
         '@components': path.resolve(__dirname, 'src/components'),
         '@images': path.resolve(__dirname, 'src/assets/images'),
         '@styles': path.resolve(__dirname, 'src/assets/styles'),
      }
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto",
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.(png|jpg|ico|svg|jpeg|webp)$/,
            type: 'asset/resource',
            generator: {
               filename: 'assets/pictures/[hash][ext]',
            }
         },
         {
            test: /\.html$/,
            use: [{
               loader: 'html-loader'
            }]
         }
      ]
   },
   plugins: [
      new HTMLplugin({
         inject: true,
         template: '/public/index.html',
         filename: './index.html',
         title: 'React store',
         favicon: './public/favicon.ico'
      })
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new cssMinimizer,
         new terserPlugin,
      ],
      splitChunks: {
         chunks: 'all',
      }
   }
};