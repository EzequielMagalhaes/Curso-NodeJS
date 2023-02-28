const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual seu nome?\n',(name)=>{
    console.log('O nome do(a) usuário(a) é : '+name);
rl.question('Qual sua idade '+name+'?\n',(idade)=>{
    console.log('A idade do(a) '+name+' é '+idade+' anos');
    })
});

rl.on('close',()=>{ // CTRL + C para terminar o processo;
    console.log('Adeus!');
    process.exit(0);
})