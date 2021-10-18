import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationHttp } from '../../services/authentication-http.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  aSub: Subscription | any;

  constructor(
    private authenticationHttp: AuthenticationHttp,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.authenticationHttp.register(this.form.value).subscribe(
      () => {
        this.router.navigate(['/signIn'], {
          queryParams: {
            registered: true,
          },
        });
      },
      (error) => {
        this.form.enable();
      }
    );
  }
}
