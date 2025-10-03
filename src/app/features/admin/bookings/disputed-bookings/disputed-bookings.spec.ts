import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputedBookings } from './disputed-bookings';

describe('DisputedBookings', () => {
  let component: DisputedBookings;
  let fixture: ComponentFixture<DisputedBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisputedBookings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputedBookings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
