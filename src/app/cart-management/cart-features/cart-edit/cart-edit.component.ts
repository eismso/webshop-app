import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../../cart-data-access/cart.service';
import { Cart } from 'src/app/entities/cart';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.css']
})
export class CartEditComponent implements OnInit{
  id: number;
  editMode: boolean = false;
  cartForm: FormGroup;
  carts: Array<Cart> = [];
  cart: Cart = null;

  constructor(private cartService: CartService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    )
  }

  private initForm() {
    let totalSum = 0;

    if (this.editMode) {
      this.cartService.find(this.id).subscribe ({
          next: (carts) => {
          this.carts = carts;
      },
      error: (err) => {
          console.debug('Error', err);
      }
    });
      };
      this.cart = this.carts[1];
      //totalSum = this.cart.totalSum;

    this.cartForm = new FormGroup({
      'totalSum': new FormControl()
    });

  }

  /* editForm = this.fb.nonNullable.group({
    id: [0],
    items: [''],
    totalPrice: [0],
    user: [0],
  }, {updateOn: 'change'});

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.editForm.valueChanges.subscribe(
      console.log);

      this.route.paramMap.subscribe(
        params => this.editForm.patchValue({
          id: +(params.get('id') || 0)
        })
      )
  } */
  

  save(): void {
    /* console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched); */
  }
}
