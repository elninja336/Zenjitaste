import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  // Tourist routes (public)
  {
    path: '',
    loadChildren: () => import('./features/customer/customer-module').then(m => m.CustomerModule)
  },
  
  // Provider routes (requires authentication)
  {
    path: 'provider',
    loadChildren: () => import('./features/provider/provider-module').then(m => m.ProviderModule),
    canActivate: [AuthGuard],
    data: { roles: ['provider'] }
  },
  
  // Admin routes (requires authentication and admin role)
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin-module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  
  // Fallback route
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { PublicLayoutComponent } from './features/public/public-layout/public-layout';
// import { HomeComponent } from './features/public/home/home';
// import { AboutComponent } from './features/public/about/about';
// import { ContactComponent } from './features/public/contact/contact';

// const routes: Routes = [
//   {
//     path: '',
//     component: PublicLayoutComponent,
//     children: [
//       { path: '', redirectTo: 'home', pathMatch: 'full' },
//       { path: 'home', component: HomeComponent },
//       { path: 'about', component: AboutComponent },
//       { path: 'contact', component: ContactComponent }
//     ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class PublicRoutingModule { }
