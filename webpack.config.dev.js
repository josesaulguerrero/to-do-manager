const HTMLplugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   mode: 'development',
   watch: true,
   entry: '/src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.[fullhash].js'
   },
   resolve: {
      extensions: ['.js', '.jsx', '.mjs'],
      alias: {
         '@src': path.resolve(__dirname, 'src'),
         '@components': path.resolve(__dirname, 'src/components'),
         '@images': path.resolve(__dirname, 'src/assets/images'),
         '@pages': path.resolve(__dirname, 'src/pages'),
         '@context': path.resolve(__dirname, 'src/context'),
         '@routes': path.resolve(__dirname, 'src/routes'),
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
               filename: 'assets/images/[hash][ext]',
            }
         },
         {
            test: /\.html$/,
            use: [{
               loader: 'html-loader'
            }]
         },
      ]
   },
   plugins: [
      new HTMLplugin({
         inject: true,
         template: '/public/index.html',
         filename: './index.html',
         title: 'Tasks manager',
         favicon: './public/favicon.ico'
      }),
   ],
   devServer: {
      watchFiles: ['src/**'],
      liveReload: true,
      open: true,
      historyApiFallback: true,
      port: 3000,
      hot: 'only',
   }
};