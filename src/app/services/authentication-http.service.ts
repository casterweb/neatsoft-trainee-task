import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserIdentity } from '../interfaces/userIdentity.interfaces';

import { SignIn } from '../interfaces/signIn.interface';
import { SignUp } from '../interfaces/signUp.intercase';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationHttp {
  constructor(private http: HttpClient) {}

  register(user: SignUp): Observable<UserIdentity> {
    return this.http.post<UserIdentity>(
      `${environment.LogTimeApi}/authentications/sign-up`,
      user
    );
  }

  login(user: SignIn): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${environment.LogTimeApi}/authentications/sign-in`,
      user
    );
  }

  getUser(): Observable<UserIdentity> {
    return this.http.get<UserIdentity>(
      `${environment.LogTimeApi}/authentications/get-user`
    );
  }
}
