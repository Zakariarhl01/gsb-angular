import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentListComponent } from './medicament-list/medicament-list.component';
import { MedicamentSeulComponent } from './medicament-seul/medicament-seul.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { MedecinListComponent } from './medecin-list/medecin-list.component';
import { MedecinSeulComponent } from './medecin-seul/medecin-seul.component';
import { AuthComponent } from './auth/auth.component';
import { VisiteurListComponent } from './visiteur-list/visiteur-list.component';
import { AjoutRapportComponent } from './ajout-rapport/ajout-rapport.component';

const routes: Routes = [
  {path: 'medicament', component: MedicamentListComponent},
  {path: 'medicaments/:id', component: MedicamentSeulComponent},
  {path: 'medecin', component: MedecinListComponent},
  {path: 'medecins/:id', component: MedecinSeulComponent},
  {path: 'visiteur', component: VisiteurListComponent},
  {path: 'ajout-rapport/:idMedecin', component: AjoutRapportComponent},
  {path: '', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
