import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: Product[]= []
  totalCartPrice=0;

  constructor(private cartService: CartService){}
  ngOnInit(): void {
    this.updateCart();
  }
  updateCart(){
    this.cartItems = this.cartService.getCartitems();
    this.totalCartPrice = this.cartService.getTotalPrice();
  }
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.updateCart();
  }
  adjustQuantity(productId: number, newQuantity: number): void {
    this.cartService.adjustQuantity(productId, newQuantity);
    this.updateCart();
  }



}
