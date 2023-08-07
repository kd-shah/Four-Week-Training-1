import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/Services/add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: AddToCartService  ) {
    this.cartItems = this.cartService.getCartItems();
  }

}
