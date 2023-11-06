import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/.env/environment';
import { Cars, CarsAll } from 'src/app/model/cars/cars';
import { HomeService } from '../home/home.service';

@Injectable({
    providedIn: 'root'
})
export class CarsService {
   private _url = environment.baseUrl;
   private id:number = 0;
   dateTwo:any;

constructor(private _http:HttpClient, private homeService: HomeService) { }

public getAllCars():Observable<CarsAll[]>{
    return this._http.get<CarsAll[]>(this._url + "car")
}

public addCars(cars:any):Observable<Cars>{
    return this._http.post<Cars>(this._url + "car",cars)
}

public findById(id:number):Observable<CarsAll>{
    return this._http.get<CarsAll>(this._url + "car/" + id)
}

public updateCars(id:string,cars:any):Observable<Cars>{
    return this._http.put<Cars>(this._url + "car/" + id,cars)
}

public setId(id:number){
    this.id = id;
}

public getId():number{
    return this.id;
}

public deleteCar(id:string):Observable<Cars>{
  return this._http.delete<Cars>(this._url + "car/" + id)
}

public getAvailableCar(data: any):Observable<Cars[]>{
return this._http.post<Cars[]>(this._url + "car/available", data)
}
public getCarsTwoDate():Observable<CarsAll[]>{
       this.dateTwo =  this.homeService.getDates();
       return this._http.post<CarsAll[]>(this._url + "car/available", this.dateTwo);
}

}
