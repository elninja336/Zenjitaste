// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PublicLayout } from './public-layout';

// describe('PublicLayout', () => {
//   let component: PublicLayout;
//   let fixture: ComponentFixture<PublicLayout>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [PublicLayout]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(PublicLayout);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicLayoutComponent } from './public-layout';

describe('PublicLayoutComponent', () => {
  let component: PublicLayoutComponent;
  let fixture: ComponentFixture<PublicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});