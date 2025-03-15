import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { EventBookingsComponent } from './pages/event-bookings/event-bookings.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'my-bookings',
        component: MyBookingsComponent
    },
    {
        path: 'new-event',
        component: NewEventComponent
    },
    {
        path: 'event-bookings',
        component: EventBookingsComponent
    }
];
