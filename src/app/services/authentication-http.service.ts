import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {User} from "../interfaces/user.interfaces";
import {Observable} from "rxjs";
import {tap} from'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttp {



  constructor(private  http:HttpClient) { }

  register(user:User):Observable<User> {
    return this.http.post<User>('https://dev.api.logtime.me/authentications/sign-up', user)

  }



  // private token:any = null
  //
  // login(user:User): Observable <{token:string}>{
  //    return this.http.post<{token:string}>('https://dev.api.logtime.me/authentications/sign-up', user)
  //      .pipe(
  //         tap(
  //           ({token})=>{
  //             localStorage.setItem('sing-up',token)
  //             this.setToken(token)
  //           }
  //         )
  //      )
  // }
  //
  // setToken(token:string){
  //   this.token = token
  // }
  //
  // getToken(token:string){
  //   return this.token
  // }
  //
  // isAuthenticated():boolean{
  //   return !!this.token
  // }
  //
  // logout(){
  //   // this.setToken(null)
  //   localStorage.clear()
  // }
}

