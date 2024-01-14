// src/controllers/reservaController.ts
import { Request, Response } from 'express';
import { ReservaService } from '../services/reservaService';

export class ReservaController {
  static getAllReservas(req: Request, res: Response): void {
    const reservas = ReservaService.getAllReservas();
    res.json(reservas);
  }

  static createReserva(req: Request, res: Response): void {
    const novaReserva = req.body;
    const reserva = ReservaService.createReserva(novaReserva);
    res.json(reserva);
  }

  // Outros métodos de controle para reserva...
}
