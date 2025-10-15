// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   standalone: false,
//   templateUrl: './about.html',
//   styleUrl: './about.css'
// })
// export class About {

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}