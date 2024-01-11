// controllers/midiaController.js
import { Midia } from '../models';
import { body, validationResult } from 'express-validator';

export default {
  getAllMidias: async (req, res) => {
    try {
      const midias = await Midia.findAll();
      res.json(midias);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter mídias.' });
    }
  },

  getMidiaById: async (req, res) => {
    const { id_midia } = req.params;
    try {
      const midia = await Midia.findByPk(id_midia);
      if (!midia) {
        return res.status(404).json({ error: 'Mídia não encontrada.' });
      }
      res.json(midia);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter mídia.' });
    }
  },

  createMidiaValidation: [
    body('titulo').isString().isLength({ min: 1 }),
    body('descricao').isString().isLength({ min: 1 }),
    body('tipoMidia').isIn(['audio', 'video', 'imagem']),
    body('inicioExibicao').isISO8601().toDate(),
    body('terminoExibicao').isISO8601().toDate(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ],

  createMidia: async (req, res) => {
    const { titulo, descricao, tipoMidia, inicioExibicao, terminoExibicao, midia } = req.body;
    try {
      const novaMidia = await Midia.create({ titulo, descricao, tipoMidia, inicioExibicao, terminoExibicao, midia });
      res.json(novaMidia);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar mídia.' });
    }
  },

  updateMidia: async (req, res) => {
    const { id_midia } = req.params;
    const { titulo, descricao, tipoMidia, inicioExibicao, terminoExibicao, midia } = req.body;
    try {
      const midiaExistente = await Midia.findByPk(id_midia);
      if (!midiaExistente) {
        return res.status(404).json({ error: 'Mídia não encontrada.' });
      }
      await midiaExistente.update({ titulo, descricao, tipoMidia, inicioExibicao, terminoExibicao, midia });
      res.json(midiaExistente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar mídia.' });
    }
  },

  deleteMidia: async (req, res) => {
    const { id_midia } = req.params;
    try {
      const midia = await Midia.findByPk(id_midia);
      if (!midia) {
        return res.status(404).json({ error: 'Mídia não encontrada.' });
      }
      await midia.destroy();
      res.json({ message: 'Mídia excluída com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir mídia.' });
    }
  },
};
