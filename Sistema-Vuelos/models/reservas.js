
export class Reserva {
    constructor(id, vueloId, pasajero) {
        this.id = id;
        this.vueloId = vueloId;
        this.pasajero = pasajero;
        this.checkedIn = false;
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
    eliminarReserva(id) {
        let actual = this.cabeza;
        let anterior = null;

        while (actual) {
            if (actual.id == id) {
                if (anterior == null) {
                    this.cabeza = actual.siguiente;
                } else {
                    anterior.siguiente = actual.siguiente;
                }
                return true;
            }
            anterior = actual;
            actual = actual.siguiente;
        }
        return false;
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
