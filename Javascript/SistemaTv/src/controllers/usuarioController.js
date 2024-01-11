import { Usuario } from '../models';
import { body, validationResult } from 'express-validator';

export default {
  createUsuarioValidation: [
    body('cpf').isInt().isLength({ min: 1 }),
    body('nome').isString().isLength({ min: 1 }),
    body('email').isEmail(),
    body('username').isString().isLength({ min: 1 }),
    body('senha').isString().isLength({ min: 6 }),
    body('tipoUsuario').isIn(['op', 'admin']),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ],

  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter usuários.' });
    }
  },

  getUsuarioByCpf: async (req, res) => {
    const { cpf } = req.params;
    try {
      const usuario = await Usuario.findByPk(cpf);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter usuário.' });
    }
  },

  createUsuario: async (req, res) => {
    const { cpf, nome, email, username, senha, tipoUsuario } = req.body;
    try {
      const usuario = await Usuario.create({ cpf, nome, email, username, senha, tipoUsuario });
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  },

  updateUsuario: async (req, res) => {
    const { cpf } = req.params;
    const { nome, email, username, senha, tipoUsuario } = req.body;
    try {
      const usuario = await Usuario.findByPk(cpf);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      await usuario.update({ nome, email, username, senha, tipoUsuario });
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
  },

  deleteUsuario: async (req, res) => {
    const { cpf } = req.params;
    try {
      const usuario = await Usuario.findByPk(cpf);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      await usuario.destroy();
      res.json({ message: 'Usuário excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir usuário.' });
    }
  },
};
