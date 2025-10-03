import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalHighlights } from './cultural-highlights';

describe('CulturalHighlights', () => {
  let component: CulturalHighlights;
  let fixture: ComponentFixture<CulturalHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CulturalHighlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalHighlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
