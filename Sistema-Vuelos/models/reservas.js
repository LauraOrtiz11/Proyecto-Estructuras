export class Reserva {
    constructor(id, vueloId, pasajero) {
        this.id = id;
        this.vueloId = vueloId;
        this.pasajero = pasajero;
        this.siguiente = null; 
    }
}
export class ListaReservas {
    constructor() {
        this.cabeza = null;
    }

    agregarReserva(reserva) {
        if (!this.cabeza) {
            this.cabeza = reserva;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = reserva;
        }
    }

    obtenerReservas() {
        const reservas = [];
        let actual = this.cabeza;
        while (actual) {
            reservas.push(actual);
            actual = actual.siguiente;
        }
        return reservas;
    }
}

export const listaReservas = new ListaReservas();
