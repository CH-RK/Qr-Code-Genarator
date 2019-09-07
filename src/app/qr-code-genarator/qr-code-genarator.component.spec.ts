import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeGenaratorComponent } from './qr-code-genarator.component';

describe('QrCodeGenaratorComponent', () => {
  let component: QrCodeGenaratorComponent;
  let fixture: ComponentFixture<QrCodeGenaratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCodeGenaratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeGenaratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
