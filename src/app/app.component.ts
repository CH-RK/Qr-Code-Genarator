import { Component } from '@angular/core';
import { WarningService } from './warning.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _auth: WarningService ){}
}
