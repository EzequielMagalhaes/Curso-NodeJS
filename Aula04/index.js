const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8800;

//Cria novo arquivo
fs.writeFile('teste.txt','testando',(err)=>{ // writeFile precisa de 3 parametros;
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso');
}) 

//Cria novo arquivo ou insere o conteudo depois do que ja existe
    fs.appendFile('teste.txt','\nOutro conteudo',(err)=>{
        if(err) throw err;
        console.log('Salvo novamente com sucesso.');
    })

const server = http.createServer((req,res)=>{

    if(req.url == '/nodejs'){

    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })

    }else{
        fs.readFile('teste.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
});

server.listen(port,hostname,()=>{
    console.log('Server rodando');
});