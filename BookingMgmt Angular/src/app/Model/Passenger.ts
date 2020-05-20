

export class Passenger
{
    pnrNumber:string;
passengerName:String;
passengerAge:number;
gender:String;
luggage:number;
passengerUIN:string;

constructor(
    pnrNumber:string,
    passengerName:String,
passengerAge:number,
gender:String,
luggage:number,
passengerUIN:string,

)
{
    this.pnrNumber=pnrNumber;
this.passengerName=passengerName;
this.passengerAge=passengerAge;
this.gender=gender;
this.luggage=luggage;
this.passengerUIN=passengerUIN;
}
}