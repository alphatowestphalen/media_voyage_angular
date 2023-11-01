import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/.env/environment';
import { Client } from 'src/app/model/client.model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _url = environment.baseUrl;
constructor(private _http:HttpClient) { }

public getAllClient():Observable<Client[]>{
  return this._http.get<Client[]>(this._url +"client")
}

}
