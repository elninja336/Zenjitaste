import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  // Tourist routes (public)
  {
    path: '',
    loadChildren: () => import('./features/tourist/tourist-module').then(m => m.TouristModule)
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