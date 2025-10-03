import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBreadcrumb } from './admin-breadcrumb';

describe('AdminBreadcrumb', () => {
  let component: AdminBreadcrumb;
  let fixture: ComponentFixture<AdminBreadcrumb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBreadcrumb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBreadcrumb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
