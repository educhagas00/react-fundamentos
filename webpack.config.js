const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'), // caminho do arquivo inicial da aplicação (que vai empacotar os modulos voltados para aplicação web) 
  // posso usar o caminho normal './src/index.js' também

  output: { // onde o arquivo final vai ser gerado
    path: path.resolve(__dirname, 'build'), 
    filename: 'bundle.js',
  },
};