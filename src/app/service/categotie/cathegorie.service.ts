import { Injectable } from '@angular/core';
import { environment } from '../../../.env/environment';
import { HttpClient } from '@angular/common/http';
import { Cathegorie, CathegorieAdd } from 'src/app/model/cathegorie/cathegorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CathegorieService {
private url = environment.baseUrl;
constructor(private http:HttpClient) { }

public getCathegorie():Observable<Cathegorie[]>{
  return this.http.get<Cathegorie[]>(this.url + 'category');
}

public saveCathegorie(cathegorie:CathegorieAdd):Observable<CathegorieAdd>{
  return this.http.post<CathegorieAdd>(this.url + 'category',cathegorie);
}

public findById(id:string):Observable<Cathegorie>{
  return this.http.get<Cathegorie>(this.url + 'category/' + id);
}

public updateCathegorie(id:string,cathegorieData:CathegorieAdd):Observable<CathegorieAdd>{
  return this.http.put<CathegorieAdd>(this.url + 'category/' + id, cathegorieData);
}

public delateCathegorie(id:string):Observable<Cathegorie>{
  return this.http.delete<Cathegorie>(this.url + 'category/' + id);
}

}
