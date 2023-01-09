import { Component, OnInit } from '@angular/core';
import { Coach } from '../../models/coach';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createcoach',
  templateUrl: './createcoach.component.html',
  styleUrls: ['./createcoach.component.css']
})
export class CreatecoachComponent implements OnInit {

  submit=false;
  coach:Coach= new Coach();
  constructor(private userService: UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  resp:any;
  MessageCoachCreate(error:any){
    this.resp=error.error.text;
  }

  saveCoach(){
    this.userService.createCoach(this.coach).subscribe( 
      data =>{
      console.log(data);
      // this.showIdOfNewUser();
    },
  error =>{
    this.MessageCoachCreate(error);
  })
  }

  login(){
    this.router.navigate(["/logincoach"])
  }
  onSubmit(){
    this.submit=true;
    console.log(this.coach);
    this.saveCoach();
    
  }
}
