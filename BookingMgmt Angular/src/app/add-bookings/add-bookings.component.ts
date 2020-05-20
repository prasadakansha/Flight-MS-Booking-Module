import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { observable, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Passenger } from '../Model/Passenger';
import { BookingResponse } from '../Model/BookingResponse';
import { BookingRequest } from '../Model/BookingRequest';




@Component({
  selector: 'app-add-bookings',
  templateUrl: './add-bookings.component.html',
  styleUrls: ['./add-bookings.component.css']
})
export class AddBookingsComponent implements OnInit {

  response:BookingResponse;
  pass2flag = true;
  pass3flag = true;
  pass4flag = true;
  responseFlag= false;
  bookingConfirmFlag = false;
  passengerList: Passenger[] = [];
  passengerNames = [];
  passengerAges = [];
  bookingId: string;
  numberOfPassengers:number;
  bookingResponse:BookingResponse;
  bookingform = new FormGroup({
    numberOfPassengers: new FormControl('',
      {
        validators: Validators.required
      }),
    passengerName1: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.pattern("([a-zA-Z]+( [a-zA-Z]+)*){2,30}")
      ])
    }),
    passengerName2: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("([a-zA-Z]+( [a-zA-Z]+)*){2,30}")
        ])

      }),
    passengerName3: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("([a-zA-Z]+( [a-zA-Z]+)*){2,30}")
        ])
      }),
    passengerName4: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.pattern("([a-zA-Z]+( [a-zA-Z]+)*){2,30}")
      ])
    }
    ),
    passengerAge1: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("(?:|-)([1-9]{1,2}[0]?|100)")
        ])
      }),
    passengerAge2: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("(?:|-)([1-9]{1,2}[0]?|100)")
        ])
      }),
    passengerAge3: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("(?:|-)([1-9]{1,2}[0]?|100)")
        ])
      }),
    passengerAge4: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("(?:|-)([1-9]{1,2}[0]?|100)")
        ])
      }),
      passengerGender1: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerGender2: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerGender3: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerGender4: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerNumber1: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerNumber2: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerNumber3: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      passengerNumber4: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      billingAddress: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
      
    phoneNumber: new FormControl('',
      {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern("[7-9][0-9]{9}")
        ])
      }),
      
  })
 
