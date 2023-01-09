import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserserviceService } from '../../service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from '../../models/coach';

@Component({
  selector: 'app-userprofil',
  templateUrl: './userprofil.component.html',
  styleUrls: ['./userprofil.component.css']
})
export class UserprofilComponent implements OnInit {

  coachs!:Coach[];
  id!:string;
  user: User= new User();
  constructor(private userservice:UserserviceService,private avtivedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   

     this.id=this.avtivedRoute.snapshot.params['id'];

    this.userservice.userProfil(this.id).subscribe(data=>{
      this.user=data;
      console.log(data);
    })
   
  }
 
  goBack(){
    this.id=this.avtivedRoute.snapshot.params['id'];
      this.router.navigate(['/users',this.id]);
   
  }
   userId=this.avtivedRoute.snapshot.params['id'];

   appointment(){
    this.router.navigate(['/appoinrment',this.userId]);
   }
}