import { Injectable } from '@angular/core';
import { NoteHttpService } from './note-http.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private noteHttpService: NoteHttpService) {}
}
