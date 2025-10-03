import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    
    if (currentUser) {
      // Check if route is restricted by role
      const allowedRoles = route.data['roles'] as Array<string>;
      if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
        // Role not authorized, redirect to home
        this.router.navigate(['/']);
        return false;
      }
      // Authorized
      return true;
    }

    // Not logged in, redirect to login with return url
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}