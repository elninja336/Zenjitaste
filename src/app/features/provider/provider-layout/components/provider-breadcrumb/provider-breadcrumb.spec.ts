import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderBreadcrumb } from './provider-breadcrumb';

describe('ProviderBreadcrumb', () => {
  let component: ProviderBreadcrumb;
  let fixture: ComponentFixture<ProviderBreadcrumb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderBreadcrumb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderBreadcrumb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
