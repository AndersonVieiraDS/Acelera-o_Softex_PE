// src/routes/pagamentoRoutes.ts
import express from 'express';
import { PagamentoController } from '../controllers/pagamentoController';

const router = express.Router();

router.get('/', PagamentoController.getAllPagamentos);
router.post('/', PagamentoController.createPagamento);
// Outras rotas para pagamento...

export default router;
