// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { Home } from './home';

// describe('Home', () => {
//   let component: Home;
//   let fixture: ComponentFixture<Home>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [Home]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(Home);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});