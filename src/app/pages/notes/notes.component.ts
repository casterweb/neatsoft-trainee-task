import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { UserNotes } from '../../interfaces/user.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  response: UserNotes;
  subscriptions$ = new Subscription();
  responses: UserNotes[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.subscriptions$.add(
      this.noteService.getAllNotes().subscribe((response) => {
        console.log(response);
        this.response = response;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
