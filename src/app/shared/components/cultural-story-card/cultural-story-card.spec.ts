import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalStoryCard } from './cultural-story-card';

describe('CulturalStoryCard', () => {
  let component: CulturalStoryCard;
  let fixture: ComponentFixture<CulturalStoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CulturalStoryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalStoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
