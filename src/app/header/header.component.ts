import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  titreBoutonConnexion!:string;

  constructor(private authService:AuthService) { }

 getStatusAuth(){
  return this.authService.getAthuStatus();
}

}
