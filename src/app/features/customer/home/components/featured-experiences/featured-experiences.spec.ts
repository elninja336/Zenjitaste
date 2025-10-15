import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedExperiences } from './featured-experiences';

describe('FeaturedExperiences', () => {
  let component: FeaturedExperiences;
  let fixture: ComponentFixture<FeaturedExperiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedExperiences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedExperiences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
