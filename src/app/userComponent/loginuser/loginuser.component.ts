import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login';


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  isvalid!:boolean;
  login:Login=new Login();
  constructor(private userService:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    
  }
  loginBYUser(){
    this.userService.loginUser(this.login).subscribe(
      resp =>this.MessageUserNotFound(resp, this.login.id))
      
    }
  MessageUserNotFound( resp:any, id:any){
    if(resp==true){
     
              this.isvalid=true;
              console.log(resp);
              this.route.navigate(['/users',id]);
              
            
          }else{
            this.isvalid=false;
            console.log(resp);
            
        console.log(resp.message);
        
        // this.route.navigate(['/loginuser']);
          }
         
      }

  
  
  
  //       console.log(data);
  //       this.isvalid=false;
  //       this.route.navigate(['/users']);
  //     },
  //     error =>{
  //       this.isvalid=true;
  //        this.MessageUserNotFound(error);
  //       this.route.navigate(['/loginuser']);
  //     })
      
  // }

  // public loginBYUser(){
  //   if(this.resp==true){
  //     this.userService.loginUser(this.login).subscribe(
  //           data =>{
  //             console.log(data);
  //             this.isvalid=false;
  //             this.route.navigate(['/users']);
  //           })
  //         }else{
  //           this.isvalid=true;
  //        this.MessageUserNotFound(this.resp);
  //       this.route.navigate(['/loginuser']);
  //         }
  // }

//  resp:any
  
}
