// src/controllers/salaController.ts
import { Request, Response } from 'express';
import { SalaService } from '../services/salaService';

export class SalaController {
  static getAllSalas(req: Request, res: Response): void {
    const salas = SalaService.getAllSalas();
    res.json(salas);
  }

  static createSala(req: Request, res: Response): void {
    const novaSala = req.body;
    const sala = SalaService.createSala(novaSala);
    res.json(sala);
  }

  // Outros métodos de controle para sala...
}
