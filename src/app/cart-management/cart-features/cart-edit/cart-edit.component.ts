import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../../cart-data-access/cart.service';
import { Cart } from 'src/app/entities/cart';
import { CartSearchComponent } from '../cart-search/cart-search.component';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.css']
})
export class CartEditComponent implements OnInit{

  editForm = this.fb.nonNullable.group({
    id: [0],
    items: [''],
    totalPrice: [0],
    user: [0],
  }, {updateOn: 'change'});

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit() {
    this.editForm.valueChanges.subscribe(
      console.log);

      this.route.paramMap.subscribe(
        params => this.editForm.patchValue({
          id: +(params.get('id') || 0)
        })
      )
  } 
  

  save(form: NgForm) {
    const value = form.value;
    const newCart = new Cart(value.id, value.items, value.totalPrice, value.user);
    this.cartService.addCart(newCart);
  }
}
