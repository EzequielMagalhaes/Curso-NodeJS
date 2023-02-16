const http = require('http');//require importa algo do node(ex:bibliotecas)
//é possível usar funções próprias do node como o 'http' ou então criar outras próprias;

const hostname = '127.0.0.1';
const port = 8800;

//Criando o server//
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});

//Função para chamar o server//
server.listen(port,hostname,()=>{
    console.log('Server rodando');
});