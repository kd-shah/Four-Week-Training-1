import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() arrayStr : string[] = [];
  
  
  @Output() removeStr = new EventEmitter();
  elementRemove(index : number){
    // alert(index + " removed");
    this.removeStr.emit((index));
  }
}