constructor(private bookingservice : BookingService) { }

  ngOnInit(): void {
    this.onChanges();
  }
  passengersCount() {
    this.numberOfPassengers = parseInt(this.bookingform.get('numberOfPassengers').value);
  }
  onChanges() {
    this.bookingform.get('numberOfPassengers').valueChanges
      .subscribe(selectedPassengers => {
        if (selectedPassengers == 1) {
          this.bookingform.get('passengerName1').enable();
          this.bookingform.get('passengerAge1').enable();
          this.bookingform.get('passengerGender1').enable();
          this.bookingform.get('passengerNumber1').enable();
          this.bookingform.get('passengerName2').disable();
          this.bookingform.get('passengerName3').disable();
          this.bookingform.get('passengerName4').disable();
          this.bookingform.get('passengerAge2').disable();
          this.bookingform.get('passengerAge3').disable();
          this.bookingform.get('passengerAge4').disable();
          this.bookingform.get('passengerGender2').disable();
          this.bookingform.get('passengerGender3').disable();
          this.bookingform.get('passengerGender4').disable();
          this.bookingform.get('passengerNumber2').disable();
          this.bookingform.get('passengerNumber3').disable();
          this.bookingform.get('passengerNumber4').disable();
          this.bookingform.get('passengerName2').reset();
          this.bookingform.get('passengerAge2').reset();
          this.bookingform.get('passengerGender2').reset();
          this.bookingform.get('passengerNumber2').reset();
          this.bookingform.get('passengerName3').reset();
          this.bookingform.get('passengerAge3').reset();
          this.bookingform.get('passengerGender3').reset();
          this.bookingform.get('passengerNumber3').reset();
          this.bookingform.get('passengerName4').reset();
          this.bookingform.get('passengerAge4').reset();
          this.bookingform.get('passengerGender4').reset();
          this.bookingform.get('passengerNumber4').reset();
        }
        else if (selectedPassengers == 2) {
          this.bookingform.get('passengerName1').enable();
          this.bookingform.get('passengerAge1').enable();
          this.bookingform.get('passengerGender1').enable();
          this.bookingform.get('passengerNumber1').enable();
          this.bookingform.get('passengerName2').enable();
          this.bookingform.get('passengerAge2').enable();
          this.bookingform.get('passengerGender2').enable();
          this.bookingform.get('passengerNumber2').enable();
          this.bookingform.get('passengerName3').disable();
          this.bookingform.get('passengerName4').disable();
          this.bookingform.get('passengerAge3').disable();
          this.bookingform.get('passengerAge4').disable();
          this.bookingform.get('passengerGender3').disable();
          this.bookingform.get('passengerGender4').disable();
          this.bookingform.get('passengerNumber3').disable();
          this.bookingform.get('passengerNumber4').disable();
          this.bookingform.get('passengerName3').reset();
          this.bookingform.get('passengerAge3').reset();
          this.bookingform.get('passengerGender3').reset();
          this.bookingform.get('passengerNumber3').reset();
          this.bookingform.get('passengerName4').reset();
          this.bookingform.get('passengerAge4').reset();
          this.bookingform.get('passengerGender4').reset();
          this.bookingform.get('passengerNumber4').reset();

        }
        else if (selectedPassengers == 3) {
          this.bookingform.get('passengerName1').enable();
          this.bookingform.get('passengerAge1').enable();
          this.bookingform.get('passengerGender1').enable();
          this.bookingform.get('passengerNumber1').enable();
          this.bookingform.get('passengerName2').enable();
          this.bookingform.get('passengerAge2').enable();
          this.bookingform.get('passengerGender2').enable();
          this.bookingform.get('passengerNumber2').enable();
          this.bookingform.get('passengerName3').enable();
          this.bookingform.get('passengerAge3').enable();
          this.bookingform.get('passengerGender3').enable();
          this.bookingform.get('passengerNumber3').enable();
          this.bookingform.get('passengerName4').enable();
          this.bookingform.get('passengerAge4').enable();
          this.bookingform.get('passengerGender4').enable();
          this.bookingform.get('passengerNumber4').enable();
        }
        else{
          this.bookingform.get('passengerName1').enable();
          this.bookingform.get('passengerAge1').enable();
          this.bookingform.get('passengerGender1').enable();
          this.bookingform.get('passengerNumber1').enable();
          this.bookingform.get('passengerName2').enable();
          this.bookingform.get('passengerAge2').enable();
          this.bookingform.get('passengerGender2').enable();
          this.bookingform.get('passengerNumber2').enable();
          this.bookingform.get('passengerName3').enable();
          this.bookingform.get('passengerAge3').enable();
          this.bookingform.get('passengerGender3').enable();
          this.bookingform.get('passengerNumber3').enable();
          this.bookingform.get('passengerName4').enable();
          this.bookingform.get('passengerAge4').enable();
          this.bookingform.get('passengerGender4').reset();
          this.bookingform.get('passengerNumber4').reset();
        }
      });
    }
      addBooking()

      {
        if (this.bookingform.get('passengerName1').value != null)
        {
        let passengerName1 = this.bookingform.get('passengerName1').value;
        let passengerAge1 = this.bookingform.get('passengerAge1').value;
        let passengerGender1 = this.bookingform.get('passengerGender1').value;
        let passengerNumber1 = this.bookingform.get('passengerNumber1').value;
        let passenger1 = new Passenger("123",passengerName1,passengerAge1,passengerGender1,15,passengerNumber1);
        this.passengerList.push(passenger1);
        }
        
        if (this.bookingform.get('passengerName2').value != null)
        {
        let passengerName2 = this.bookingform.get('passengerName2').value;
        let passengerAge2 = this.bookingform.get('passengerAge2').value;
        let passengerGender2= this.bookingform.get('passengerGender2').value;
        let passengerNumber2= this.bookingform.get('passengerNumber2').value;
        let passenger2 = new Passenger("123",passengerName2,passengerAge2,passengerGender2,15,passengerNumber2);
        this.passengerList.push(passenger2);
        }
        if (this.bookingform.get('passengerName3').value != null){
        let passengerName3 = this.bookingform.get('passengerName3').value;
        let passengerAge3 = this.bookingform.get('passengerAge3').value;
        let passengerGender3 = this.bookingform.get('passengerGender3').value;
        let passengerNumber3 = this.bookingform.get('passengerNumber3').value;
        let passenger3 = new Passenger("123",passengerName3,passengerAge3,passengerGender3,15,passengerNumber3);
        this.passengerList.push(passenger3);
        }
        if (this.bookingform.get('passengerName4').value != null){
        let passengerName4 = this.bookingform.get('passengerName4').value;
        let passengerAge4 = this.bookingform.get('passengerAge4').value;
        let passengerGender4 = this.bookingform.get('passengerGender4').value;
        let passengerNumber4 = this.bookingform.get('passengerNumber4').value;
        let passenger4 = new Passenger("123",passengerName4,passengerAge4,passengerGender4,15,passengerNumber4);
        this.passengerList.push(passenger4);}
        let billingAddress=this.bookingform.get('billingAddress').value;
        let phoneNumber=this.bookingform.get('phoneNumber').value;

      let booking = new BookingRequest("235","02-11-2020",this.passengerList,5000,"1235",2,billingAddress,"Delhi","Pune",phoneNumber);

      

      
        let result:Observable<BookingResponse>=this.bookingservice.addBookings(booking);
        result.subscribe(bookings => {
          this.response = bookings;
          console.log(bookings);
          this.responseFlag= true;
          console.log(this.response);
        })

     
       
       

       
      }
     }
  