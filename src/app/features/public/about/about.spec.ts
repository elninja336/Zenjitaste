// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { About } from './about';

// describe('About', () => {
//   let component: About;
//   let fixture: ComponentFixture<About>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [About]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(About);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});