// src/services/reservaService.ts
import { ReservaModel } from '../models/reservaModel';

export class ReservaService {
  static reservas: ReservaModel[] = [];

  static getAllReservas(): ReservaModel[] {
    return this.reservas;
  }

  static createReserva(reserva: ReservaModel): ReservaModel {
    this.reservas.push(reserva);
    return reserva;
  }

  // Outros métodos de serviço para reserva...
}
