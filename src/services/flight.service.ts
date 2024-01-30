// flight.service.ts

import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flights: Flight[] = [
    // Ajoutez des vols ici pour simuler des données
    // Exemple : { id: 1, departureDate: new Date(), arrivalDate: new Date(), flightNumber: 'ABC123', source: 'Source', destination: 'Destination', airline: 'Airline', tickets: [] }
  ];

  constructor() { }

  getFlights(): Flight[] {
    return this.flights;
  }

  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }

  updateFlight(flight: Flight): void {
    const index = this.flights.findIndex(f => f.id === flight.id);
    if (index !== -1) {
      this.flights[index] = flight;
    }
  }

  deleteFlight(id: number): void {
    this.flights = this.flights.filter(f => f.id !== id);
  }
}
