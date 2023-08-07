import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  getMessage(): string {
    return 'Hello from Parent Service';
  }
}
