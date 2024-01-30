import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vol-list',
  templateUrl: './vol-list.component.html',
  styleUrls: ['./vol-list.component.css']
})
export class VolListComponent implements OnInit {
  avions: string[] = ['Avion 1', 'Avion 2', 'Avion 3'];
  vols: any[] = [];
  newVol: any = { referenceAvion: '' };
  selectedVol: any = {};
  searchQuery: string = '';

  ngOnInit(): void {
    this.loadVols();
  }

  addVol(): void {
    const existingVol = this.vols.find(v => v.reference === this.newVol.reference);

    if (existingVol) {
      existingVol.dateHeureVol = this.newVol.dateHeureVol;
      existingVol.referenceAvion = this.newVol.referenceAvion;
      existingVol.depart = this.newVol.depart;
      existingVol.destination = this.newVol.destination;
    } else {
      this.vols.push({ ...this.newVol });
    }

    this.saveVols();
    this.loadVols(); // Ajoutez cette ligne pour actualiser la liste après l'ajout
    this.newVol = { referenceAvion: '' };
  }

  updateVol(vol: any): void {
    this.selectedVol = { ...vol };
    this.newVol = { ...this.selectedVol };
  }

  deleteVol(reference: string): void {
    this.vols = this.vols.filter(v => v.reference !== reference);
    this.saveVols();
  }

  searchVols(): void {
    if (this.searchQuery.trim() !== '') {
      this.vols = this.vols.filter(
        v =>
          v.reference.includes(this.searchQuery) ||
          v.dateHeureVol.includes(this.searchQuery) ||
          v.referenceAvion.includes(this.searchQuery) ||
          v.depart.includes(this.searchQuery) ||
          v.destination.includes(this.searchQuery)
      );
    } else {
      this.loadVols();
    }
  }

  loadVols(): void {
    const storedVols = localStorage.getItem('vols');

    if (storedVols) {
      this.vols = JSON.parse(storedVols);
    }
  }

  saveVols(): void {
    localStorage.setItem('vols', JSON.stringify(this.vols));
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString();
  }
}
