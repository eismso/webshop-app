import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/entities/cart';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {

  @Input() item: Cart | null = null;
  @Input() selected: boolean = false;

  select() {
      this.selected = true;
  }

  deselect() {
      this.selected = false;
  }
}
