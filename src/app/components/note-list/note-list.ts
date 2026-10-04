import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NoteService } from '../../services/note';

@Component({
  imports: [DatePipe],
  selector: 'app-note-list',
  styleUrl: './note-list.css',
  templateUrl: './note-list.html',
})
export class NoteList {
  protected readonly noteService = inject(NoteService);
}
