import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './userComponent/createuser/createuser.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginuserComponent } from './userComponent/loginuser/loginuser.component';
import { UsersComponent } from './userComponent/users/users.component';
import { UserprofilComponent } from './userComponent/userprofil/userprofil.component';
import { BookingsComponent } from './bookingComponent/bookings/bookings.component';
import { MyappointmentComponent } from './bookingComponent/myappointment/myappointment.component';
import { RescheduleComponent } from './bookingComponent/reschedule/reschedule.component';
import { CreatecoachComponent } from './coachComponent/createcoach/createcoach.component';
import { LogincoachComponent } from './coachComponent/logincoach/logincoach.component';
import { CoachsComponent } from './coachComponent/coachs/coachs.component';
import { CoachprofilComponent } from './coachComponent/coachprofil/coachprofil.component';


const routes: Routes = [
  {path:'createuser', component:CreateuserComponent},
  {path:'createcoach', component:CreatecoachComponent},
  {path:'home', component:HomePageComponent},
  {path:'loginuser',component:LoginuserComponent},
  {path:'logincoach',component:LogincoachComponent},
  {path:'users/:id',component:UsersComponent},
  {path:'coachs/:id',component:CoachsComponent},
  {path:'userprofil/:id',component:UserprofilComponent},
  {path:'coachprofil/:id',component:CoachprofilComponent},
  {path:'reschedule/:id/:id',component:RescheduleComponent},
  {path:'myappointment/:id',component:MyappointmentComponent},
  {path:'appointment/:id/booking/:cid',component:BookingsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
