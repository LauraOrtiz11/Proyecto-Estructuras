import { arbolVuelos } from '../models/vuelos.js';

export function agregarVuelo(origen, destino, fecha, hora, disponibilidadEstandar, disponibilidadVIP) {
    const vuelo = { origen, destino, fecha, hora, disponibilidadEstandar, disponibilidadVIP };
    arbolVuelos.agregarVuelo(vuelo);
}

export function mostrarVuelos() {
    return arbolVuelos.obtenerVuelos();
}

