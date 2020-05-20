import { Injectable } from '@angular/core';
import { Booking } from './Model/Booking';
import { Observable } from 'rxjs';
import { BookingResponse } from './Model/BookingResponse';
import { HttpClient } from '@angular/common/http';
import { BookingRequest } from './Model/BookingRequest';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private client:HttpClient ){
  
  }
  baseBookingUrl="http://localhost:8087/bookings";
  addBookings(booking : BookingRequest):Observable<BookingResponse>
  {
    let url = this.baseBookingUrl + "/add";
    let result:Observable<BookingResponse>=this.client.post<BookingResponse>(url,booking);
    return result;
    }

 fetchAllBookings():Observable<Booking[]>
 {
  let url = this.baseBookingUrl+"/view/";
  let result:Observable<Booking[]>=this.client.get<Booking[]>(url);
  return result;
   
 }
 
 findBookingById(bookingId:number):Observable<Booking>{
  let url = this.baseBookingUrl+'/view/'+bookingId;
  let observable:Observable<Booking>=this.client.get<Booking>(url);
  return observable;
 }
 

 deleteBookingById(bookingId:number){
  let url=this.baseBookingUrl+"/delete/"+bookingId;
    let result:Observable<boolean>=this.client.delete<boolean>(url);
    return result;
  }

}

