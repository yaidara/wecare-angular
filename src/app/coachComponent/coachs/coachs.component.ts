import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../../service/userservice.service';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-coachs',
  templateUrl: './coachs.component.html',
  styleUrls: ['./coachs.component.css']
})
export class CoachsComponent implements OnInit {
  id!:any;
  bookings!:any[];
  booking:Booking= new Booking();
  constructor(private userservice:UserserviceService,private avtivedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.mySchedule()
   
   
  }
  mySchedule(){
    this.id=this.avtivedRoute.snapshot.params['id'];
   this.userservice.showMySchedule(this.id).subscribe(data=>{
     this.bookings=data;
     //console.log(data)
    })
   }
  coachId=this.avtivedRoute.snapshot.params['id'];

}
