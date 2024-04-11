import { Component,Input } from '@angular/core';
import { Offrir } from '../models/offrir.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offrir',
  templateUrl: './offrir.component.html',
  styleUrls: ['./offrir.component.scss']
})

export class OffrirComponent {
  @Input() offrir!:Offrir;

  constructor(private route:Router) {}
  
}
