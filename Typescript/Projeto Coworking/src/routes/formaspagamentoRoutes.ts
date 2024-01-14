// src/routes/formaspagamentoRoutes.ts
import express from 'express';
import { FormasPagamentoController } from '../controllers/formaspagamentoController';

const router = express.Router();

router.get('/', FormasPagamentoController.getAllFormasPagamento);
router.post('/', FormasPagamentoController.createFormaPagamento);
// Outras rotas para formas de pagamento...

export default router;
