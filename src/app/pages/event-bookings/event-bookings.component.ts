import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-event-bookings',
  standalone: true, // Ensure this is a standalone component
  imports: [CommonModule], // Add CommonModule to imports array
  templateUrl: './event-bookings.component.html',
  styleUrls: ['./event-bookings.component.css']
})
export class EventBookingsComponent {
 

  bookings:any[]=[];
  constructor(private http: HttpClient){
    const localData= localStorage.getItem('eventUser');
    if(localData != null) { 
     const user = JSON.parse(localData);
     this.getMyBpooking()
    }
  }

  getMyBpooking() {
    this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEventBooking').subscribe((res:any)=>{
     this.bookings = res.data;
    })
  }
}