import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceFilter } from './experience-filter';

describe('ExperienceFilter', () => {
  let component: ExperienceFilter;
  let fixture: ComponentFixture<ExperienceFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
