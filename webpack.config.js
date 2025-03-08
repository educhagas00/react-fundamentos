const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'), // caminho do arquivo inicial da aplicação (que vai empacotar os modulos voltados para aplicação web) 
  // posso usar o caminho normal './src/index.js' também

  output: { // onde o arquivo final vai ser gerado
    path: path.resolve(__dirname, 'build'), 
    filename: 'bundle[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),

    new CleanWebpackPlugin(),
  ],
};