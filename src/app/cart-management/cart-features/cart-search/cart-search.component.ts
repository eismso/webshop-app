import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/entities/cart';
import { CartService } from '../../cart-data-access/cart.service';
import { CartEditComponent } from '../cart-edit/cart-edit.component';

@Component({
  selector: 'app-cart-search',
  templateUrl: './cart-search.component.html',
  styleUrls: ['./cart-search.component.css']
})
export class CartSearchComponent implements OnInit{
  id = 0;
  carts: Array<Cart> = [];
  selectedCart: Cart | null = null;
  message = '';

  @Input() item: Cart | null = null;
  @Input() selected: boolean = false;

  constructor(private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.cartService.getCart().subscribe({
      next: (carts) => {
          this.carts = carts;
      },
      error: (err) => {
          console.debug('Error', err);
      }
    });
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
    this.selected = true;
  }

  deselect() {
    this.selected = false;
}

  createCart() {
  }

}
