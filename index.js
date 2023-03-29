import bodyParser from 'body-parser';
import express from 'express';


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')

app.get ('/', function (httpRequest, httpResponse, next )
{
    //log de la requete entrante
    console.log('objet request: ', httpRequest);
    //envoie de la reponse http
    httpResponse.render('pages/index')
});

app.get('/About_me', (req, res)=>{res.render('pages/About_me')});
app.get('/Contact', (req, res)=>{res.render('pages/Contact')});
app.get('/CV', (req, res)=>{res.render('pages/CV')});
app.get('/index', (req, res)=>{res.render('pages/index')});
app.get('/PPE', (req, res)=>{res.render('pages/PPE')});
app.get('/Lettre_de_motivation', (req, res)=>{res.render('pages/Lettre_de_motivation')});
app.listen('3003');