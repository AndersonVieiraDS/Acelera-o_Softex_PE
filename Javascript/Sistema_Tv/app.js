import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import { json } from 'body-parser';
import { initialize, session, use, serializeUser, deserializeUser } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import expressSession from 'express-session';

const app = express();

// Conectar ao PostgreSQL (certifique-se de ter o PostgreSQL rodando)

const sequelize = new Sequelize('sistema_tv', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'postgres',
});

app.use(json());

// Configuração do Passport

app.use(expressSession({ secret: 'seu_segredo', resave: false, saveUninitialized: false }));
app.use(initialize());
app.use(session());

// Modelo Usuario

const Usuario = sequelize.define('Usuario', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

use(new LocalStrategy(
  (username, password, done) => {
    Usuario.findOne({ where: { username: username } })
      .then(usuario => {
        if (!usuario) {
          return done(null, false, { message: 'Usuário não encontrado' });
        }
        if (usuario.password !== password) {
          return done(null, false, { message: 'Senha incorreta' });
        }
        return done(null, usuario);
      })
      .catch(err => done(err));
  }
));

serializeUser((usuario, done) => {
  done(null, usuario.id);
});

deserializeUser((id, done) => {
  Usuario.findByPk(id)
    .then(usuario => done(null, usuario))
    .catch(err => done(err));
});

// Rotas do backend aqui

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Rota de login

app.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Autenticação bem-sucedida' });
  });
  
  // Middleware para verificar se o usuário está autenticado

  const verificaAutenticacao = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).json({ message: 'Não autenticado' });
    }
  };
  
  // Rota protegida

  app.get('/restrito', verificaAutenticacao, (req, res) => {
    res.json({ message: 'Conteúdo restrito' });
  });