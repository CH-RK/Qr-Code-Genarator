import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-genarator',
  templateUrl: './qr-code-genarator.component.html',
  styleUrls: ['./qr-code-genarator.component.css']
})
export class QrCodeGenaratorComponent implements OnInit {

  public myAngularxQrCode: string = null;
  inputss: any;
  constructor() { 
    this.myAngularxQrCode = 'https://github.com/CH-RK';
  }

  ngOnInit() {
  }

  inputValue(){
    debugger
      this.myAngularxQrCode =  this.inputss;
  }

}
