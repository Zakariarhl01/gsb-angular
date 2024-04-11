import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Visiteur } from "../models/visiteur.model";


@Injectable({
    providedIn:'root'
})

export class VisiteurService {
    visiteurs!:Visiteur[];

    constructor(private http:HttpClient) { }

    getAllVisiteur():Observable<Visiteur[]>{
        return this.http.get<Visiteur[]>('http://172.20.120.31/gsb/gsbapi/');
      }
}