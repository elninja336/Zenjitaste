import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAnalytics } from './booking-analytics';

describe('BookingAnalytics', () => {
  let component: BookingAnalytics;
  let fixture: ComponentFixture<BookingAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingAnalytics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingAnalytics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
