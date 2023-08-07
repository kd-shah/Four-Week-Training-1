import { Injectable } from '@angular/core';
import { ParentService } from '../Services/parent.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService extends ParentService{
  override getMessage(): string {
    return 'Hello from Child Service (Overridden)';
  }
  
}
