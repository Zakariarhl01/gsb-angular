import { Component,Input } from '@angular/core';
import { Rapport } from '../models/rapport.model';
import { Router } from '@angular/router';
import { Rapportservice } from '../services/rapport.service';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';


@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent{
  @Input() rapport!:Rapport;

  constructor(private route:Router) {}

}
