var mysql = require('mysql');

function CreateDBConnection(){
    return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'casadocodigo'
          });
}
//wrapper
module.exports = function(){
  return CreateDBConnection;
}
