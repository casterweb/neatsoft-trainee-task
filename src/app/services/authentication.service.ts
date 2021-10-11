import { Injectable } from '@angular/core';
import {AuthenticationHttp} from "./authentication-http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {





  constructor(
    private readonly authenticationHttp:AuthenticationHttp,
  ) {}



}
