import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/.env/environment';
import { Location, LocationGet } from 'src/app/model/location/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _url = environment.baseUrl;

constructor(private _http:HttpClient) { }

public getAllLocation():Observable<LocationGet[]>{
    return this._http.get<LocationGet[]>(this._url + "location")
}

public addLocation(location:Location):Observable<Location>{
  return this._http.post<Location>(this._url + "location", location);
}

public deleteLocation(id : number) : Observable<Location> {
  return this._http.delete<Location>(this._url + 'location/' + id)
}

public getById(id : number) : Observable<LocationGet> {
  return this._http.get<LocationGet>(this._url + 'location/' + id)
}
}
