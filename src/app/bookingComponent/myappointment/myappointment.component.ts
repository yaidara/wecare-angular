import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-myappointment',
  templateUrl: './myappointment.component.html',
  styleUrls: ['./myappointment.component.css']
})
export class MyappointmentComponent implements OnInit {

id!:string;

  bookings!:any[];
  booking:Booking= new Booking();
  constructor(private userservice:UserserviceService,private avtivedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
this.myAppointment();
   
  }
  myAppointment(){
    this.id=this.avtivedRoute.snapshot.params['id'];
    this.userservice.showMyAppointment(this.id).subscribe(response=>{
        //  this.bookings=data;
         this.bookings=response;
       // console.log(this.bookings)
})
  }
  userId=this.avtivedRoute.snapshot.params['id'];

  cancel(id :number){
    const msg=confirm('are you sure !');
   
     if(msg){
      this.userservice.cancelAppointment(id).subscribe(data=>{
      window.location.reload();
      console.log(data);
     },
     error=>{
       console.log(error);
       
      })
  }
     }
     
     reschedule(id:any){
      this.id=this.avtivedRoute.snapshot.params['id'];
      this.userId=this.avtivedRoute.snapshot.params['id'];
         this.id=this.avtivedRoute.snapshot.params['id'];
         this.router.navigate(['/reschedule',id,this.userId]);
       
     }
}
  