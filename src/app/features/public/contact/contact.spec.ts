// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { Contact } from './contact';

// describe('Contact', () => {
//   let component: Contact;
//   let fixture: ComponentFixture<Contact>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [Contact]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(Contact);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});