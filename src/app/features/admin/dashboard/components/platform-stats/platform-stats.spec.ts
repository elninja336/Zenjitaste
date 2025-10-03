import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformStats } from './platform-stats';

describe('PlatformStats', () => {
  let component: PlatformStats;
  let fixture: ComponentFixture<PlatformStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatformStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
