var express = require('express');
var app     = express();
var Sequelize = require('sequelize');

app.set('views', './views');
app.set('view engine', 'pug');

var sequelize = new Sequelize('mysql://root:@localhost:3306/expressjm')

var User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING
    },
    lastname: Sequelize.STRING
});

User.sync({ force: true })
    .then(function () {
        return User.create({
            name: 'Leonan',
            lastname: 'Luppi'
        });
    });

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