// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Adicione o middleware body-parser
app.use(bodyParser.json());

// Conectar ao MongoDB (substitua a URL pelo seu próprio banco de dados)
mongoose.connect('mongodb+srv://Hypnotic:<password>@projetomdb.dwzrxtg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// ...
