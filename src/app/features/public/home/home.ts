// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: false,
//   templateUrl: './home.html',
//   styleUrl: './home.css'
// })
// export class Home {

// }

import { Component, OnInit } from '@angular/core';

interface Experience {
  badge: string;
  title: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  experiences: Experience[] = [
    {
      badge: 'Popular',
      title: 'Traditional Swahili Family Dinner',
      location: 'Stone Town, Zanzibar',
      description: 'Join a local family for an authentic home-cooked meal featuring pilau, biryani, and coastal seafood delicacies',
      price: 35,
      rating: 4.9,
      reviews: 127
    },
    {
      badge: 'New',
      title: 'Spice Farm Cooking Class',
      location: 'Kizimbani, Zanzibar',
      description: 'Learn to cook traditional Zanzibari dishes using fresh spices from our organic farm',
      price: 45,
      rating: 5.0,
      reviews: 89
    },
    {
      badge: 'Featured',
      title: 'Sunset Seafood at Local Restaurant',
      location: 'Nungwi Beach, Zanzibar',
      description: 'Fresh catch of the day prepared with traditional Zanzibari spices overlooking the ocean',
      price: 28,
      rating: 4.8,
      reviews: 203
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  scrollToExperiences(): void {
    const element = document.getElementById('experiences');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}