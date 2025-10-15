import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing-module';
import { CustomerLayout } from './customer-layout/customer-layout';
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
    CustomerLayout,
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
    CustomerRoutingModule
  ]
})
export class CustomerModule  { }
