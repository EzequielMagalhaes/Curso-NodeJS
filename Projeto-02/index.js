const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const { News } = require('./public/News.js');

mongoose.connect('mongodb+srv://Zekiel:5mmOXfV2HSCNPnFN@cluster0.b9lahkf.mongodb.net/portalnews?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB conectado com sucesso');
}).catch((err) => {
    console.log(err.message);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    console.log(req.query);
        if (req.query.busca == null) {
    News.find({}).sort({ '_id': -1 }).then((news) => {
        news = news.map((val)=>{
            return {
                title: val.title,
                image: val.image,
                category: val.category,
                content: val.content,
                shortContent: val.content.substring(0, 153), //campo nao precisa existir no BD para poder criar direto no código 
                slug: val.slug
            }
        })

        res.render('home', { news: news });
    }).catch((err) => {
        console.log(err.message);
        res.sendStatus(500);
    });
    } else {
        res.render('busca', {});
    }
});

app.get('/:slug', (req, res) => {
    res.render('single', {});
});

app.listen(3000, () => {
    console.log('Server rodando!');
});
