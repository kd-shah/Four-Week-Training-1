import { Component } from '@angular/core';
import { ParentService } from '../Services/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message: string;

  constructor(private parentService: ParentService) {
    this.message = this.parentService.getMessage();
  }
}
