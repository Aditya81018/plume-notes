import { Link } from "react-router-dom";
import { Note } from "../db/notes";

export interface NoteCardProps {
  note: Note;
}
export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link to={`/note/memorize?noteID=${note.id}`}>
      <div className="p-4 bg-neutral-300 rounded-md space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xl">{note.title}</span>
          <span className="space-x-1">
            {note.tags.map((tag) => (
              <span className="bg-neutral-400 px-2 py-0.5 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </span>
        </div>
        {/* <p className="opacity-80">{note.content}</p> */}
      </div>
    </Link>
  );
}
