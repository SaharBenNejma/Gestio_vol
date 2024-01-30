// client.service.ts

import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [];

  constructor() { }

  getClients(): Client[] {
    return this.clients;
  }

  addClient(client: Client): void {
    this.clients.push(client);
  }

  updateClient(client: Client): void {
    const index = this.clients.findIndex(c => c.email === client.email);
    if (index !== -1) {
      this.clients[index] = client;
    }
  }

  deleteClient(email: string): void {
    this.clients = this.clients.filter(c => c.email !== email);
  }
}
