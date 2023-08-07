import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   apiUrl = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }
  
  getProductById(id: number): Observable<Product> {
    console.log('Getting Product by ID:', id);
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
   
  }
}
export interface Product{
  id: number;
  title: string;
  price: number;
  image: any;
  description: string;
  quantity: number;
}
