import { Component, OnInit } from '@angular/core';
import { NoteHttpService } from '../../services/note-http.service';
import { Note } from '../../interfaces/note.interface';

import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesHttpService } from '../../services/categories-http.service';
import { Categories } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  subscriptions$ = new Subscription();
  responses: Note[];
  categories: Categories[];
  form: FormGroup;

  constructor(
    private noteHttpService: NoteHttpService,
    private categoriesHttpService: CategoriesHttpService
  ) {}

  ngOnInit() {
    this.subscribeNotes();

    this.subscribeCategories();

    this.createForm();
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private subscribeCategories() {
    this.subscriptions$.add(
      this.categoriesHttpService
        .getAllCategory()
        .subscribe((category) => (this.categories = category))
    );
  }

  private subscribeNotes() {
    this.subscriptions$.add(
      this.noteHttpService
        .getAllNotes()
        .subscribe((response) => (this.responses = response))
    );
  }

  private createForm() {
    this.form = new FormGroup({
      note: new FormControl(null),
      day: new FormControl(null),
      year: new FormControl(null),
      month: new FormControl(null),
      categoryId: new FormControl(null),
      isTask: new FormControl(null),
    });
  }

  onSubmit() {
    this.subscriptions$.add(
      this.noteHttpService.createNote(this.form.getRawValue()).subscribe()
    );
    this.form.reset();
  }
}
