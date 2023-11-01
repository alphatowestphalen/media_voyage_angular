import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/.env/environment';
import { User } from 'src/app/model/user.model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = environment.baseUrl;

constructor(private _http: HttpClient) { }

public getUserAll(): Observable<User[]> {
  return this._http.get<User[]>(this._url + 'users')
}

}
