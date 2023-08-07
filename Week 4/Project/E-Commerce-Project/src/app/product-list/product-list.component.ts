import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
  export class ProductListComponent implements OnInit{
    products!: Product[];
    filteredProducts!: Product[];
    search!: string;
    data: any;

    constructor(private productService: ProductsService, private route: ActivatedRoute) {}

      ngOnInit(): void {
        this.productService.getProducts().subscribe((products: Product[])=>{
          this.products = products;
          this.filteredProducts = this.products;
          this.data = this.route.snapshot.data['data'];
        });
      }
      filterProducts(){
        if(this.search){
          this.filteredProducts = this.products.filter(
            product => product.title.toLowerCase().includes(this.search.toLowerCase())
          );
        }else{
      this.filteredProducts = this.products
        }
        }
      }

 
