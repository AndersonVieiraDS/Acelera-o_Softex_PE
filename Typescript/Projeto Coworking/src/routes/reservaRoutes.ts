// src/routes/reservationRoutes.ts
import express from 'express';
import * as reservaController from '../controllers/reservaControllers';

const router = express.Router();

router.get('/', reservaController.getAllReservations);
// Rotas para criar, atualizar e excluir reservas

export default router;
