import { Component } from '@angular/core';
import { ChildService } from '../Services/child.service';
import { ParentService } from '../Services/parent.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [
    { provide: ParentService, useClass: ChildService } // Override ParentService with ChildService
  ]
})
export class ChildComponent {
  message: string;

  constructor(private childService: ParentService) {
    this.message = this.childService.getMessage();
}
}
