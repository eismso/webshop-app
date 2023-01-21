import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-management',
    templateUrl: './product-management.component.html'
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
            .subscribe(
                products => this.products = this.products
            );
    }

    select(product: Product): void {
        this.selectedProduct = product;
    }
}