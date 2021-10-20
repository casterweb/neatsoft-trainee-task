import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, NotesRoutingModule, FormsModule, ReactiveFormsModule],
})
export class NotesModule {}
