import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishEdit } from './dish-edit';

describe('DishEdit', () => {
  let component: DishEdit;
  let fixture: ComponentFixture<DishEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
