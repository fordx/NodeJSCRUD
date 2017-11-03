
//var dbConnection = require('../infra/dbConnection'); // eliminado depois do usar express-load

module.exports = function(app){

    var listadeProdutos = function(req,res){

        var connection = app.infra.dbConnection();
        var produtosLivro = new  app.infra.ProdutosDAO(connection);

        produtosLivro.lista(function(err,results){
            res.format({
              html: function(){
                res.render('produtos/lista', {lista:results});
              },
              json: function(){
                res.render(results);
              }
            });
        });
        connection.end();
    };
    var listadeProdutosJSON = function(req,res){

        var connection = app.infra.dbConnection();
        var produtosLivro = new  app.infra.ProdutosDAO(connection);

        produtosLivro.lista(function(err,results){
            res.json(results);
        });

        connection.end();
    };

    app.get('/produtos',listadeProdutos);

    /*app.get('/produtos/json',listadeProdutosJSON);*/

    app.get('/produtos/form',function(req,res){
      console.log("Cheguei aqui");
      res.render('produtos/form');
    });

    app.post('/produtos',function(req,res){
      var connection = app.infra.dbConnection();
      var produtosLivro = new  app.infra.ProdutosDAO(connection);
      var produto = req.body;

      var validatorTitulo = req.assert('titulo','Titulo é obrigatório');
      validatorTitulo.notEmpty();


      var erros = req.validationErrors();

      if(erros){
        res.render('produtos/form');
        return;
      }


      produtosLivro.salva(produto,function(){
        res.redirect('/produtos');
      });



    });





}
