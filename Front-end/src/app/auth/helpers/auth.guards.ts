import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'app/auth/service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router, private _authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authenticationService.currentUserValue;

    if (currentUser) {
      // Check if the route is restricted by role
      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        // Role not authorized, so redirect to the not-authorized page
        this._router.navigate(['/pages/miscellaneous/not-authorized']);
        return false;
      }

      // Authorized, so return true
      return true;
    }

    // Not logged in, so redirect to the login page with the return URL
    this._router.navigate(['/pages/authentication/login-v2'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
