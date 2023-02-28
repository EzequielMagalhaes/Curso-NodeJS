const fs = require ('fs');
const read = require ('readline');

//  FUNÇÃO PARA RENOMEAR O ARQUIVO

fs.rename('teste.txt','novoTeste.txt',(err)=>{
    console.log('Foi renomeado com sucesso');
})

/*
//    FUNÇÃO PARA DELETAR O ARQUIVO 
fs.unlink('teste.txt',(err)=>{
    console.log('Arquivo deletado com sucesso!');
})
*/