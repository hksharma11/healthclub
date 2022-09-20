import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewqueryComponent } from './viewquery/viewquery.component';


@NgModule({
  declarations: [
    ContactusComponent,
    ViewqueryComponent
  ],
  imports: [
    CommonModule,
    QueryRoutingModule
  ]
})
export class QueryModule { }
