import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/entities/cart';
import { CartService } from '../../cart-data-access/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {

  carts: Array<Cart> = [];
  selectedCart: Cart | null = null;
  message ='';

  @Input() item: Cart | null = null;
  @Input() selected: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  select(c:Cart) {
      this.selected = true;
      this.selectedCart = c;
  }

  deselect() {
      this.selected = false;
  }

  edit() {
    
  }

  delete() {
    this.cartService.deleteCart(this.selectedCart).subscribe({
      next: (carts) => {
        this.message = 'Einkaufswagen gelöscht';
    },
    error: (err) => {
        console.debug('Error', err);
    }
    });
  }
}
