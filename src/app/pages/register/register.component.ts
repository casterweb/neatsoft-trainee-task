import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationHttp } from '../../services/authentication-http.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscriptions$ = new Subscription();

  constructor(
    private authenticationService: AuthenticationService,
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
    this.subscriptions$.unsubscribe();
  }

  onSubmit() {
    this.form.disable();
    this.subscriptions$.add(
      this.authenticationService.register(this.form.value).subscribe(
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
      )
    );
  }
}
