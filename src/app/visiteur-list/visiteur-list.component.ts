import { Component, OnInit } from '@angular/core';
import { Visiteur } from '../models/visiteur.model';
import { Observable } from 'rxjs';
import { VisiteurService } from '../services/visiteur.service';

@Component({
  selector: 'app-visiteur-list',
  templateUrl: './visiteur-list.component.html',
  styleUrls: ['./visiteur-list.component.scss']
})
export class VisiteurListComponent implements OnInit{
  visiteur$!:Observable<Visiteur[]>;

  constructor(private visiteurService:VisiteurService) {}

  ngOnInit(): void {
    
    this.visiteur$ = this.visiteurService.getAllVisiteur();

  }

}
