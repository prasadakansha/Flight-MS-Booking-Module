package org.cap.bookingmgt.dto;

import java.math.BigInteger;

/***
 * @author Akansha Prasad
 */
/***
 * DTO was mainly used to get data transported across the network efficiently,
 * it may be even from JVM to another JVM. DTOs are often java. Serializable -
 * in order to transfer data across JVM.
 */
public class Passenger {
	private String pnrNumber;
	private String passengerName;
	private int passengerAge;
	private String passengerUIN;
	private double luggage;
	private String gender;

	public String getPnrNumber() {
		return pnrNumber;
	}

	public void setPnrNumber(String pnrNumber) {
		this.pnrNumber = pnrNumber;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public int getPassengerAge() {
		return passengerAge;
	}

	public void setPassengerAge(int passengerAge) {
		this.passengerAge = passengerAge;
	}

	public String getPassengerUIN() {
		return passengerUIN;
	}

	public void setPassengerUIN(String passengerUIN) {
		this.passengerUIN = passengerUIN;
	}

	public double getLuggage() {
		return luggage;
	}

	public void setLuggage(double luggage) {
		this.luggage = luggage;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
}