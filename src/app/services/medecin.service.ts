import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Medecin } from "../models/medecin.model";

@Injectable({
    providedIn:'root'
})

export class MedecinServices {
    medecins!:Medecin[];

    constructor(private http:HttpClient) { }

    getAllMedecin():Observable<Medecin[]>{
        return this.http.get<Medecin[]>('http://172.20.120.31/gsb/gsbapi/?noms');
      }
     
    getMedecinById(id: number):Observable<Medecin[]> {
        return this.http.get<Medecin []>(`http://172.20.120.31/gsb/gsbapi/?id=${id}`);
      }
}
