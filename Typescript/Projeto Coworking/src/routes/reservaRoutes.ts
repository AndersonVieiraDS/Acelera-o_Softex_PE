// src/routes/reservaRoutes.ts
import express from 'express';
import { ReservaController } from '../controllers/reservaController';

const router = express.Router();

router.get('/', ReservaController.getAllReservas);
router.post('/', ReservaController.createReserva);
// Outras rotas para reserva...

export default router;
