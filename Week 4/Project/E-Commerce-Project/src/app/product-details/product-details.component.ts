import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  // productId!: number;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const productId = Number(params.get('id'))
      // this.productId = Number(params.get('id'));
      // console.log('Product ID:', this.productId);
      this.getProductDetails(productId);
    });
  }
  getProductDetails(productId: number): void{
    this.productService.getProductById(productId).subscribe(product=>{
      this.product = product;
      // console.log('Product Details:', this.product);
    })
  }
  addToCart(product: Product): void{
    this.cartService.addToCart(product)
  }
 
}
