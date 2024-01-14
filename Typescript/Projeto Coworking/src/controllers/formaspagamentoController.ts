// src/controllers/formaspagamentoController.ts
import { Request, Response } from 'express';
import { FormasPagamentoService } from '../services/formaspagamentoService';

export class FormasPagamentoController {
  static getAllFormasPagamento(req: Request, res: Response): void {
    const formasPagamento = FormasPagamentoService.getAllFormasPagamento();
    res.json(formasPagamento);
  }

  static createFormaPagamento(req: Request, res: Response): void {
    const novaFormaPagamento = req.body;
    const formaPagamento = FormasPagamentoService.createFormaPagamento(novaFormaPagamento);
    res.json(formaPagamento);
  }

  // Outros métodos de controle para formas de pagamento...
}
