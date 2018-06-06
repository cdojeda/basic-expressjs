const express = require('express');
const app = express();


// Middlewares
app.use(function(req,res,next){
    console.log("request url: "+req.url);
    next();
});

app.use( (req,res,next) => {
    console.log("2do middleware");
    next();
})

app.get('/', function(req,res){
    res.send("hola mundo");
});

app.get('/login', function(req,res){
    res.send("aqui va el login");
});

app.get('*', (req,res) => {
    res.end("Archivo no encontrado");
});

app.listen(3000, function(){
    console.log("Servidor funcionando");
});