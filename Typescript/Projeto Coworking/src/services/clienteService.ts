import { ClienteModel } from '../models/clienteModel';

export class ClienteService {
  static clientes: ClienteModel[] = [];

  static getAllClientes(): ClienteModel[] {
    return this.clientes;
  }

  static createCliente(cliente: ClienteModel): ClienteModel {
    this.clientes.push(cliente);
    return cliente;
  }

  // Outros métodos de serviço para cliente...
}
