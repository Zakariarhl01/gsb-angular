export class Medecin{

    constructor(public id:string, public nom:string, public prenom:string, public adresse:string, public tel:string, 
        public specialitecomplementaire:string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.tel = tel;
        this.specialitecomplementaire= specialitecomplementaire;
    }
}