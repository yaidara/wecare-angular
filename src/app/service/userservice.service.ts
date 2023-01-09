import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Login } from '../models/login';
import { Coach } from '../models/coach';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl="http://localhost:8080/wecare"

  constructor(private http:HttpClient) { }

  public createUser(user:User): Observable<Object>{
    return this.http.post(`${this.baseUrl}/users`,user);

  }

  public createCoach(coach:Coach): Observable<Object>{
    return this.http.post(`${this.baseUrl}/coachs`,coach);

  }

  public loginUser(login:Login): Observable<Object>{
    return this.http.post(`${this.baseUrl}/users/login`,login)
  }

  public loginCoach(login:Login): Observable<Object>{
    return this.http.post(`${this.baseUrl}/coachs/login`,login)
  }

  public userList():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/usrers/all`)
  }

  public coachList(): Observable<Coach[]>{
    return this.http.get<Coach[]>(`${this.baseUrl}/coachs/all`)
  }

  public userProfil(userId:string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`)
  }

  public coachProfil(coachId:string): Observable<Coach>{
    return this.http.get<Coach>(`${this.baseUrl}/coachs/${coachId}`)
  }

  public showMyAppointment(userId:any){
    return this.http.get<Booking[]>(`${this.baseUrl}/users/booking/${userId}`)
  }

  public showMySchedule(coachId:any){
    return this.http.get<Booking[]>(`${this.baseUrl}/coachs/booking/${coachId}`)
  }

  // public bookAppointment(booking:Booking): Observable<Object>{
  //   return this.http.post(`${this.baseUrl}/users/${booking.userId}/booking/${booking.coachId}`,booking);
  // }
  public bookAppointment(booking:Booking,userId:any, coachId:any): Observable<Object>{
    let param=new HttpParams();
         param=param.set('slot',booking.slot);
         param=param.set('appointmentDate',booking.appointmentDate);
    return this.http.post(`${this.baseUrl}/users/${userId}/booking/${coachId}`,param);
  }

  public cancelAppointment(bookingId:any) :Observable<Booking>{
   return this.http.delete<Booking>(`${this.baseUrl}/booking/${bookingId}`)
  }

  public rescheduleAppointment(booking:Booking,bookingId:any): Observable<Object>{
    let param=new HttpParams();
         param=param.set('slot',booking.slot);
         param=param.set('appointmentDate',booking.appointmentDate);
    return this.http.put(`${this.baseUrl}/booking/${bookingId}`,param);
  }
}
