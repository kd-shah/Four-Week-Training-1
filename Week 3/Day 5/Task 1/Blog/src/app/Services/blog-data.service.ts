import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  url = "https://jsonplaceholder.typicode.com/posts/"
  constructor(private http: HttpClient) { }
  blogs() {
    return this.http.get(this.url);
  }

}
