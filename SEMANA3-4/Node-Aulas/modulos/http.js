var http = require("http");

// abre um servidor na porta 8080 e responde com "Hello World!" para cada requisição
http
  .createServer(function (req, res) {
    res.end("Hello World!"); // end é usado para finalizar a resposta e enviar os dados para o cliente
  })
  .listen(8080);

console.log("Servidor rodando em http://localhost:8080/");
