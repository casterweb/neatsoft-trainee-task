import { Component, OnInit } from '@angular/core';
import { AuthenticationHttp } from '../../services/authentication-http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  response: any;

  constructor(private authenticationHttp: AuthenticationHttp) {}

  ngOnInit(): void {
    this.authenticationHttp.getUser().subscribe((response) => {
      this.response = response;
    });
  }
}
