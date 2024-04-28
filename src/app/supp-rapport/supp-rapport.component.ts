import { Component, Input, OnInit } from '@angular/core';
import { Rapportservice } from '../services/rapport.service';
import { Rapport } from '../models/rapport.model';

@Component({
  selector: 'app-supp-rapport',
  templateUrl: './supp-rapport.component.html',
  styleUrls: ['./supp-rapport.component.scss']
})
export class SuppRapportComponent implements OnInit {
  @Input() idRapport!: string;
  unRapport: Rapport | undefined;
  messageConfirmation: string = '';

  constructor(private rapportService: Rapportservice) {}

  ngOnInit(): void {
    const idRapportNumber = parseInt(this.idRapport); // Convertir la chaîne en nombre
    if (!isNaN(idRapportNumber)) { // Assurez-vous que la conversion est réussie
      this.rapportService.getRapportById(idRapportNumber).subscribe(rapports => {
        // Supposons que vous récupériez un tableau de rapports, vous pouvez choisir le premier élément ici
        if (rapports.length > 0) {
          this.unRapport = rapports[0]; // Sélectionnez le premier rapport du tableau
        }
      });
    } else {
      console.error('L\'ID du rapport n\'est pas un nombre valide.');
    }
  }

  onDelete() {
    if (this.unRapport) {
      this.rapportService.deleteRapportById(this.unRapport.id).subscribe(response => {
        console.log('Rapport supprimé avec succès', response);
        this.messageConfirmation = 'Le rapport a bien été supprimé.';
      }, error => {
        console.error('Erreur lors de la suppression du rapport', error)
        this.messageConfirmation = 'Une erreur est survenue, le rapport n\'a pas été supprimé.';
      });
    }
    setTimeout(() => {
      this.messageConfirmation = "";
    }, 2000);
  }
}
