export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[]
}

const Notes = {
  getAll(): Note[] {
    return JSON.parse(localStorage.getItem("notes") || "[]")
  },

  getById(id: string): Note | undefined {
    return this.getAll().find((note: Note) => note.id === id)
  },

  getByTags(tags: string[]): Note[] {
    return this.getAll().filter((note: Note) => note.tags.some((tag: string) => tags.includes(tag)))
  },

  addNote(title: string, content: string, tags: string[]) {
    const notes = this.getAll();
    const newNoteId = "note-"+Date.now();
    const newNote: Note = { id: newNoteId, title, content, tags };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
}

export default Notes;