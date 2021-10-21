import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateNote } from '../interfaces/create-note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteHttpService {
  constructor(private http: HttpClient) {}

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.LogTimeApi}/v5/notes`);
  }

  createNote(note: CreateNote): Observable<Note> {
    return this.http.post<Note>(`${environment.LogTimeApi}/v5/notes`, note);
  }
}
