import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { Product } from '../entities/product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-management',
    templateUrl: './product-management.component.html',
    styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

    message = '';
    title = '';
    products: Array<Product> = [];
    selectedProduct: Product | undefined;
    

    constructor(private productService: ProductService, private http:HttpClient) { }

    ngOnInit(): void { 

        this.productService.getProduct().subscribe({
            next: (products) => {
                this.products = products;
            },
            error: (err) => {
                console.debug('Error', err);
            }
          });
        }

    search(): void {
        const url = "http://localhost:3000/products";

        const headers = new HttpHeaders()
            .set('Accept', 'application/json');

        const params = new HttpParams()
            .set('title', this.title);

        this.http
            .get<Product[]>(url, {headers, params})
            .subscribe({
                next: (products) => {
                    this.products = products;
                },
                error: (err) => {
                    console.error('Error', err);
                }
            });
    }

    select(product: Product): void {
        this.selectedProduct = product;
    }

    save(): void {

        if (!this.selectedProduct) return;
    
        const url = "http://localhost:3000/products";
    
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
    
        this.http
            .post<Product>(url, this.selectedProduct, { headers })
            .subscribe({
                next: (product) => {
                    this.selectedProduct = product;
                    this.message = 'Produkt geändert!';
                },
                error: (errResponse) => {
                    this.message = 'Fehler beim Ändern des Produkts';
                    console.error(this.message, errResponse);
    
                }
            });
    }

    delete(): void {

        if (!this.selectedProduct) return;
    
        const url = "http://localhost:3000/products";
    
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
    
        this.http
            .delete<Product>(url)
            .subscribe((s) => {
                console.log(s);
              });
    }
  
  new(): void{};

}