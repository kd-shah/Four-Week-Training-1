import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent {
  // @Input() date : Date  = new Date(); 
  
  @Input() item = '';
  constructor(){}
  // datepipe: DatePipe = new DatePipe('en-US');
  // formattedDate = this.datepipe.transform('dd-MMM-YYYY HH:mm:ss')
}
