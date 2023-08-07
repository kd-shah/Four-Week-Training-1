import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  orderNumber = ''; // You can generate an order number or use a backend service to get it
  cartItems: Product[] = [];
  shippingDetails: any = {};
  totalPrice = 0;

  constructor(private cartService: CartService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.orderNumber = params['orderNumber'] || '';
    });
    // Retrieve the order details from the cart service
    this.cartItems = this.cartService.getCartitems();
    this.totalPrice = this.cartService.getTotalPrice();
    this.shippingDetails = this.cartService.getShippingDetails();
  }
}
