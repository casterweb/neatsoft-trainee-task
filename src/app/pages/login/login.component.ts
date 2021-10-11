import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationHttp} from "../../services/authentication-http.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit ,OnDestroy{
  form: any;
  aSub: Subscription | any;

  constructor(private authenticationHttp:AuthenticationHttp,
              private router: Router,
              private route: ActivatedRoute) {
  }



  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'firstName': new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'password': new FormControl(null,[Validators.required, Validators.minLength(6)])
    });

    // this.route.queryParams.subscribe(
    //   (params:Params) =>{
    //     if(params['registered']){
    //       //разрешение войти в систему используя свои данные
    //     } else if(params['accessDenied']){
    //       //для начала авторизуйтесь в системе
    //     }
    //   }
    // )

  }

  onSubmit(){
    this.form.disable()
   this.aSub = this.authenticationHttp.register(this.form.value).subscribe(
      () =>{
        console.log('login')
        this.router.navigate([],{
          queryParams:{
            registered:true
          }
        })
      },
        error => {
            console.warn(error)
            this.form.enable()
          }
    )
      }

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  // onSubmit() {
  //   this.form.disable()
  //  this.aSub = this.authenticationHttp.login(this.form.value).subscribe(
  // () => this.router.navigate(['/overview']),
  //     error => {
  //       console.warn(error)
  //       this.form.enable()
  //     }
  //   )
  // }

}
