import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-home',
  standalone: true, // Ensure this is a standalone component
  imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule to imports array
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  events: any []= [];
  bookingObj: any = {
    "BookingId": 0,
    "UserId": 0,
    "EventId": 0,
    "NoOfTickets": 0,
    "EventBookingMembers": []
  };
  eventMemebrs: any =  {
    "BookingMemberId": 0,
    "BookingId": 0,
    "Name": "",
    "Age": 0,
    "IdentityCard": "",
    "CardNo": "",
    "ContactNo": ""
  };
  constructor(private http: HttpClient){
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('eventUser');
      if (localData != null) {
        const user = JSON.parse(localData);
        this.bookingObj.UserId = user.userId;
      }
    }
  }
  ngOnInit(): void {
    this.loadAllEvents();
  }
  AddMember() {
    const obj = JSON.stringify(this.eventMemebrs);
    this.eventMemebrs = {
      "BookingMemberId": 0,
      "BookingId": 0,
      "Name": "",
      "Age": 0,
      "IdentityCard": "",
      "CardNo": "",
      "ContactNo": ""
    }
    this.bookingObj.EventBookingMembers.push(JSON.parse(obj))
  }

  loadAllEvents() {
    this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEvents').subscribe((res:any) =>{
      this.events = res.data;
    })
  }
  bookNow(event:any) {
    this.bookingObj.EventId = event.eventId;
    const model = document.getElementById('bookModel');
    if(model != null) {
      model.style.display = 'block'
    }
    document.addEventListener('keydown', this.handleEscapeKey.bind(this));
  }
  closeModel() {
    const model = document.getElementById('bookModel');
    if(model != null) {
      model.style.display = 'none'
    }
    document.removeEventListener('keydown', this.handleEscapeKey.bind(this));
  }
  makeBooking() {
    this.bookingObj.NoOfTickets = this.bookingObj.EventBookingMembers.length;
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/bookevent',this.bookingObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Booking Success')
        this.closeModel();
      } else {
        alert(res.message)
      }
    })
  }

  handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModel();
    }
  }
  
}