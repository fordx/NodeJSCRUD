
//var dbConnection = require('../infra/dbConnection'); // eliminado depois do usar express-load

module.exports = function(app){
    app.get('/produtos',function(req,res){
      
        var connection = app.infra.dbConnection();
        var produtosLivro = new  app.infra.ProdutosDAO(connection);

        produtosLivro.lista(function(err,results){
            res.render('produtos/lista', {lista:results});
        });

        connection.end();
    });
}
