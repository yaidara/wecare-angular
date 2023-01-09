import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincoach',
  templateUrl: './logincoach.component.html',
  styleUrls: ['./logincoach.component.css']
})
export class LogincoachComponent implements OnInit {
  isvalid!:boolean;
  login:Login=new Login();
  constructor(private userService:UserserviceService,private route:Router) { }

  ngOnInit(): void {
  }

  loginBYCoach(){
    this.userService.loginCoach(this.login).subscribe(
      resp =>this.MessageCoachNotFound(resp, this.login.id))
      
    }
  MessageCoachNotFound( resp:any, id:any){
    if(resp==true){
     
              this.isvalid=true;
              console.log(resp);
              this.route.navigate(['/coachs',id]);
              
            
          }else{
            this.isvalid=false;
            console.log(resp);
            
        console.log(resp.message);
        
        // this.route.navigate(['/loginuser']);
          }
         
      }

}
