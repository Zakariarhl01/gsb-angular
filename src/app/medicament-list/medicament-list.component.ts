import { Component, OnInit } from '@angular/core';
import { Medicament } from '../models/medicament.model';
import { MedicamentServices } from '../services/medicament.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicament-list',
  templateUrl: './medicament-list.component.html',
  styleUrls: ['./medicament-list.component.scss']
})
export class MedicamentListComponent implements OnInit{

  medicament$!:Observable<Medicament[]>;

  constructor(private medicamentService:MedicamentServices) {}

  ngOnInit(): void {
    
    this.medicament$ = this.medicamentService.getAllMedicament();
    
  }
}
