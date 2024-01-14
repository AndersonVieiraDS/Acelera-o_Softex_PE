import { Request, Response } from 'express';
import { ClienteService } from '../services/clienteService';

export class ClienteController {
  static getAllClientes(req: Request, res: Response): void {
    const clientes = ClienteService.getAllClientes();
    res.json(clientes);
  }

  static createCliente(req: Request, res: Response): void {
    const novoCliente = req.body;
    const cliente = ClienteService.createCliente(novoCliente);
    res.json(cliente);
  }

  // Outros métodos de controle para cliente...
}
