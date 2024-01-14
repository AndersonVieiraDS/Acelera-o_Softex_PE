// src/controllers/pagamentoController.ts
import { Request, Response } from 'express';
import { PagamentoService } from '../services/pagamentoService';

export class PagamentoController {
  static getAllPagamentos(req: Request, res: Response): void {
    const pagamentos = PagamentoService.getAllPagamentos();
    res.json(pagamentos);
  }

  static createPagamento(req: Request, res: Response): void {
    const novoPagamento = req.body;
    const pagamento = PagamentoService.createPagamento(novoPagamento);
    res.json(pagamento);
  }

  // Outros métodos de controle para pagamento...
}
