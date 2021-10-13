import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {UserLogin, UserRegister} from "../interfaces/user.interfaces";
import {Observable} from "rxjs";
import {tap} from'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttp {

 private token:any = null




  constructor(private  http:HttpClient) { }

 public register(user:UserRegister):Observable<UserRegister> {
    return this.http.post<UserRegister>('https://dev.api.logtime.me/authentications/sign-up', user)

  }

 public login (user: UserLogin):Observable<{token:string}> {
    return this.http.post<{token:string}>('https://dev.api.logtime.me/authentications/sign-in', user)
      .pipe(
        tap(
          ({token})=>{
            localStorage.setItem('sing-in',token)
            this.setToken(token)
          }
        )
      )
  }
  public  setAuthTokenStorage(){
      const potentialToken = localStorage.getItem('sing-in')
      if(  potentialToken !== null  ){
        this.setToken(potentialToken)
      }
    }


 public setToken(token:string) {
    this.token = token
  }

 public getToken():string {
    return this.token
  }

 public isAuthenticated():boolean{
    return !!this.token
  }

  // logout() {
  //   this.setToken (null)
  //   localStorage.clear()
  // }
}

