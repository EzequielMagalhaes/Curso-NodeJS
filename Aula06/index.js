const fs = require ('fs');
const read = require ('readline');

//  FUNÇÃO PARA UMA LEITURA AVANÇADA DO ARQUIVO
fs.readFile('teste.txt',(err,data)=>{
    let str = data.toString();

    // let newStr = str.split('/'); //Cria um array com base nessa regra,no caso é a separação por barras;
    let newStr = str.substring(0,9)

    console.log(newStr);
})