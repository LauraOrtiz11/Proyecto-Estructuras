const ReservacionList = new ReservacionList();

const ReservacionController = {
    addReservacion: (flightNumber, passengerName) => {
        ReservacionList.addReservacion(flightNumber, passengerName);
    },

    displayReservacions: () => {
        ReservacionList.displayReservacions();
    }
};
