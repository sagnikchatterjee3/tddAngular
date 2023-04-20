import { Component,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit{
  homes$: Observable<{ title: string; image: string; location: string; }[]>;

  constructor(){}

  ngOnInit(){
    //this.homes$ = this.dataService.getHomes$() ;
    this.homes$ = of([
      {
        title: 'Home 1',
        image: 'assets/listing.jpg',
        location: 'new york'
      },
      {
        title:'Home 2',
        image:'assets/listing.jpg',
        location: 'boston'
      },
      {
        title: 'Home 3',
        image: 'assets/listing.jpg',
        location: 'chicago'
      }
    ]);
  }
}
