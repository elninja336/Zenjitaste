import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSidebar } from './provider-sidebar';

describe('ProviderSidebar', () => {
  let component: ProviderSidebar;
  let fixture: ComponentFixture<ProviderSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
