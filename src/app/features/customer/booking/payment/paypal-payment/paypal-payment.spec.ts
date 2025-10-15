import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalPayment } from './paypal-payment';

describe('PaypalPayment', () => {
  let component: PaypalPayment;
  let fixture: ComponentFixture<PaypalPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaypalPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypalPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
