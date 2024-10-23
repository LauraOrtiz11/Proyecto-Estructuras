import { listaReservas, Reserva } from '../models/reservas.js';

export function agregarReserva(vueloId, pasajero) {
    const id = listaReservas.obtenerReservas().length + 1; 
    const reserva = new Reserva(id, vueloId, pasajero);
    listaReservas.agregarReserva(reserva);
}

export function mostrarReservas() {
    return listaReservas.obtenerReservas();
}


