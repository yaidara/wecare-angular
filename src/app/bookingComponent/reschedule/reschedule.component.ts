import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../../models/booking';
import { Login } from '../../models/login';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {
  isvalid!:boolean;
 // resp:any;
id!:any;
submit=false;
userId:any;
booking:Booking=new Booking();
login:Login=new Login();
  constructor(private userservice:UserserviceService,private avtivedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  
  }
  reschedule(){
    this.id=this.avtivedRoute.snapshot.params['id'];
    this.userId=this.avtivedRoute.snapshot.params['id'];
    this.userservice.rescheduleAppointment(this.booking,this.id).subscribe( 
      resp =>this.Message(resp))
      
    
  }
  Message( resp:any){
    if(resp==true){
     
              this.isvalid=true;
              console.log(resp);
             // this.router.navigate(['/myappointment',uid]);   
          }else{
            this.isvalid=false;
            console.log(resp);
            
        console.log(resp.message);
        
        // this.route.navigate(['/loginuser']);
          }
         
      }
      onSubmit(){
        this.submit=true;
      // console.log(this.booking);
        
       this.reschedule();
      }
      goBack(){
         this.id=this.avtivedRoute.snapshot.params['id'];
        this.userId=this.avtivedRoute.snapshot.params['id'];
       this.router.navigate(['/users',this.userId]);
   
  }
}
