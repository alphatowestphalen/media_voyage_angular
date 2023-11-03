import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/.env/environment';
import { Cars } from 'src/app/model/cars/cars';
import { CarsData } from 'src/app/model/chart/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private _url = environment.baseUrl;
  constructor(private _http : HttpClient) { }

  public getAllCar():Observable<CarsData[]>{
    return this._http.get<CarsData[]>(this._url + "chart")
  }

}
