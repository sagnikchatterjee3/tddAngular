import { Component,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit{
  homes$: Observable<{ title: string; image: string; location: string; }[]>;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.homes$ = this.dataService.getHomes$() ;
    
  }
}
