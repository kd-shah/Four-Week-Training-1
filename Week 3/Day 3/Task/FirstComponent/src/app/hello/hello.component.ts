import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name: string = "Kunal";
  color = 'Pink';

  todayDate: Date = new Date();

  // tdate: DatePipe  = new DatePipe('en-US');
  // todayDate = this.tdate.transform('dd-MMM-YYYY HH:mm:ss')

  x: string = 'Angular';

  changeRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16747215).toString(16);
    this.color = randomColor
  }

}
