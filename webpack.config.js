const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { use } = require('react');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // caminho do arquivo inicial da aplicação (que vai empacotar os modulos voltados para aplicação web) 
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

  module: {
    rules: [
      {
        test: /\.js$/, // expressão regular para pegar todos os arquivos .js
        exclude: /node_modules/, // não quero que ele pegue os arquivos da pasta node_modules
        use: 'babel-loader', // qual loader vai ser usado
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};