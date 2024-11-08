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

    agregarVuelo(vuelo) {
        if (this.raiz === null) {
            this.raiz = new NodoVuelo(vuelo);
        } else {
            this._agregarRecursivo(this.raiz, vuelo);
        }
    }

    _agregarRecursivo(nodo, vuelo) {
        if (vuelo.fecha < nodo.vuelo.fecha) {
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

    obtenerVuelos() {
        return this._inorden(this.raiz);
    }

    _inorden(nodo) {
        const vuelos = [];
        if (nodo) {
            vuelos.push(...this._inorden(nodo.izquierda));
            vuelos.push(nodo.vuelo);
            vuelos.push(...this._inorden(nodo.derecha));
        }
        return vuelos;
    }

    buscarVueloPorId(id) {
        return this._buscarRecursivo(this.raiz, id);
    }

    _buscarRecursivo(nodo, id) {
        if (!nodo) return null;
        if (nodo.vuelo.id === id) return nodo.vuelo;
        return id < nodo.vuelo.id
            ? this._buscarRecursivo(nodo.izquierda, id)
            : this._buscarRecursivo(nodo.derecha, id);
    }
}

export const arbolVuelos = new ArbolVuelos();
