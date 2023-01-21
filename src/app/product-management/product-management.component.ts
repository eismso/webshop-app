import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';

@Component({
    selector: 'app-product-management',
    templateUrl: './product-management.component.html'
})
export class ProductManagementComponent implements OnInit {

    title = '';
    vendor = '';
    products: Array<Product> = [];
    selectedProduct: Product | undefined;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void { }

    search(): void {
        const url = "http://localhost:3000/user";

        const headers = new HttpHeaders()
            .set('Accept', 'application/json');

        const params = new HttpParams()
            .set('title', this.title)
            .set('vendor', this.vendor);

        this.http
            .get<Product[]>(url, {headers, params})
            .subscribe({
                next: (products: Product[]) => {
                    this.products = products;
                },
                error: (errResp) => {
                    console.error('Error loading products', errResp);
                }
            });
    }

    select(f: Product): void {
        this.selectedProduct = f;
    }
}