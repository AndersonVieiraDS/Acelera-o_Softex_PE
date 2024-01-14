// models/index.js
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';

const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {

  res.send('Hello World!')

})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)

})

const basename = _basename(import.meta.url);
const env = process.env.NODE_ENV || 'development';
import config from '../config/config.json';
const configData = config[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {};

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
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Testar a conexão
async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

// Chamar a função para testar a conexão
testarConexao();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;