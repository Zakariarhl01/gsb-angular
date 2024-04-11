export class Medicament{

    constructor(public id:string, public nomCommercial:string, public idFamille:string, public composition:string, public effets:string, public contreIndications:string, public libelle:string) {
        this.id = id;
        this.nomCommercial = nomCommercial;
        this.idFamille = idFamille;
        this.composition = composition;
        this.effets = effets;
        this.contreIndications = contreIndications;
        this.libelle = libelle;
    }
}

