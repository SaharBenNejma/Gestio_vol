import {Ticket} from "./ticket";
import {Client} from "./client";


export interface Reservation {
  id: number;
  startDate: Date;
  endDate: Date;
  client: Client;
  tickets: Ticket[];
}
