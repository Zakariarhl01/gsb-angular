import { Component, Input } from '@angular/core';
import { Medicament } from '../models/medicament.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent {

  @Input() medicament!:Medicament;

  constructor(private route:Router) { }

  onViewMedicament() {
    this.route.navigateByUrl(`medicaments/${this.medicament.id}`);
  }
}
