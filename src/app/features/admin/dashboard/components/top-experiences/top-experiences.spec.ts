import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopExperiences } from './top-experiences';

describe('TopExperiences', () => {
  let component: TopExperiences;
  let fixture: ComponentFixture<TopExperiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopExperiences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopExperiences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
