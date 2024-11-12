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

  vuelo.capacidad--; 
  const reserva = new Reserva(Date.now(), vueloId, pasajero);
  listaReservas.agregarReserva(reserva);

  alert("Reserva agregada exitosamente.");
}

export function realizarCheckIn(reservaId) {
  const reservas = listaReservas.obtenerReservas();
  const reserva = reservas.find((r) => r.id == reservaId);

  if (!reserva) {
    alert("Reserva no encontrada.");
    return;
  }

  if (reserva.checkedIn) {
    alert("El check-in ya fue realizado para esta reserva.");
    return;
  }

  reserva.checkedIn = true;
  alert("Check-in realizado exitosamente.");
}

export function mostrarReservas() {
  return listaReservas.obtenerReservas();
}


export function eliminarReserva(reservaId) {
  const reservas = listaReservas.obtenerReservas();
  const reserva = reservas.find((r) => r.id === Number(reservaId)); 
  if (reserva) {
    const eliminado = listaReservas.eliminarReserva(reservaId); 
    if (eliminado) {
      alert("Reserva eliminada exitosamente.");
      mostrarReservas();
    } else {
      alert("Error al eliminar la reserva.");
    }
  } else {
    alert("Reserva no encontrada.");
  }
}




