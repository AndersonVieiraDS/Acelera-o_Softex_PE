// src/services/formaspagamentoService.ts
import { FormaPagamentoModel } from '../models/formaspagamentoModel';

export class FormasPagamentoService {
  static formasPagamento: FormaPagamentoModel[] = [];

  static getAllFormasPagamento(): FormaPagamentoModel[] {
    return this.formasPagamento;
  }

  static createFormaPagamento(formaPagamento: FormaPagamentoModel): FormaPagamentoModel {
    this.formasPagamento.push(formaPagamento);
    return formaPagamento;
  }

  // Outros métodos de serviço para formas de pagamento...
}
