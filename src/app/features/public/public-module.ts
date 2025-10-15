// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { PublicRoutingModule } from './public-routing-module';
// import { Home } from './home/home';
// import { About } from './about/about';
// import { Contact } from './contact/contact';
// import { PublicLayout } from './public-layout/public-layout';


// @NgModule({
//   declarations: [
//     Home,
//     About,
//     Contact,
//     PublicLayout
//   ],
//   imports: [
//     CommonModule,
//     PublicRoutingModule
//   ]
// })
// export class PublicModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing-module';
import { PublicLayoutComponent } from './public-layout/public-layout';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicLayoutComponent,
    HomeComponent,
    // AboutComponent,
    // ContactComponent
    
  ]
})
export class PublicModule { }