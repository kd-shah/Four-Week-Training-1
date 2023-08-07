import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  private cartItems: any[] = [];

  constructor() {}

  // Add a product to the cart
  addToCart(product: any): void {
    console.log(product)
    this.cartItems.push(product);
  }
  getCartItems(): any[] {
    console.log(this.cartItems)
    return this.cartItems;
  }
}
