import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBooking } from './confirm-booking';

describe('ConfirmBooking', () => {
  let component: ConfirmBooking;
  let fixture: ComponentFixture<ConfirmBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmBooking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmBooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
