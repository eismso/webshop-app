import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

    constructor(private productService: ProductService) { }

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

    select(product: Product): void {
        this.selectedProduct = product;
    }
}