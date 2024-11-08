import { listaReservas, Reserva } from '../models/reservas.js';
import { arbolVuelos } from "../models/vuelos.js";

export function agregarReserva(vueloId, pasajero) {
  const vuelos = arbolVuelos.obtenerVuelos();
  const vuelo = vuelos.find((v) => v.id == vueloId);

  if (!vuelo) {
    alert("Vuelo no encontrado.");
    return;
  }

  if (vuelo.capacidad <= 0) {
    alert("No hay asientos disponibles en este vuelo.");
    return;
  }

  vuelo.capacidad--; // Reducir capacidad del vuelo
  const reserva = new Reserva(Date.now(), vueloId, pasajero);
  listaReservas.agregarReserva(reserva);

  alert("Reserva agregada exitosamente.");
}

export function mostrarReservas() {
  return listaReservas.obtenerReservas();
}

  


