import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Offrir } from "../models/offrir.model";

@Injectable({
    providedIn:'root'
})

export class Offrirservice {
    offrir!:Offrir[];

    constructor(private http: HttpClient) { }

    // getOffrirByIdRapport(idRapport: number): Observable<Offrir[]> {
    //     return this.http.get<Offrir[]>(`http://172.20.120.31/gsb/gsbapi/?idOffrir=${idRapport}`);
    // }
}