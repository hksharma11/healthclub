import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.scss']
})
export class ViewbookingComponent implements OnInit {
  url ="http://localhost:3000/appointments";
  constructor(public api:ApiService) { }
  appointments:any;
  ngOnInit(): void {
    this.api.get(this.url).subscribe(res=>{
      this.appointments =res;
    })
  }

  trackByIndex = (index:number):number =>{
    return index;
  }



}
