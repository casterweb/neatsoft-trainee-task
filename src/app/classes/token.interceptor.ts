import {Injectable} from "@angular/core";
import {AuthenticationHttp} from "../services/authentication-http.service";
import {HttpEvent,HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class TokenInterceptor implements HttpInterceptor{

  constructor( private authenticationHttp:AuthenticationHttp) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('sign-in')


    if(idToken){
     const cloned = req.clone({
        headers:req.headers.set('Authorization',
          'Bearer ' + idToken)
      });
     next.handle(cloned);
    }
    return  next.handle(req)
  }
}
