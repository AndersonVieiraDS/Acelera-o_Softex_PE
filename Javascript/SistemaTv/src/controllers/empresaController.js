// controllers/empresaController.js
import { Empresa } from '../models';
import { body, validationResult } from 'express-validator';

export default {
    
  getAllEmpresas: async (req, res) => {
    try {
      const empresas = await Empresa.findAll();
      res.json(empresas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter empresas.' });
    }
  },

  getEmpresaById: async (req, res) => {
    const { id_empresa } = req.params;
    try {
      const empresa = await Empresa.findByPk(id_empresa);
      if (!empresa) {
        return res.status(404).json({ error: 'Empresa não encontrada.' });
      }
      res.json(empresa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter empresa.' });
    }
  },

  createEmpresaValidation: [
    body('cnpj').isString().isLength({ min: 1 }),
    body('razaoSocial').isString().isLength({ min: 1 }),
    body('nomeFantasia').isString().isLength({ min: 1 }),
    body('contato').isString().isLength({ min: 1 }),
    body('sala').isString().isLength({ min: 1 }),
    body('andar').isString().isLength({ min: 1 }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ],

  createEmpresa: async (req, res) => {
    const { cnpj, razaoSocial, nomeFantasia, contato, sala, andar, logomarca } = req.body;
    try {
      const empresa = await Empresa.create({ cnpj, razaoSocial, nomeFantasia, contato, sala, andar, logomarca });
      res.json(empresa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar empresa.' });
    }
  },

  updateEmpresa: async (req, res) => {
    const { id_empresa } = req.params;
    const { cnpj, razaoSocial, nomeFantasia, contato, sala, andar, logomarca } = req.body;
    try {
      const empresa = await Empresa.findByPk(id_empresa);
      if (!empresa) {
        return res.status(404).json({ error: 'Empresa não encontrada.' });
      }
      await empresa.update({ cnpj, razaoSocial, nomeFantasia, contato, sala, andar, logomarca });
      res.json(empresa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar empresa.' });
    }
  },

  deleteEmpresa: async (req, res) => {
    const { id_empresa } = req.params;
    try {
      const empresa = await Empresa.findByPk(id_empresa);
      if (!empresa) {
        return res.status(404).json({ error: 'Empresa não encontrada.' });
      }
      await empresa.destroy();
      res.json({ message: 'Empresa excluída com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir empresa.' });
    }
  },
};
