import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthenticationHttp} from "../services/authentication-http.service";
import {Route} from "../constants/route-constant";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private authenticationHttp:AuthenticationHttp,
              private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    this.authenticationHttp.setAuthTokenStorage()
    if (this.authenticationHttp.isAuthenticated()){
      return of(true)
    } else {
      this.router.navigate([Route.signIn],{
        queryParams:{
          accessDenied: true
        }
      })
      return of (false)
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.canActivate(route, state)
  }
}

