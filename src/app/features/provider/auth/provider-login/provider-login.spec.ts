import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLogin } from './provider-login';

describe('ProviderLogin', () => {
  let component: ProviderLogin;
  let fixture: ComponentFixture<ProviderLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
