import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueOverview } from './revenue-overview';

describe('RevenueOverview', () => {
  let component: RevenueOverview;
  let fixture: ComponentFixture<RevenueOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevenueOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
