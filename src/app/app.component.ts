import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule]
})
export class AppComponent {
  isLoginView: boolean = true;

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    this.isLoginView = true;
    this.closeModel();
  }

  registerObj: any = {
    "UserId": 0,
    "Name": "",
    "Email": "",
    "Password": "",
    "ContactNo": "",
    "Role": ""
  };
  loginObj: any = {
    "Password": "",
    "ContactNo": ""
  }
  isUserLoggedin: boolean = false;
  loggedUserData: any;

  constructor(private http: HttpClient, private router: Router) {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('eventUser');
      if (localData != null) {
        this.isUserLoggedin = true;
        this.loggedUserData = JSON.parse(localData);
      }
    }
  }

  onRegiste() {
    this.isLoginView = false;
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  openLogin() {
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  closeModel() {
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'none';
    }
  }

  onRegister() {
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser', this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert('Registration Success');
        this.closeModel()
      } else {
        alert(res.message)
      }
    })
  }

  onLogoff() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('eventUser');
    }
    this.isUserLoggedin = false;
    this.loggedUserData = undefined;
    this.router.navigateByUrl('/home')
  }

  onLogin() {
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/login', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert('Login Success');
        if (typeof window !== 'undefined') {
          localStorage.setItem('eventUser', JSON.stringify(res.data))
        }
        this.isUserLoggedin = true;
        this.loggedUserData = res.data;
        this.closeModel()
      } else {
        alert(res.message)
      }
    })
  }
}