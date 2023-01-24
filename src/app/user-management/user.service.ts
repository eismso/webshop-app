import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
   }

   find(userId: number, name: string): Observable<User[]> {
    const url = 'http://localhost:3000/user';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('User-ID', userId)
      .set('User-Name', name);

    return this.http.get<User[]>(url, { headers, params });
  }

}
