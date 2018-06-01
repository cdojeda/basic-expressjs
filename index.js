const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('Servidor funcionando');
});

app.get('/', function(req,res){
    res.end("ola Mundo");
})