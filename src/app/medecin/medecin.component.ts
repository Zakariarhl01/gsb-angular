import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from '../models/medecin.model';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent {

  @Input() medecin!:Medecin;

  constructor(private route:Router) { }

  onViewMedecin() {
    this.route.navigateByUrl(`medecins/${this.medecin.id}`);
  }

}
