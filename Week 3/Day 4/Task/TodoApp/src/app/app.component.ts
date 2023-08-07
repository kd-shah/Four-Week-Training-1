import { Component } from '@angular/core';
import { TodosService } from './Services/todo-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  todo: any;
  constructor(private todosData: TodosService) {
    
    this.todosData.todos().subscribe((data : any)=> 
    console.warn("data", data));
    // this.todos = data;
    // console.warn(this.todo)
  }

  getTodo(data:any){
   
    this.todosData.saveTodos(data).subscribe((result) => {
      console.log(result)
    })
  }
}
