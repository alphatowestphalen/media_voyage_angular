import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/.env/environment';
import { Cars } from 'src/app/model/cars/cars';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = environment.baseUrl;

constructor(private http:HttpClient) { }

getVoiture(): Observable<Cars[]>{
  return this.http.get<Cars[]>(this.url + 'voiture');
}

}
