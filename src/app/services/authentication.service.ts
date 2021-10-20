import { Injectable } from '@angular/core';
import { AuthenticationHttp } from './authentication-http.service';

import { SignIn } from '../interfaces/signIn.interface';
import { SignUp } from '../interfaces/signUp.intercase';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private token: string;

  constructor(private authenticationHttp: AuthenticationHttp) {}

  register(user: SignUp) {
    return this.authenticationHttp.register(user);
  }

  login(user: SignIn) {
    return this.authenticationHttp.login(user).pipe(
      tap(({ token }) => {
        localStorage.setItem('sing-in', token);
        this.setToken(token);
      })
    );
  }

  setAuthTokenStorage() {
    const potentialToken = localStorage.getItem('sing-in');
    if (potentialToken !== null) {
      this.setToken(potentialToken);
    }
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
