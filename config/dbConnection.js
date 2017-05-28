// importar o mongodb
const mongodb = require('mongodb');

var connMongoDB = function() {
  console.log('entrou na funcao de conexao');
  var db = new mongodb.Db(
    'got',
    new mongodb.Server(
      'localhost', // string contendo o endereço do servidor
      27017, // porta de conexao
      {}
    ),
    {}
  );

  return db;
}

module.exports = function() {
  return connMongoDB;
}
