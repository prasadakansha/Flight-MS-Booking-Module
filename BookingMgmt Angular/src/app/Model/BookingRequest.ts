import { User } from './User';
import { Passenger } from './Passenger';

export class BookingRequest{
    userId:string;
	bookingDate:string;
	passengerList:Array<Passenger>;
	ticketCost:number;
	flightNumber:string;
	noOfPassengers:number;
    billingAddress:string;
	source:string;
	destination:string;
    userPhone:string;
    constructor(
        userId:string,
	bookingDate:string,
	passengerList:Array<Passenger>,
	ticketCost:number,
	flightNumber:string,
	noOfPassengers:number,
    billingAddress:string,
	source:string,
	destination:string,
    userPhone:string,
    )
    {
      this.userId =userId;
      this.bookingDate = bookingDate;
      this.passengerList = passengerList;
      this.flightNumber = flightNumber;
      this.noOfPassengers = noOfPassengers;
      this.billingAddress =billingAddress;
      this.source = source;
      this.ticketCost = ticketCost;
      this.destination = destination;
      this.userPhone = userPhone;
    }
}
