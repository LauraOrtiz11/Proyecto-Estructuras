import { arbolVuelos } from '../models/vuelos.js';

// Función para cargar vuelos desde JSON
async function cargarVuelos() {
  try {
    const response = await fetch("../public/data/vuelos.json");
    const vuelos = await response.json();

    vuelos.forEach((vuelo) => {
      arbolVuelos.agregarVuelo(vuelo);
    });
  } catch (error) {
    console.error("Error al cargar vuelos:", error);
  }
}

// Función para obtener vuelos disponibles
export function obtenerVuelosDisponibles() {
  return arbolVuelos.obtenerVuelos();
}

// Inicializa la carga de vuelos
cargarVuelos();


