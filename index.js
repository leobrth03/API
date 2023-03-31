import bodyParser from 'body-parser';
import express from 'express';
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    database: 'API',
    password: 'notSecureChangeMe',

}).once('connection', (stream) => {
    console.log('Ah, we have our first user');
});



const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function (httpRequest, httpResponse, next) {
    connection.query('select * from clients', (err, result, fields) => {
        console.log(result)
        httpResponse.render('pages/index')
    })

});

app.get('/About_me', (req, res) => { res.render('pages/About_me') });
app.get('/Contact', (req, res) => { res.render('pages/Contact') });
app.get('/CV', (req, res) => { res.render('pages/CV') });
app.get('/index', (req, res) => { res.render('pages/index') });
app.get('/PPE', (req, res) => { res.render('pages/PPE') });
app.get('/Lettre_de_motivation', (req, res) => { res.render('pages/Lettre_de_motivation') });
app.get('/produits', function (httpRequest, httpResponse, next) {
    connection.query('select * from Option_de_contact', (err, result, fields) => {
        console.log(result)
        httpResponse.render('pages/produits', { Option_de_contact: result })
    })

});
app.get('/Panier', (req, res) => { res.render('pages/Panier') });
app.listen('3003', () => {
    console.log('j ecoute sur le port 3000')
});