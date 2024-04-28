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
     
    getRapportByIdMedecin(id: number): Observable<Rapport[]> {
        return this.http.get<Rapport[]>(`http://172.20.120.31/gsb/gsbapi/?idMedecin=${id}`);
    }

    getRapportById(id: number): Observable<Rapport[]> {
        return this.http.get<Rapport[]>(`http://172.20.120.31/gsb/gsbapi/?id6=${id}`);
    }
    
    
    insertRapportById(date: string, motif: string, bilan: string, idVisiteur: string, idMedecin: string): Observable<any> {
        const url = `http://172.20.120.31/gsb/gsbapi/?addRapport&date=${date}&motif=${motif}&bilan=${bilan}&idVisiteur=${idVisiteur}&idMedecin=${idMedecin}`;
        return this.http.get<any>(url);
    }

    deleteRapportById(id:string): Observable<any> {
        const url = `http://172.20.120.31/gsb/gsbapi/?suppRapport&id=${id}`;
        return this.http.get<any>(url);
    }
    
    
}
