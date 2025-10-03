import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedList } from './rejected-list';

describe('RejectedList', () => {
  let component: RejectedList;
  let fixture: ComponentFixture<RejectedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejectedList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
