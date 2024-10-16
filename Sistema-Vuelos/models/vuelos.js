class Vuelo {
    constructor(VueloNumber, airline, destination, departureTime) {
        this.VueloNumber = VueloNumber;
        this.airline = airline;
        this.destination = destination;
        this.departureTime = departureTime;
        this.left = null;
        this.right = null;
    }
}

class VueloArbol {
    constructor() {
        this.root = null;
    }

    // Insertar vuelo en el árbol
    insert(Vuelo) {
        const newVuelo = new Vuelo(Vuelo.VueloNumber, Vuelo.airline, Vuelo.destination, Vuelo.departureTime);
        if (this.root === null) {
            this.root = newVuelo;
        } else {
            this._insertNode(this.root, newVuelo);
        }
    }

    _insertNode(node, newVuelo) {
        if (newVuelo.destination < node.destination) {
            if (node.left === null) {
                node.left = newVuelo;
            } else {
                this._insertNode(node.left, newVuelo);
            }
        } else {
            if (node.right === null) {
                node.right = newVuelo;
            } else {
                this._insertNode(node.right, newVuelo);
            }
        }
    }

    // Buscar vuelo por destino
    search(destination) {
        return this._searchNode(this.root, destination);
    }

    _searchNode(node, destination) {
        if (node === null) return null;
        if (destination < node.destination) return this._searchNode(node.left, destination);
        if (destination > node.destination) return this._searchNode(node.right, destination);
        return node;
    }

    // Mostrar vuelos (in-order traversal)
    displayVuelos(node = this.root) {
        if (node !== null) {
            this.displayVuelos(node.left);
            console.log(`Vuelo: ${node.VueloNumber}, Airline: ${node.airline}, Destination: ${node.destination}, Time: ${node.departureTime}`);
            this.displayVuelos(node.right);
        }
    }
}
