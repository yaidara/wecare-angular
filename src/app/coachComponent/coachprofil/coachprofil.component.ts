import { Component, OnInit } from '@angular/core';
import { Coach } from '../../models/coach';
import { UserserviceService } from '../../service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coachprofil',
  templateUrl: './coachprofil.component.html',
  styleUrls: ['./coachprofil.component.css']
})
export class CoachprofilComponent implements OnInit {
  id!:any;
coach:Coach=new Coach();
  constructor(private userservice:UserserviceService,private avtivedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.avtivedRoute.snapshot.params['id'];

    this.userservice.coachProfil(this.id).subscribe(data=>{
      this.coach=data;
      console.log(data);
    })

  }

 
   coachId=this.avtivedRoute.snapshot.params['id'];

   appointment(){
    this.router.navigate(['/coachs',this.coachId]);
   }
 
}
