import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaPayment } from './mpesa-payment';

describe('MpesaPayment', () => {
  let component: MpesaPayment;
  let fixture: ComponentFixture<MpesaPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpesaPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpesaPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
