import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WarningService {

  
  constructor(private http:HttpClient,private router:Router) { }

  register(registerData){
    return this.http.post('https://reqres.in/api/register',registerData);
  }

  login(login){
    debugger;
    return this.http.post('https://reqres.in/api/login',login);
  }
  loggedIn(){
    return !!localStorage.getItem('token');  
  }
  loggedOut(){
    debugger;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  tracklist(){
    return this.http.get("https://api.myjson.com/bins/13qufw");
  }
} 
