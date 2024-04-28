import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicamentListComponent } from './medicament-list/medicament-list.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { MedicamentServices } from './services/medicament.service';
import { MedicamentSeulComponent } from './medicament-seul/medicament-seul.component';
import { MedecinComponent } from './medecin/medecin.component';
import { MedecinListComponent } from './medecin-list/medecin-list.component';
import { MedecinSeulComponent } from './medecin-seul/medecin-seul.component';
import { MedecinServices } from './services/medecin.service';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { VisiteurComponent } from './visiteur/visiteur.component';
import { VisiteurListComponent } from './visiteur-list/visiteur-list.component';
import { VisiteurService } from './services/visiteur.service';
import { RapportComponent } from './rapport/rapport.component';
import { Rapportservice } from './services/rapport.service';
import { OffrirComponent } from './offrir/offrir.component';
import { AjoutRapportComponent } from './ajout-rapport/ajout-rapport.component';
import { SuppRapportComponent } from './supp-rapport/supp-rapport.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicamentListComponent,
    MedicamentComponent,
    MedicamentSeulComponent,
    MedecinComponent,
    MedecinListComponent,
    MedecinSeulComponent,
    AuthComponent,
    HeaderComponent,
    VisiteurComponent,
    VisiteurListComponent,
    RapportComponent,
    OffrirComponent,
    AjoutRapportComponent,
    SuppRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MedicamentServices,
    MedecinServices,
    AuthService,
    VisiteurService,
    Rapportservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
