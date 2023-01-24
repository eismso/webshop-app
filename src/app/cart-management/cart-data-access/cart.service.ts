import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/entities/cart';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  })

export class CartService {

  url = 'http://localhost:3000/carts';

  constructor(private http:HttpClient) { }
  
  find(id: number): Observable<Cart[]>{

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('id', id);

    return this.http.get<Cart[]>(this.url, {headers, params});

  }

  getCart(): Observable<Cart[]>{
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Cart[]>(this.url, {headers});
    
  }

  addCart(newCart: Cart): Observable<Cart> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post<Cart>(this.url, newCart, { headers });
  }

  updateCart(cart: Cart): Observable<Cart> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.put<Cart>(this.url +"/" + cart.id, {headers})
  }

  deleteCart(cart: Cart): Observable<Cart> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.delete<Cart>(this.url + "/" + cart.id, {headers});

  }


}
