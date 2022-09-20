import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.scss']
})
export class ViewqueryComponent implements OnInit {
  url ="http://localhost:3000/queries";
  constructor(private api:ApiService) { }
  queries:any;
  ngOnInit(): void {
    this.api.get(this.url).subscribe(res=>{
      this.queries=res;
      console.log(this.queries)
    })
  }

  trackByIndex = (index:number):number =>{
    return index;
  }

}
