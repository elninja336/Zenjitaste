import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalStories } from './cultural-stories';

describe('CulturalStories', () => {
  let component: CulturalStories;
  let fixture: ComponentFixture<CulturalStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CulturalStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalStories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
