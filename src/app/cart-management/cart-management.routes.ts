import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartSearchComponent } from "./cart-features/cart-search/cart-search.component";

export const CART_MANAGEMENT_ROUTES: Routes = [
    {
      path: '',
      children: [
        {
            path: '',
            redirectTo: 'cart-search',
            pathMatch: 'full'
        },
        {
            path:'cart-search',
            component: CartSearchComponent
        },
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(CART_MANAGEMENT_ROUTES)],
    exports: [RouterModule]
  })
  export class FlightBookingRoutingModule { }