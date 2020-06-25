import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let profileId = next.paramMap.get('id');
    console.log("checkAdminGuard" + " : " + profileId);
    if (localStorage.getItem('isAdmin') == 'true' || localStorage.getItem('userId') == profileId) {
      return true;
    }
    this.router.navigate(['/404']);
    return false;
  }
}
