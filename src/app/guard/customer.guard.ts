import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/auth/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate  {

  constructor(private authService: AuthserviceService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.authService.isLogin()) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  
}
