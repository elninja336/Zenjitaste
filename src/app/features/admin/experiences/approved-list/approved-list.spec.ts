import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedList } from './approved-list';

describe('ApprovedList', () => {
  let component: ApprovedList;
  let fixture: ComponentFixture<ApprovedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovedList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
