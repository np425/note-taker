import { Service, signal } from '@angular/core';

export interface NoteItem {
  id: string;
  title: string;
  text: string;
  createdAt: number;
}

const STORAGE_KEY = 'notes';

@Service()
export class NoteService {
  private readonly notes = signal<NoteItem[]>(this.load());

  getAll(): NoteItem[] {
    return [...this.notes()].sort((a, b) => b.createdAt - a.createdAt);
  }

  add(title: string, text: string): void {
    const note: NoteItem = { id: crypto.randomUUID(), title, text, createdAt: Date.now() };
    this.notes.update((list) => [...list, note]);
    this.save();
  }

  update(id: string, changes: Partial<Pick<NoteItem, 'title' | 'text'>>): void {
    this.notes.update((list) => list.map((n) => (n.id === id ? { ...n, ...changes } : n)));
    this.save();
  }

  delete(id: string): void {
    this.notes.update((list) => list.filter((n) => n.id !== id));
    this.save();
  }

  private load(): NoteItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes()));
  }
}
