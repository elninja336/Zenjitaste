import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCard } from './experience-card';

describe('ExperienceCard', () => {
  let component: ExperienceCard;
  let fixture: ComponentFixture<ExperienceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
