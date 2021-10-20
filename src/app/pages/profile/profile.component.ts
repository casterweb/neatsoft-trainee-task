import { Component, OnInit } from '@angular/core';
import { AuthenticationHttp } from '../../services/authentication-http.service';
import { UserIdentity } from '../../interfaces/userIdentity.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  response: UserIdentity;
  subscriptions$ = new Subscription();

  constructor(private authenticationHttp: AuthenticationHttp) {}

  ngOnInit(): void {
    this.subscriptions$.add(
      this.authenticationHttp.getUser().subscribe((response) => {
        this.response = response;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
