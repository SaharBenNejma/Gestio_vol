import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VolListComponent} from "./vol-list/vol-list.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {AdministrationComponent} from "./administration/administration.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'vols', component: VolListComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'admin', component: AdministrationComponent },
  { path: 'acceuil', component: AcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
