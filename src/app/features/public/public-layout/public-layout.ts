// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-public-layout',
//   standalone: false,
//   templateUrl: './public-layout.html',
//   styleUrl: './public-layout.css'
// })
// export class PublicLayout {

// }


import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.html',
  styleUrls: ['./public-layout.css']
})
export class PublicLayoutComponent implements OnInit {
  isScrolled = false;
  activeLang = 'EN';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  setLanguage(lang: string): void {
    this.activeLang = lang;
  }
}