const express = require('express'); //Express se baseia em rotas(get/post/put/delete);
const bodyParser = require('body-parser');
const path = require('path');
const app = express(); // app faz referência ao framework express;

app.use(bodyParser.json()); // to suport JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended:true
}));

app.engine('html', require('ejs').renderFile); // setar a engine para renderizar 'html' utilizando o 'ejs' para renderizar o arquivo;
app.set('view engine', 'html'); // setar a view engine para html;
app.use('/public', express.static(path.join(__dirname, 'public'))); // definir o diretório estático(onde fica fotos, styles,etc...tudo que for estático);
app.set('views', path.join(__dirname, '/views')); // pegar o diretório completo onde estão as views(no caso está na pasta com mesmo nome);

var tarefas = ['Arrumar o quarto','Fazer compras','Testes'];

app.post('/',(req,res)=>{ // requisição e resultado;
    tarefas.push(req.body.tarefa);
    res.render('index', {tarefasList:tarefas});
})

app.get('/',(req,res)=>{
    res.render('index', {tarefasList:tarefas});
});

app.get('/deletar/:id',(req,res)=>{
    tarefas = tarefas.filter((val,index)=>{ // fazendo um clone da variavel 'tarefas'
        if (index != req.params.id){ // fazendo essa validação
            return val; // irá retornar apenas os valores, nao o id;
        }
    })
    res.render('index', {tarefasList:tarefas});
})

app.listen(3000,()=>{
    console.log('Server rodando!');
})