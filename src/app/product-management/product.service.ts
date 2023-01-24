import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entities/product';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  })

export class ProductService {

  url = 'http://localhost:3000/products';

  constructor(private http:HttpClient) { }
  
  find(title: string): Observable<Product[]>{

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('title', title);

    return this.http.get<Product[]>(this.url, {headers, params});

  }

  getProduct(): Observable<Product[]>{
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Product[]>(this.url, {headers});

  }
}