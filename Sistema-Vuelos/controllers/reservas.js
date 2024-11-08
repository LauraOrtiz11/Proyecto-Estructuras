import { listaReservas, Reserva } from '../models/reservas.js';
import { arbolVuelos } from '../models/vuelos.js'; // Importa el árbol de vuelos

export function agregarReserva(vueloId, pasajero) {
    const vueloExistente = arbolVuelos.buscarVueloPorId(vueloId); // Verifica que el vuelo exista
    if (!vueloExistente) {
        console.error(`Vuelo con ID ${vueloId} no encontrado. No se puede crear la reserva.`);
        return { error: `Vuelo con ID ${vueloId} no encontrado.` };
    }

    const id = listaReservas.obtenerReservas().length + 1; 
    const reserva = new Reserva(id, vueloId, pasajero);
    listaReservas.agregarReserva(reserva);
    return { success: `Reserva creada con éxito para el vuelo ID ${vueloId}.` };
}

export function mostrarReservas() {
    return listaReservas.obtenerReservas();
}
