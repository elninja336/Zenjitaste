import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderHeader } from './provider-header';

describe('ProviderHeader', () => {
  let component: ProviderHeader;
  let fixture: ComponentFixture<ProviderHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
