import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { RouterModule } from '@angular/router'; // Importa RouterModule

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { EventBookingsComponent } from './pages/event-bookings/event-bookings.component';
import { routes } from './app.routes'; // Importa las rutas

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyBookingsComponent,
    NewEventComponent,
    EventBookingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Asegúrate de incluir HttpClientModule en los imports
    RouterModule.forRoot(routes) // Configura las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }