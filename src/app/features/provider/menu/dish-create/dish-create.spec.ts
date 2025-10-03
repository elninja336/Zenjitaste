import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCreate } from './dish-create';

describe('DishCreate', () => {
  let component: DishCreate;
  let fixture: ComponentFixture<DishCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
