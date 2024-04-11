import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Visiteur } from '../models/visiteur.model';

@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.scss']
})
export class VisiteurComponent {

  @Input() visiteur!:Visiteur;

  constructor(private route:Router) { }
}