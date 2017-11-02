
//var dbConnection = require('../infra/dbConnection'); // eliminado depois do usar express-load

module.exports = function(app){
    app.get('/produtos',function(req,res){
        /*var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'casadocodigo'
        });
        */
        var connection = app.infra.dbConnection;
        connection.query('select * from livros',function(err,results){
            res.render('produtos/lista', {lista:results});
        });

        connection.end();
    });
}
