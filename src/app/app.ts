import { Component } from '@angular/core';
import { NoteForm } from './components/note-form/note-form';
import { NoteList } from './components/note-list/note-list';

@Component({
  imports: [NoteForm, NoteList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
