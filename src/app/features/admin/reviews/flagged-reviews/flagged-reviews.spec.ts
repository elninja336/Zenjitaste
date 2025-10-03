import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaggedReviews } from './flagged-reviews';

describe('FlaggedReviews', () => {
  let component: FlaggedReviews;
  let fixture: ComponentFixture<FlaggedReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlaggedReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlaggedReviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
