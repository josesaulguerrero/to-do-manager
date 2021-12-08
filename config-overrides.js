const { addWebpackAlias, addWebpackModuleRule, override } = require("customize-cra");
const path = require("path");

module.exports = override(
   addWebpackModuleRule({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
   }),
   addWebpackAlias({
      ['@components']: path.resolve(__dirname, './src/components')
   })
);