import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    array = ["abc" , "pqr", "xyz"];

    removeString(index: number){
      this.array.splice(index, 1);
    }
}
