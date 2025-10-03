import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristList } from './tourist-list';

describe('TouristList', () => {
  let component: TouristList;
  let fixture: ComponentFixture<TouristList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouristList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
