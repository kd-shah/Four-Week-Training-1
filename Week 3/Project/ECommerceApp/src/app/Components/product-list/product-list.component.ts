import { Component } from '@angular/core';
import { ProductListDataService } from 'src/app/Services/product-list-data.service';
import { AddToCartService } from 'src/app/Services/add-to-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any;
  constructor(private productData: ProductListDataService, private cartService: AddToCartService) {
    this.productData.products().subscribe((data) => {
      console.log("data", data);
      this.products = data;
    })
  }
  addToCart(product: any) {
    console.log(product)
    this.cartService.addToCart(product);
  }


}
