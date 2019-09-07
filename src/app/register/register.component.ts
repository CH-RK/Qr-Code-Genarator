import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarningService } from '../warning.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerData;
  public registerD={};
  constructor(private service:WarningService, private router:Router) { }

  backtologin(){
    this.router.navigate(['login']);
  }
  register(){
    debugger; 
    this.service.register(this.registerD).subscribe(res=>{
      this.registerData = res;
      alert("Registration Success Page is redirecting to Login");
      this.router.navigate(['login']);
    })
  }
  ngOnInit() {
  }

}
