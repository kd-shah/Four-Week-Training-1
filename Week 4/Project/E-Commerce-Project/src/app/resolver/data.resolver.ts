import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  constructor(private dataService: DataService){}
  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot)
          : Observable<any> | Promise<any> | any {
            return this.dataService.getData();
  }
}
