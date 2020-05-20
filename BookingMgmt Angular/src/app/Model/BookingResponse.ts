import {  Passenger } from './Passenger';
import { User } from './User';
import { Flight } from './Flight';
export class BookingResponse {
    pnrNumber : number;
    flightNumber:string;
    source:String;
    destination:String;
    arrivalTime:String;
    departureTime:String;
    passengerList:Array<Passenger>;
    userId:string;
    billingAddress:String;

    constructor(flightNumber:string,
        pnrNumber : number,
        source:String,
        destination:String,
        arrivalTime:String,
        departureTime:String,
        passengerList:Array<Passenger>,
        userId:string,
        billingAddress:String) {
            this.flightNumber=flightNumber;
            this.source=source;
            this.destination=destination;
            this.arrivalTime=arrivalTime;
            this.departureTime=departureTime;
            this.passengerList=passengerList;
            this.userId = userId;
            this.billingAddress=billingAddress;
            this.pnrNumber = pnrNumber;
    }
}