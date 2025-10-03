import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLayout } from './provider-layout';

describe('ProviderLayout', () => {
  let component: ProviderLayout;
  let fixture: ComponentFixture<ProviderLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
