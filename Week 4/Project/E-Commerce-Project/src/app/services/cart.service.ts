import { Injectable } from '@angular/core';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartitems: Product[] = [];
  private shippingDetails: any ={};
  addToCart(product: Product){
    this.cartitems.push(product);
  }
  removeFromCart(productId: number): void {
    this.cartitems = this.cartitems.filter(item => item.id !== productId);
  }
  adjustQuantity(productId: number, newQuantity: number):void{
    const itemIndex = this.cartitems.findIndex(item=>item.id===productId);
    if(itemIndex !== -1){
      this.cartitems[itemIndex].quantity = newQuantity
    }
  }
  getCartitems(){
    return this.cartitems;
  }
  getTotalPrice(){
    return this.cartitems.reduce((total, item)=>total + item.price * item.quantity, 0);
  }
  setShippingDetails(details: any): void {
    this.shippingDetails = details;
  }

  getShippingDetails(): any {
    return this.shippingDetails;
  }

  constructor() { }
}
