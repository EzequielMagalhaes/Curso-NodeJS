//  EXPORTAR MÓDULOS USANDO CLASSES //
class Teste{

    constructor(){
        this.nome = 'Ezequiel';
        this.testando();
        
        console.log('Tá rodando...');
    }

    testando(){
        console.log(this.nome);
    }
}

module.exports = Teste;