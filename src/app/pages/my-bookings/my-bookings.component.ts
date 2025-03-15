import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
  imports: [CommonModule], // Add CommonModule to imports array
})
export class MyBookingsComponent {
 bookings:any[]=[];
  constructor(private http: HttpClient){
    const localData= localStorage.getItem('eventUser');
    if(localData != null) { 
     const user = JSON.parse(localData);
     this.getMyBpooking(user.userId)
    }
  }

  getMyBpooking(userid:number) {
    this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetBookingsByCustomer?customerId='+userid).subscribe((res:any)=>{
    this.bookings = res.data;
    })
  }
}