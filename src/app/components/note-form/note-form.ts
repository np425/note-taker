import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note';

@Component({
  imports: [FormsModule],
  selector: 'app-note-form',
  styleUrl: './note-form.css',
  templateUrl: './note-form.html',
})
export class NoteForm {
  private readonly noteService = inject(NoteService);

  title = '';
  text = '';

  add(): void {
    if (!this.title.trim() && !this.text.trim()) return;
    this.noteService.add(this.title.trim(), this.text.trim());
    this.title = '';
    this.text = '';
  }
}
