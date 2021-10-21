import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscriptions$ = new Subscription();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.subscribeRoute();
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private subscribeRoute() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        //Теперь вы можете войти в систему используя свои данные
      } else if (params['accessDenied']) {
        //Для начало авторизуйтесь в системе
      }
    });
  }

  private createForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    this.form.disable();
    this.subscriptions$.add(
      this.authenticationService.login(this.form.value).subscribe(
        () => this.router.navigate(['/user']),
        (error) => {
          this.form.enable();
        }
      )
    );
  }
}
