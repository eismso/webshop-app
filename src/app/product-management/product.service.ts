import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Product[]> {
    const url = "http://localhost:3000/user";

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('accept', 'application/json');

    return this.http
      .get<Product[]>(url, { params, headers })
  }
}