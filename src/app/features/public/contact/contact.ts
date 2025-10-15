// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   standalone: false,
//   templateUrl: './contact.html',
//   styleUrl: './contact.css'
// })
// export class Contact {

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    this.resetForm();
  }

  resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}