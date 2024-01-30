// administration.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  billets: any[] = [];
  reservations: any[] = [];
  newBillet: any = {};
  selectedBillet: any = {};
  searchQuery: string = '';

  constructor() {
    this.loadBillets();
    this.loadReservations();
  }

  addBillet(): void {
    const existingBillet = this.billets.find(b => b.code === this.newBillet.code);

    if (existingBillet) {
      existingBillet.prix = this.newBillet.prix;
      existingBillet.classe = this.newBillet.classe;
    } else {
      this.billets.push({ ...this.newBillet });
    }

    this.saveBillets();
    this.newBillet = {};
  }

  updateBillet(billet: any): void {
    this.selectedBillet = { ...billet };
    this.newBillet = { ...this.selectedBillet };
  }

  deleteBillet(code: string): void {
    this.billets = this.billets.filter(b => b.code !== code);
    this.saveBillets();
  }

  searchBillets(): void {
    if (this.searchQuery.trim() !== '') {
      this.loadBillets(); // Recharge tous les billets
      this.billets = this.billets.filter(
        b => b.code.includes(this.searchQuery) || b.prix.toString().includes(this.searchQuery) || b.classe.includes(this.searchQuery)
      );
    } else {
      this.loadBillets();
    }
  }

  deleteReservation(reservation: any): void {
    this.reservations = this.reservations.filter(r => r !== reservation);
    this.saveReservations();
  }

  loadBillets(): void {
    const storedBillets = localStorage.getItem('billets');

    if (storedBillets) {
      this.billets = JSON.parse(storedBillets);
    }
  }

  saveBillets(): void {
    localStorage.setItem('billets', JSON.stringify(this.billets));
  }

  loadReservations(): void {
    const storedReservations = localStorage.getItem('reservations');

    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
    }
  }

  saveReservations(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  ngOnInit(): void {
    this.loadBillets();
    this.loadReservations();
  }
}
