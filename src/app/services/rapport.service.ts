import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Rapport } from "../models/rapport.model";



@Injectable({
    providedIn:'root'
})

export class Rapportservice {
    rapports!:Rapport[];
    constructor(private http: HttpClient) { }
     
    getRapportById(id: number): Observable<Rapport[]> {
        return this.http.get<Rapport[]>(`http://172.20.120.31/gsb/gsbapi/?idRapport=${id}`);
    }
    
    insertRapportById(date: string, motif: string, bilan: string, idVisiteur: string, idMedecin: string):void {
        this.http.get<Rapport[]>(`http://172.20.120.31/gsb/gsbapi/?addRapport&date=${date}&motif=${motif}&bilan=${bilan}&idVisiteur=${idVisiteur}&idMedecin=${idMedecin}`);
    }
}
