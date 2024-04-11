import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Medicament } from "../models/medicament.model";

@Injectable({
    providedIn:'root'
})

export class MedicamentServices {
    constructor(private http:HttpClient) { }

    getAllMedicament():Observable<Medicament[]>{
        return this.http.get<Medicament[]>('http://172.20.120.31/gsb/gsbapi/?nomMed');
    }

    getMedicamentById(id: string):Observable<Medicament[]>{
       return this.http.get<Medicament[]>(`http://172.20.120.31/gsb/gsbapi/?nomMed=${id}`);
    }
}
