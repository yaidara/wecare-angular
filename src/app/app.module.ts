import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './userComponent/users/users.component';
import { CoachsComponent } from './coachComponent/coachs/coachs.component';
import { BookingsComponent } from './bookingComponent/bookings/bookings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { FooterComponent } from './footer/footer.component';
import { CreateuserComponent } from './userComponent/createuser/createuser.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';
import { LoginuserComponent } from './userComponent/loginuser/loginuser.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { UserprofilComponent } from './userComponent/userprofil/userprofil.component';
import { MyappointmentComponent } from './bookingComponent/myappointment/myappointment.component';
import { RescheduleComponent } from './bookingComponent/reschedule/reschedule.component';
import { LogincoachComponent } from './coachComponent/logincoach/logincoach.component';
import { CreatecoachComponent } from './coachComponent/createcoach/createcoach.component';
import { CoachprofilComponent } from './coachComponent/coachprofil/coachprofil.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CoachsComponent,
    BookingsComponent,
    HomePageComponent,
    NavBar1Component,
    FooterComponent,
    CreateuserComponent,
    LoginuserComponent,
    NavBar2Component,
    UserprofilComponent,
    MyappointmentComponent,
    RescheduleComponent,
    LogincoachComponent,
    CreatecoachComponent,
    CoachprofilComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
