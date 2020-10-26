import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route, state : RouterStateSnapshot) {
    this.auth.user$.subscribe((user) => {
      if (user) return true;
    });

    this.router.navigate(['/login'], {queryParams: { returnUrl : state.url}});
    return false;
  }
}
