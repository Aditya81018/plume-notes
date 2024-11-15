import { Link } from "react-router-dom";
import NoteCard from "./components/note-card";
import Notes from "./db/notes";

function App() {
  return (
    <main className="p-4">
      <div className="flex flex-col gap-2">
        {Notes.getAll().map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
      <Link to="/note/add">
        <div className="bg-neutral-800 text-white w-12 h-12 text-2xl rounded-full flex items-center justify-center fixed right-4 bottom-4">
          +
        </div>
      </Link>
    </main>
  );
}

export default App;
