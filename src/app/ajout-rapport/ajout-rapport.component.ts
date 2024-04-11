import { Component,OnInit } from '@angular/core';
import { Rapport } from '../models/rapport.model';
import { ActivatedRoute } from '@angular/router';
import { Rapportservice } from '../services/rapport.service';
import { MedecinServices } from '../services/medecin.service';
import { Medecin } from '../models/medecin.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajout-rapport',
  templateUrl: './ajout-rapport.component.html',
  styleUrls: ['./ajout-rapport.component.scss']
})
export class AjoutRapportComponent implements OnInit{
  unMedecin$!:Observable<Medecin[]>;
  unRapport$!:Observable<Rapport[]>;
  date!: string;
  motif!: string;
  bilan!: string;
  idVisiteur!: string;
  id!: string;

  constructor(private medecinService:MedecinServices, private route: ActivatedRoute, private rapportService:Rapportservice) {}

  ngOnInit(): void {
    const id =+ this.route.snapshot.params['id'];
    this.unMedecin$ = this.medecinService.getMedecinById(+id);
    
    const idRapport = +this.route.snapshot.params['id'];
    this.unRapport$ = this.rapportService.getRapportById(+idRapport);
  }

  onSubmit() {
    console.log(this.date);
    console.log(this.motif);
    console.log(this.bilan);
    console.log(this.idVisiteur);
    const id: string = this.route.snapshot.params['idMedecin'];
    console.log(id);
    
    this.rapportService.insertRapportById(
      this.date,
      this.motif,
      this.bilan,
      this.idVisiteur,
      id
    );
  }

}
