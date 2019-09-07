import { Component, OnInit } from '@angular/core';
import { WarningService } from '../warning.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  public logindata = {};
  public resultData;
  public resBody;
  constructor(private _auth:WarningService,private router: Router) {

   }
   postData(){
     debugger;
     this._auth.login(this.logindata).subscribe(res=>{
       this.resultData =res;
       localStorage.setItem('token',this.resultData.token);
        //console.log(this.resultData.token);
        this.router.navigate(['dashboard']);
     })
     
   }

  ngOnInit() {
  }

}
