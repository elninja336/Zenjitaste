import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePreview } from './experience-preview';

describe('ExperiencePreview', () => {
  let component: ExperiencePreview;
  let fixture: ComponentFixture<ExperiencePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperiencePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
