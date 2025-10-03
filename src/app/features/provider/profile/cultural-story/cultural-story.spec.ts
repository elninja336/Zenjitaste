import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalStory } from './cultural-story';

describe('CulturalStory', () => {
  let component: CulturalStory;
  let fixture: ComponentFixture<CulturalStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CulturalStory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalStory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
