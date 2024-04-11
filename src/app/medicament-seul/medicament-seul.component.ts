import { Component, OnInit } from '@angular/core';
import { MedicamentServices } from '../services/medicament.service';
import { Medicament } from '../models/medicament.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicament-seul',
  templateUrl: './medicament-seul.component.html',
  styleUrls: ['./medicament-seul.component.scss']
})
export class MedicamentSeulComponent implements OnInit{
  unMedicament$!:Observable<Medicament[]>;

  constructor(private medicamentService:MedicamentServices, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.params['id'];
    this.unMedicament$ = this.medicamentService.getMedicamentById(id);
  }

}
