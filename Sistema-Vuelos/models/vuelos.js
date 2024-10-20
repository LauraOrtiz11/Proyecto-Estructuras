class Vuelo {
    constructor(id, tipo, nacionalidad, hora, capacidadMaxima) {
        this.id = id; // Identificador único del vuelo
        this.tipo = tipo; // 'salida' o 'llegada'
        this.nacionalidad = nacionalidad; // 'nacional' o 'internacional'
        this.hora = hora; // Hora de despegue o aterrizaje
        this.capacidadMaxima = capacidadMaxima; // Capacidad máxima de pasajeros
    }
}

class NodoVuelo {
    constructor(vuelo) {
        this.vuelo = vuelo;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ArbolVuelos {
    constructor() {
        this.raiz = null;
    }

    agregar(vuelo) {
        if (this.raiz === null) {
            this.raiz = new NodoVuelo(vuelo);
        } else {
            this._agregarRecursivo(this.raiz, vuelo);
        }
    }

    _agregarRecursivo(nodo, vuelo) {
        if (vuelo.id < nodo.vuelo.id) {
            if (nodo.izquierda === null) {
                nodo.izquierda = new NodoVuelo(vuelo);
            } else {
                this._agregarRecursivo(nodo.izquierda, vuelo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = new NodoVuelo(vuelo);
            } else {
                this._agregarRecursivo(nodo.derecha, vuelo);
            }
        }
    }

    mostrarTodos() {
        const vuelos = [];
        this._inorden(this.raiz, vuelos);
        return vuelos;
    }

    _inorden(nodo, vuelos) {
        if (nodo) {
            this._inorden(nodo.izquierda, vuelos);
            vuelos.push(nodo.vuelo);
            this._inorden(nodo.derecha, vuelos);
        }
    }

    buscar(id) {
        return this._buscarRecursivo(this.raiz, id);
    }

    _buscarRecursivo(nodo, id) {
        if (nodo === null || nodo.vuelo.id === id) {
            return nodo ? nodo.vuelo : null;
        }
        return id < nodo.vuelo.id ? 
            this._buscarRecursivo(nodo.izquierda, id) : 
            this._buscarRecursivo(nodo.derecha, id);
    }

    eliminar(id) {
        this.raiz = this._eliminarRecursivo(this.raiz, id);
    }

    _eliminarRecursivo(nodo, id) {
        if (nodo === null) return nodo;

        if (id < nodo.vuelo.id) {
            nodo.izquierda = this._eliminarRecursivo(nodo.izquierda, id);
        } else if (id > nodo.vuelo.id) {
            nodo.derecha = this._eliminarRecursivo(nodo.derecha, id);
        } else { // Nodo encontrado
            if (nodo.izquierda === null) return nodo.derecha;
            else if (nodo.derecha === null) return nodo.izquierda;

            // Nodo con dos hijos: obtener el sucesor inorden
            let sucesor = this._minimo(nodo.derecha);
            nodo.vuelo = sucesor.vuelo;
            nodo.derecha = this._eliminarRecursivo(nodo.derecha, sucesor.vuelo.id);
        }
        return nodo;
    }

    _minimo(nodo) {
        while (nodo.izquierda !== null) {
            nodo = nodo.izquierda;
        }
        return nodo;
    }
}