import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventBookingsComponent } from './pages/event-bookings/event-bookings.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyBookingsComponent,
    NewEventComponent,
    EventListComponent,
    EventBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class AppModule { }