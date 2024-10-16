const vuelos = new vuelos();

const vueloscontrolador = {
    addFlight: (flightNumber, airline, destination, departureTime) => {
        vuelos.insert({ flightNumber, airline, destination, departureTime });
    },
    
    searchFlight: (destination) => {
        return vuelos.search(destination);
    },

    displayFlights: () => {
        vuelos.displayFlights();
    }
};
