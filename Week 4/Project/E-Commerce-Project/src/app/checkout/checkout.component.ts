import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  shippingDetails ={
    name: '',
    address: '',
    email: '',
    city: '',
    country: ''

  }
  constructor(private cartService: CartService, private router: Router){}
  ngOnInit(): void{}
  placeOrder(): void{
    this.cartService.setShippingDetails(this.shippingDetails);
    const cartItems: Product[] = this.cartService.getCartitems();
    const totalPrice: number = this.cartService.getTotalPrice();
    this.router.navigate(['/order-confirmation'], {
      queryParams: {
        orderNumber: '123456',
      }
    });
  }
}
