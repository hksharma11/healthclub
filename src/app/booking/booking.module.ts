import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';


@NgModule({
  declarations: [
    ViewbookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
