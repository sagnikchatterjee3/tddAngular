import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getHomes$() {
    //@todo add a real HTTP call to ge thomes.
   
    return this.httpClient.get<any>('foo/bar');
  }
}
