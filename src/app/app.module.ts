import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './welcome/home/home.component';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { ContactusComponent } from './query/contactus/contactus.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ViewqueryComponent } from './query/viewquery/viewquery.component';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateAppointmentComponent,
    ContactusComponent,
    ViewbookingComponent,
    FooterComponent,
    ViewqueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
