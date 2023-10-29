import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/.env/environment';
import { Cars } from 'src/app/model/cars/cars';

@Injectable({
    providedIn: 'root'
})
export class CarsService {
   private _url = environment.baseUrl;

constructor(private _http:HttpClient) { }

public getAllCars():Observable<Cars[]>{
    return this._http.get<Cars[]>(this._url + "car")
}

public addCars(cars:Cars):Observable<Cars>{
    return this._http.post<Cars>(this._url + "car",cars)
}

public findById(id:string):Observable<Cars>{
    return this._http.get<Cars>(this._url + "car/" + id)
}

public updateCars(id:string,cars:Cars):Observable<Cars>{
    return this._http.put<Cars>(this._url + "car/" + id,cars)
}

}
