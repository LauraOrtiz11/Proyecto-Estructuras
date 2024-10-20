// Inicialización del árbol de vuelos
const controlador = new ArbolVuelos();

document.getElementById('form-vuelo').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const tipo = document.getElementById('tipo').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    const hora = document.getElementById('hora').value;
    const capacidadMaxima = document.getElementById('capacidadMaxima').value;

    const nuevoVuelo = new Vuelo(id, tipo, nacionalidad, hora, capacidadMaxima);

    controlador.agregar(nuevoVuelo);

    // Actualizar la lista en la vista
    actualizarListaVuelos();
    
    // Limpiar el formulario después de agregar el vuelo
    document.getElementById('form-vuelo').reset();
});

function actualizarListaVuelos() {
    const listaVuelos = document.getElementById('lista-vuelos');
    listaVuelos.innerHTML = ''; // Limpiar la lista actual

    controlador.mostrarTodos().forEach(vuelo => {
        const li = document.createElement('li');
        li.textContent = `ID: ${vuelo.id}, Tipo: ${vuelo.tipo}, Nacionalidad: ${vuelo.nacionalidad}, Hora: ${vuelo.hora}, Capacidad: ${vuelo.capacidadMaxima}`;
        listaVuelos.appendChild(li);
    });
}

document.getElementById('buscar-btn').addEventListener('click', function() {
    const buscarId = document.getElementById('buscar-id').value;
    
    // Asegúrate de que el ID sea una cadena
    const vueloEncontrado = controlador.buscar(buscarId);

    if (vueloEncontrado) {
        alert(`Vuelo encontrado: ID: ${vueloEncontrado.id}, Tipo: ${vueloEncontrado.tipo}, Nacionalidad: ${vueloEncontrado.nacionalidad}, Hora: ${vueloEncontrado.hora}, Capacidad: ${vueloEncontrado.capacidadMaxima}`);
    } else {
        alert("Vuelo no encontrado.");
    }
    
    document.getElementById('buscar-id').value = ''; // Limpiar el campo de búsqueda
});

document.getElementById('eliminar-btn').addEventListener('click', function() {
    const eliminarId = document.getElementById('eliminar-id').value;

    controlador.eliminar(eliminarId);

    alert("Vuelo eliminado si existía.");

    actualizarListaVuelos(); // Actualizar la lista después de eliminar
    
    document.getElementById('eliminar-id').value = ''; // Limpiar el campo de eliminación
});