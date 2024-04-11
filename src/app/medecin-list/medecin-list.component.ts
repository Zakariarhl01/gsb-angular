import { Component, OnInit } from '@angular/core';
import { MedecinServices } from '../services/medecin.service';
import { Observable } from 'rxjs';
import { Medecin } from '../models/medecin.model';

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.scss']
})
export class MedecinListComponent implements OnInit{

  medecin$!:Observable<Medecin[]>;

  constructor(private medecinService:MedecinServices) {}

  ngOnInit(): void {
    
    this.medecin$ = this.medecinService.getAllMedecin();

  }
}
