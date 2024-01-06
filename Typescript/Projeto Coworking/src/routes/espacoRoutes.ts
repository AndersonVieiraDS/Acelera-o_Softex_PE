// src/routes/spaceRoutes.ts
import express from 'express';
import * as espacoController from '../controllers/espacoControler';

const router = express.Router();

router.get('/', espacoController.getAllSpaces);
// Rotas para criar, atualizar e excluir espaços

export default router;
