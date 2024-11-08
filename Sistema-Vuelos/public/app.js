import { obtenerVuelos, agregarVuelo, modificarVuelo } from '../controllers/vuelos.js';

// Función para mostrar los vuelos en la vista
const mostrarVuelos = () => {
    const contenedor = document.getElementById('vuelos-container');
    contenedor.innerHTML = ''; // Limpiar el contenedor
    const vuelos = obtenerVuelos();
    vuelos.forEach(vuelo => {
        const vueloElemento = document.createElement('div');
        vueloElemento.innerHTML = `
            <div>Vuelo ID: ${vuelo.id}, Origen: ${vuelo.origen}, Destino: ${vuelo.destino}, Fecha: ${vuelo.fecha}, Hora: ${vuelo.hora}, Disponibilidad: ${vuelo.disponibilidad}</div>
            <button onclick="modificarVuelo(${vuelo.id})">Modificar</button>
        `;
        contenedor.appendChild(vueloElemento);
    });
};

// Función para agregar vuelo
const agregarNuevoVuelo = (origen, destino, fecha, hora, disponibilidad) => {
    agregarVuelo(origen, destino, fecha, hora, disponibilidad);
    mostrarVuelos();
};

// Función para modificar vuelo
window.modificarVuelo = (id) => {
    const nuevoOrigen = prompt("Nuevo Origen:");
    const nuevoDestino = prompt("Nuevo Destino:");
    const nuevaFecha = prompt("Nueva Fecha (YYYY-MM-DD):");
    const nuevaHora = prompt("Nueva Hora (HH:MM):");
    const nuevaDisponibilidad = prompt("Nueva Disponibilidad:");
    modificarVuelo(id, nuevoOrigen, nuevoDestino, nuevaFecha, nuevaHora, nuevaDisponibilidad);
    mostrarVuelos();
};



// Manejo del formulario de agregar vuelo
document.getElementById('add-vuelo-form').onsubmit = (e) => {
    e.preventDefault();
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const disponibilidad = document.getElementById('disponibilidad').value;
    agregarNuevoVuelo(origen, destino, fecha, hora, disponibilidad);
    e.target.reset(); // Resetea el formulario
};

// Llamar a mostrarVuelos al cargar la página
window.onload = mostrarVuelos;// js/app.js
import { agregarReserva, obtenerReservas } from '../controllers/reservas.js';

document.addEventListener('DOMContentLoaded', () => {
    const reservasContainer = document.getElementById('reservas-container');
    const addReservaForm = document.getElementById('add-reserva-form');
    const toggleReservasBtn = document.getElementById('toggle-reservas-btn');

    // Función para mostrar reservas
    const mostrarReservas = () => {
        const reservas = obtenerReservas();
        if (reservas.length === 0) {
            reservasContainer.innerHTML = '<p>No hay reservas disponibles.</p>';
            return;
        }
        reservas.forEach(reserva => {
            const div = document.createElement('div');
            div.textContent = `Reserva ID: ${reserva.id}, Vuelo ID: ${reserva.vueloId}, Pasajero: ${reserva.pasajero}`;
            reservasContainer.appendChild(div);
        });
    };

    // Evento para agregar reserva
    addReservaForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar el envío del formulario
        const vueloId = document.getElementById('vuelo-id').value;
        const pasajero = document.getElementById('pasajero').value;

        agregarReserva(vueloId, pasajero); // Agregar la reserva
        mostrarReservas(); // Mostrar reservas después de agregar una nueva

    });

    // Evento para mostrar u ocultar reservas
    toggleReservasBtn.addEventListener('click', () => {
        if (reservasContainer.style.display === 'none') {
            mostrarReservas(); // Mostrar reservas
            reservasContainer.style.display = 'block';
            toggleReservasBtn.textContent = 'Ocultar Reservas';
        } else {
            reservasContainer.style.display = 'none';
            toggleReservasBtn.textContent = 'Mostrar Reservas';
        }
    });
});
