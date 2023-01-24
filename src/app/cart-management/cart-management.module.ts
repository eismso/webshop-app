import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartEditComponent } from './cart-features/cart-edit/cart-edit.component';
import { CartSearchComponent } from './cart-features/cart-search/cart-search.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CART_MANAGEMENT_ROUTES } from './cart-management.routes';
import { CartCardComponent } from './cart-ui/cart-card/cart-card.component';



@NgModule({
  declarations: [
    CartEditComponent,
    CartSearchComponent,
    CartCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CART_MANAGEMENT_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartManagementModule { }
