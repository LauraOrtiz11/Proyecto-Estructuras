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
            this.agregar(this.raiz, vuelo);
        }
    }

    agregar(nodo, vuelo) {
        if (vuelo.fecha < nodo.vuelo.fecha) {
            if (nodo.izquierda === null) {
                nodo.izquierda = new NodoVuelo(vuelo);
            } else {
                this.agregar(nodo.izquierda, vuelo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = new NodoVuelo(vuelo);
            } else {
                this.agregar(nodo.derecha, vuelo);
            }
        }
    }

    obtenerVuelos() {
        return this.recorrido(this.raiz);
    }

    recorrido(nodo) {
        const vuelos = [];
        if (nodo) {
            vuelos.push(...this.recorrido(nodo.izquierda));
            vuelos.push(nodo.vuelo);
            vuelos.push(...this.recorrido(nodo.derecha));
        }
        return vuelos;
    }
}

export const arbolVuelos = new ArbolVuelos();