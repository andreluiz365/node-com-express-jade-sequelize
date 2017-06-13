var express = require('express');
var app     = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    // Utilizando template engine - Pug
    res.render('index', {
        message: 'Hello world from School of net',
        count: 10
    });
    // Renderizando apenas texto
    // res.end('Hello world from School of net');
})

app.listen(3000, '127.0.0.1', function () {
    console.log('The server has been started...');
})