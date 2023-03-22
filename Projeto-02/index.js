const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

mongoose.connect('mongodb+srv://Zekiel:5mmOXfV2HSCNPnFN@cluster0.b9lahkf.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('MongoDB conectado com sucesso');// Caso ocorra tudo certo;
}).catch((err)=>{
    console.log(err.message);// Exibe mensagem de erro;
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/',(req,res)=>{ // pagina home
    console.log(req.query); // url:port/?busca=xxx
    
    if(req.query.busca == null){
        res.render('home',{});
    }else{
        // res.send('Você buscou ;por: '+req.query.busca);
        res.render('busca',{})
    }
});

app.get('/:slug',(req,res)=>{ // pagina individual da notícia
    //res.send(req.params.slug)
    res.render('single',{});
});

app.listen(3000,()=>{
    //require('child_process').exec(`start "Google Chrome": http://localhost:3000/`); // para abrir automaticamente o localhost
    console.log('Server rodando!');
});