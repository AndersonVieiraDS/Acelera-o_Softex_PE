// src/routes/salaRoutes.ts
import express from 'express';
import { SalaController } from '../controllers/salaController';

const router = express.Router();

router.get('/', SalaController.getAllSalas);
router.post('/', SalaController.createSala);
// Outras rotas para sala...

export default router;
