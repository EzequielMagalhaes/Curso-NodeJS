const http = require('http');
const fs = require('fs');//FILE-SYSTEM ->permite manipular arquivos usando Node;

const hostname = '127.0.0.1';
const port = 8800;

//  LER ARQUIVOS COM BASE NA URL

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