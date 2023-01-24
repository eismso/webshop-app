import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {}

   find(name: string): Observable<User[]> {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('name', name)

    return this.http.get<User[]>(this.url, { headers, params });
  }

  getUser(): Observable<User[]>{
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<User[]>(this.url, {headers});

  }

}

