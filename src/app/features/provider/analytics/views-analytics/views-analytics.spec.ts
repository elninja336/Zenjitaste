import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsAnalytics } from './views-analytics';

describe('ViewsAnalytics', () => {
  let component: ViewsAnalytics;
  let fixture: ComponentFixture<ViewsAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsAnalytics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsAnalytics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
