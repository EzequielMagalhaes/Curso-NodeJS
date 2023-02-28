const fs = require ('fs');

//  FUNÇÃO PARA LEITURA SIMPLES DO ARQUIVO 

fs.readFile('teste.txt',(err,data)=>{
    console.log(data); //node index.js mostra o buffer dessa operação 
    console.log(data.toString()); //node index.js agora mostra oq foi salvo no arquivo txt
})