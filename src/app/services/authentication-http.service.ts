import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ResponseUser,
  UserLogin,
  UserRegister,
} from '../interfaces/user.interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationHttp {
  private token: any = null;

  constructor(private http: HttpClient) {}

  register(user: UserRegister): Observable<ResponseUser> {
    return this.http.post<ResponseUser>(
      'https://dev.api.logtime.me/authentications/sign-up',
      user
    );
  }

  login(user: UserLogin): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(
        'https://dev.api.logtime.me/authentications/sign-in',
        user
      )
      .pipe(
        tap(({ token }) => {
          localStorage.setItem('sing-in', token);
          this.setToken(token);
        })
      );
  }

  getUser(): Observable<ResponseUser> {
    return this.http.get<ResponseUser>(
      'https://dev.api.logtime.me/authentications/get-user?access-token=' +
        this.getToken()
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

  // logout() {
  //   this.setToken (null)
  //   localStorage.clear()
  // }
}
