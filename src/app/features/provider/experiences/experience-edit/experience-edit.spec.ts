import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEdit } from './experience-edit';

describe('ExperienceEdit', () => {
  let component: ExperienceEdit;
  let fixture: ComponentFixture<ExperienceEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
