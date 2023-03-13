//  CRIANDO MÓDULO PERSONALIZADO E EXPORTÁ-LO//
//  FORA DO PADRÃO DO NODE      //

function helloWorld(){
    console.log('Olá mundo!');
}

var obj = {
    nome: 'Ezequiel',
    idade: 19
}

exports.helloWorld = helloWorld;
exports.aluno = obj; // o nome nao precisa ser igual; 