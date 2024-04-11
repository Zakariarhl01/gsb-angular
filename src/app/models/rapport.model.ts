export class Rapport{

    constructor(public id:string, public date:string, public motif:string, public bilan:string, public idVisiteur:string, 
        public idMedecin:string, public nom:string, public prenom:string) {
            this.id = id;
            this.date = date;
            this.motif = motif;
            this.bilan = bilan;
            this.idVisiteur = idVisiteur;
            this.idMedecin = idMedecin;
            this.nom = nom;
            this.prenom = prenom;
        }
}