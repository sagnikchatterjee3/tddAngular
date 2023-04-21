 import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getHomes$: any;

  constructor() { 
    getHomes$() {
      //@todo add a real HTTP call to ge thomes.
      return of([]);
    }
  }
}
