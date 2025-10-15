import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedExperiences } from './saved-experiences';

describe('SavedExperiences', () => {
  let component: SavedExperiences;
  let fixture: ComponentFixture<SavedExperiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedExperiences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedExperiences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
