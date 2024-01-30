// ticket.service.ts

import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];

  constructor() { }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  addTicket(ticket: Ticket): void {
    this.tickets.push(ticket);
  }

  updateTicket(ticket: Ticket): void {
    const index = this.tickets.findIndex(t => t.code === ticket.code);
    if (index !== -1) {
      this.tickets[index] = ticket;
    }
  }

  deleteTicket(code: string): void {
    this.tickets = this.tickets.filter(t => t.code !== code);
  }
}
