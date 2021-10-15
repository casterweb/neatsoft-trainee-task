import { Injectable } from '@angular/core';
import { AuthenticationHttp } from '../services/authentication-http.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authenticationHttp: AuthenticationHttp) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authenticationHttp.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.authenticationHttp.getToken(),
        },
      });
    }
    return next.handle(req);
  }
}
