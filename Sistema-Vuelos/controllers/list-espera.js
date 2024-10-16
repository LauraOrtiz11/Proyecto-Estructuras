const priorityQueue = new PriorityQueue();

const passengerController = {
    addPassengerToWaitlist: (name, status, reservationID) => {
        const passenger = new Passenger(name, status, reservationID);
        priorityQueue.enqueue(passenger);
    },

    processNextPassenger: () => {
        return priorityQueue.dequeue();
    },

    viewWaitlist: () => {
        priorityQueue.viewWaitlist();
    }
};
