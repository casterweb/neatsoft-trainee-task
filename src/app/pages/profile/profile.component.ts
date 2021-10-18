import { Component, OnInit } from '@angular/core';
import { AuthenticationHttp } from '../../services/authentication-http.service';
import { ResponseUser } from '../../interfaces/user.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  response: ResponseUser;
  aSub: Subscription;

  constructor(private authenticationHttp: AuthenticationHttp) {}

  ngOnInit(): void {
    this.aSub = this.authenticationHttp.getUser().subscribe((response) => {
      this.response = response;
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
