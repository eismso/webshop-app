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

    title = '';
    vendor = '';
    products: Array<Product> = [];
    selectedProduct: Product | undefined;
    message: string;

    constructor(private productService: ProductService, private http:HttpClient) { }

    ngOnInit(): void { }

    search(): void {
        this.productService
            .find(this.title, this.vendor)
            .subscribe({
                next: (products) => {
                    this.products = products;
                },
                error: (errResp) => {
                    console.error('Error loading products', errResp);
            }
        });
    }

    save(): void {

        if (!this.selectedProduct) return;
    
        const url = "http://localhost:3000/products";
    
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
    
        this.http
            .post<Product>(url, this.selectedProduct, { headers })
            .subscribe({
                next: (flight) => {
                    this.selectedProduct = flight;
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

    select(product: Product): void {
        this.selectedProduct = product;
    }
}