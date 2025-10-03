import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCreate } from './experience-create';

describe('ExperienceCreate', () => {
  let component: ExperienceCreate;
  let fixture: ComponentFixture<ExperienceCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
