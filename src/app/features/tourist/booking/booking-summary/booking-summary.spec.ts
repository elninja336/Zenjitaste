import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummary } from './booking-summary';

describe('BookingSummary', () => {
  let component: BookingSummary;
  let fixture: ComponentFixture<BookingSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
