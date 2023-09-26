const express = require('express');
const app = express();
const porta = 3333;

app.listen(porta, function(){
  console.log('Servidor rodando na porta:'+ porta);
});

app.get('/Projeto', (request, response ) => {
  response.send('Hello World!');
});