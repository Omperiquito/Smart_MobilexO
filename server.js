const express = require("express"); // Carrega o framework Express
const app = express(); // Construtor que inicializa uma aplicação Express
const cookieParser = require('cookie-parser')
const https = require('https');
const fs = require('fs');



app.use(cookieParser())
app.use(express.json()); // Faz o parse (validação e interpretação) de solicitações do tipo application/json
app.use(express.urlencoded({ extended: true })); // Faz o parse do conteúdo tipo application/x-www-form-urlencoded
require("./rotas/rotas")(app);
const PORTA = process.env.PORT || 8888; // Estabelece a porta do servidor


const sslServer = https.createServer({
    key: fs.readFileSync('cert/key.pem'),
    cert:fs.readFileSync('cert/certificate.pem')
}, app)

sslServer.listen(PORTA, () => {
    console.log(`O servidor está a ouvir na porta ${PORTA}`);
});
app.use(express.static('public'));

app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})

var data = fs.readFileSync('./public/Mobile.json');
var Mobile = JSON.parse(data);

console.log(Mobile);





