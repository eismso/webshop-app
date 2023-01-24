import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartEditComponent } from "./cart-features/cart-edit/cart-edit.component";
import { CartSearchComponent } from "./cart-features/cart-search/cart-search.component";

export const CART_MANAGEMENT_ROUTES: Routes = [
      {
          path: '',
          redirectTo: 'search',
          pathMatch: 'full'
      },
      {
          path:'search',
          component: CartSearchComponent
      },
      {
          path:'new',
          component: CartEditComponent
      },
      {
          path:':id/edit',
          component: CartEditComponent
      }
];

  @NgModule({
    imports: [RouterModule.forChild(CART_MANAGEMENT_ROUTES)],
    exports: [RouterModule]
  })
  export class CartManagementRoutingModule { }