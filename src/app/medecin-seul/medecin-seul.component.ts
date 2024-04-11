import { Component, OnInit } from '@angular/core';
import { MedecinServices } from '../services/medecin.service';
import { Medecin } from '../models/medecin.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rapport } from '../models/rapport.model';
import { Rapportservice } from '../services/rapport.service';
import { Offrir } from '../models/offrir.model';
import { Offrirservice } from '../services/offrir.service';

@Component({
  selector: 'app-medecin-seul',
  templateUrl: './medecin-seul.component.html',
  styleUrls: ['./medecin-seul.component.scss']
})
export class MedecinSeulComponent implements OnInit{
  unMedecin$!:Observable<Medecin[]>;
  unRapport$!:Observable<Rapport[]>;
  uneOffre$!:Observable<Offrir[]>;

  constructor(private medecinService:MedecinServices, private router: Router ,private route: ActivatedRoute, private rapportService:Rapportservice, private offresService:Offrirservice) { }

  ngOnInit(): void {
    const id =+ this.route.snapshot.params['id'];
    this.unMedecin$ = this.medecinService.getMedecinById(+id);
    
    const idRapport = +this.route.snapshot.params['id'];
    this.unRapport$ = this.rapportService.getRapportById(+idRapport);

    // const idOffrir = +this.route.snapshot.params['idRapport'];
    // this.uneOffre$ = this.offresService.getOffrirByIdRapport(+idOffrir);
  }

  goToAjoutRapport(idMedecin: string) {
    this.router.navigateByUrl(`ajout-rapport/${idMedecin}`);
  }
}
