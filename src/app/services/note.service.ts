import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/user.interfaces';
import { HttpClient } from '@angular/common/http';
import { AuthenticationHttp } from './authentication-http.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(
    private http: HttpClient,
    private authenticationHttp: AuthenticationHttp
  ) {}

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`https://dev.api.logtime.me/v5/notes`);
  }
}
