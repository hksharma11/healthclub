import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    QueryRoutingModule
  ]
})
export class QueryModule { }
