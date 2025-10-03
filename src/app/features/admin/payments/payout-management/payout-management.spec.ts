import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutManagement } from './payout-management';

describe('PayoutManagement', () => {
  let component: PayoutManagement;
  let fixture: ComponentFixture<PayoutManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayoutManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayoutManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
