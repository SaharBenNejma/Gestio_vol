import {Ticket} from "./ticket";

export interface Flight {
  id: number;
  departureDate: Date;
  arrivalDate: Date;
  flightNumber: string;
  source: string;
  destination: string;
  airline: string;
  tickets: Ticket[];
}
