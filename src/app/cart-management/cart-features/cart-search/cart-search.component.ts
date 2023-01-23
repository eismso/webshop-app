import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Cart } from 'src/app/entities/cart';
import { CartService } from '../../cart-data-access/cart.service';

@Component({
  selector: 'app-cart-search',
  templateUrl: './cart-search.component.html',
  styleUrls: ['./cart-search.component.css']
})
export class CartSearchComponent {
  id = "";
  carts: Array<Cart> = [];
  selectedCart: Cart | null = null;


  constructor(private cartService: CartService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  search(): void {

    this.cartService.find(this.id).subscribe({
      next: (carts) => {
          this.carts = carts;
      },
      error: (err) => {
          console.debug('Error', err);
      }
    });
  }

  select(c:Cart): void {
    this.selectedCart = c;
  }

}
