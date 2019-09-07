import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WarningService } from './warning.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private authService: WarningService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if(this.authService.loggedIn()){
        // alert("Login SuccessFull !")
        console.log('Ok Mama Enjoy !');

        return true
      } else {
        alert("Only LoggiedIn Users !")
        console.log('Only LoggiedIn User Dude');             
        this.router.navigate(['/'])
        return false
      }

    //console.log("Only LoggiedIn User Dude");
   // return true;
  }
}
