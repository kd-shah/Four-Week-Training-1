import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  url = "https://jsonplaceholder.typicode.com/todos/"
  constructor(private http: HttpClient) { }
    todos(){
      return this.http.get(this.url);
    }
    saveTodos(data:any){
      return this.http.post(this.url, data)
    }
  
}
