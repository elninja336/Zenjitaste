import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewResponse } from './review-response';

describe('ReviewResponse', () => {
  let component: ReviewResponse;
  let fixture: ComponentFixture<ReviewResponse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewResponse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewResponse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
