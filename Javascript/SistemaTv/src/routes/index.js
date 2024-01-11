import express from 'express';
import bodyParser from 'body-parser';
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import { env as _env } from 'process';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from './src/models';  // Importando o objeto Sequelize configurado
import routes from './src/routes';  // Importando o arquivo de rotas

const app = express();
const basename = _basename(__filename);
const env = _env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const express = require('express');
const usuarioRouter = require('./usuario').default;
const empresaRouter = require('./empresa').default;
const midiaRouter = require('./midia').default;
const router = express.Router();

router.use('/usuario', usuarioRouter);
router.use('/empresa', empresaRouter);
router.use('/midia', midiaRouter);

module.exports = router;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(join(__dirname, file))(sequelize, DataTypes);

    // Adicione os modelos ao seu objeto de banco de dados Sequelize
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Adicione a lógica de roteamento aqui
app.use('/api', routes);

// Middleware para autenticação
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Token não fornecido.' });

  jwt.verify(token, 'secreto', (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido.' });
    req.user = user;
    next();
  });
};

// Rota de login
app.post('/login', async (req, res) => {
  const { username, senha } = req.body;
  const user = await db.Usuario.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(senha, user.senha)) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }

  const token = jwt.sign({ id: user.cpf }, 'secreto', { expiresIn: '1h' });
  res.json({ token });
});

// Inicializando o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado.');
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

// Configurando pm2 para reiniciar automaticamente
pm2.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  pm2.start({
    script: 'index.js',
    name: 'meu-projeto',
    watch: true, // Reinicia automaticamente em caso de alterações nos arquivos
    autorestart: true, // Reinicia automaticamente em caso de falha
    max_restarts: 10, // Número máximo de reinícios automáticos em um intervalo de 60s
  }, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
