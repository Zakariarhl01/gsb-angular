export class Visiteur{

    constructor(public id:string, public nom:string, public prenom:string, public login:string, public mdp:string, public adresse:string
        , public cp:string, public ville:string, public dateEmbauche:string, public timespan:string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.login = login;
        this.mdp = mdp;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this.dateEmbauche = dateEmbauche;
        this.timespan = timespan;
    }
}