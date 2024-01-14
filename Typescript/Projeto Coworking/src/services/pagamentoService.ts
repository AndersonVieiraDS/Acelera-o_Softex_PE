// src/services/pagamentoService.ts
import { PagamentoModel } from '../models/pagamentoModel';

export class PagamentoService {
  static pagamentos: PagamentoModel[] = [];

  static getAllPagamentos(): PagamentoModel[] {
    return this.pagamentos;
  }

  static createPagamento(pagamento: PagamentoModel): PagamentoModel {
    this.pagamentos.push(pagamento);
    return pagamento;
  }

  // Outros métodos de serviço para pagamento...
}
