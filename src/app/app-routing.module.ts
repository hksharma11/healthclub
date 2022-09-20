import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { ContactusComponent } from './query/contactus/contactus.component';
import { ViewqueryComponent } from './query/viewquery/viewquery.component';
import { HomeComponent } from './welcome/home/home.component';

const routes: Routes = [

  
 {path:"home" , component:HomeComponent},
 {path:"create-appointment", component:CreateAppointmentComponent},
 {path:"view-appointment", component:ViewbookingComponent},
 {path:"contact-us", component:ContactusComponent},
 {path:"view-query",component:ViewqueryComponent},
 {path:"**",component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
