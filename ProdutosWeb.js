var http = require('http'),
    url = require('url');
var server = http.createServer(function (request,response) {

    if(request.url == "/produtos"){
        response.end("<html><body><h1>Listando os Produtos</h1></body></html>");
    }else{
        response.end("<html><body><h1>Home</h1></body></html>");
    }
});

server.listen(3000);

console.log("servidor está rodando");