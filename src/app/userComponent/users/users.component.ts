import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';
import { User } from '../../models/user';
import { Coach } from '../../models/coach';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  coachs!:Coach[];
  userId!:any;
  cid!:any;
  coach: Coach= new Coach();
  //coachId=this.coach.coachId;
  
  constructor(private userService:UserserviceService,private avtivedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAllCoach();
    // this.userprof()


  }

  getAllCoach(){
    this.userService.coachList().subscribe(data=>{
      this.coachs=data;
    })
  }

  userprof(){
    this.userId=this.avtivedRoute.snapshot.params['id'];
    this.router.navigate(['/userprofil',this.userId]);
  }
  myAppointment(){
    this.userId=this.avtivedRoute.snapshot.params['id'];
    this.router.navigate(['/myappointment',this.userId]);
  }
  usersId= this.avtivedRoute.snapshot.params['id'];

  gotoAppointment(cid:any){
    this.userId=this.avtivedRoute.snapshot.params['id'];
    this.cid=this.avtivedRoute.snapshot.params['cid'];
    this.router.navigate(['/appointment',this.userId,'/booking',this.cid]);
  }
coachId=this.avtivedRoute.snapshot.params['cid'];
  
}
