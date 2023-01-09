import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';

import { UserserviceService } from '../../service/userservice.service';
import { Coach } from '../../models/coach';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
 
  id!:any;
  cid!:any;
  coach: Coach= new Coach();
  submit=false;
  
  booking:Booking=new Booking(); 
  constructor(private userservice:UserserviceService,private avtivedRoute:ActivatedRoute,private router:Router) { }

  
  ngOnInit(): void {
  }

  resp:any;
  MessageUserCreate(error:any){
    this.resp=error.error.HttpErrorResponse;
    
  }

  getBookingAppointment(){
    this.id=this.avtivedRoute.snapshot.params['id'];
    this.cid=this.avtivedRoute.snapshot.params['cid'];
    this.userservice.bookAppointment(this.booking,this.id,this.cid).subscribe(data=>{
     console.log(data)
    })
  }

  onSubmit(){
    this.submit=true;
    console.log(this.booking);
    
    this.getBookingAppointment();
  }
  

  goBack(){
     this.id=this.avtivedRoute.snapshot.params['id'];
    // this.cid=this.avtivedRoute.snapshot.params['cid'];
    // this.router.navigate(['/appointment',this.id,'/booking',this.cid]);
    // this.submit=false;
    this.router.navigate(['/users',this.id]);
  }
userId=this.avtivedRoute.snapshot.params['id'];
coachId=this.avtivedRoute.snapshot.params['cid'];
  
}
