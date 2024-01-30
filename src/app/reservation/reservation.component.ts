// reservation.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  vols: any[] = [];
  selectedVol: any = null;
  clientName: string = '';
  passportNumber: string = '';
  email: string = '';

  ngOnInit(): void {
    this.loadVols();
  }

  loadVols(): void {
    const storedVols = localStorage.getItem('vols');

    if (storedVols) {
      this.vols = JSON.parse(storedVols);
    }
  }

  reserve(): void {
    if (this.selectedVol && this.clientName && this.passportNumber && this.email) {
      const reservation = {
        clientName: this.clientName,
        passportNumber: this.passportNumber,
        email: this.email,
        selectedVol: this.selectedVol.reference // Utilisez une référence au lieu de l'objet complet pour éviter toute incohérence
      };

      // Stockez la réservation dans le local storage
      const reservations = localStorage.getItem('reservations') ? JSON.parse(localStorage.getItem('reservations')!) : [];
      reservations.push(reservation);
      localStorage.setItem('reservations', JSON.stringify(reservations));

      // Réinitialisez les champs du formulaire
      this.clientName = '';
      this.passportNumber = '';
      this.email = '';
      this.selectedVol = null;

      // Afficher l'alerte personnalisée
      alert('Votre réservation a été sauvegardée avec succès.');

    } else {
      alert('Veuillez remplir tous les champs et sélectionner un vol.');
    }
  }
}
