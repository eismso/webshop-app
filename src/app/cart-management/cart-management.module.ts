import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartEditComponent } from './cart-features/cart-edit/cart-edit.component';
import { CartSearchComponent } from './cart-features/cart-search/cart-search.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CART_MANAGEMENT_ROUTES } from './cart-management.routes';



@NgModule({
  declarations: [
    CartEditComponent,
    CartSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CART_MANAGEMENT_ROUTES),
    FormsModule
  ]
})
export class CartManagementModule { }
