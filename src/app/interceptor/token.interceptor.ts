import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      params: req.params.set(
        'access-token',
        this.authenticationService.getToken()
      ),
    });

    return next.handle(req);
  }
}
