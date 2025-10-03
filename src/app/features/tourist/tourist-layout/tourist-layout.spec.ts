import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristLayout } from './tourist-layout';

describe('TouristLayout', () => {
  let component: TouristLayout;
  let fixture: ComponentFixture<TouristLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouristLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
