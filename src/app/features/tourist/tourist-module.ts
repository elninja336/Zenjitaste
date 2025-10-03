import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouristRoutingModule } from './tourist-routing-module';
import { TouristLayout } from './tourist-layout/tourist-layout';
import { Home } from './home/home';
import { HeroSection } from './home/components/hero-section/hero-section';
import { FeaturedExperiences } from './home/components/featured-experiences/featured-experiences';
import { HowItWorks } from './home/components/how-it-works/how-it-works';
import { CulturalHighlights } from './home/components/cultural-highlights/cultural-highlights';
import { Testimonials } from './home/components/testimonials/testimonials';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Faq } from './faq/faq';


@NgModule({
  declarations: [
    TouristLayout,
    Home,
    HeroSection,
    FeaturedExperiences,
    HowItWorks,
    CulturalHighlights,
    Testimonials,
    About,
    Contact,
    Faq
  ],
  imports: [
    CommonModule,
    TouristRoutingModule
  ]
})
export class TouristModule { }
