import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  submit=false;
  user:User= new User();
  constructor(private userService: UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  resp:any;
  MessageUserCreate(error:any){
    this.resp=error.error.text;
    
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe( 
      data =>{
      console.log(data);
      // this.showIdOfNewUser();
    },
  error =>{
    this.MessageUserCreate(error);
  })
  }

  login(){
    this.router.navigate(["/loginuser"])
  }
  onSubmit(){
    this.submit=true;
    console.log(this.user);
    this.saveUser();
    
  }
}
