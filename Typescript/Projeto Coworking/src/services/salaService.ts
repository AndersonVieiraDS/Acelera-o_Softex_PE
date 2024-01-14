// src/services/salaService.ts
import { SalaModel } from '../models/salaModel';

export class SalaService {
  static salas: SalaModel[] = [];

  static getAllSalas(): SalaModel[] {
    return this.salas;
  }

  static createSala(sala: SalaModel): SalaModel {
    this.salas.push(sala);
    return sala;
  }

  // Outros métodos de serviço para sala...
}
