import { MouseEvent, useState } from "react";
import Notes from "../db/notes";
import { ChevronLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

export default function MemorizeNotePage() {
  const noteID = location.search.substring(1).split("=")[1];
  const note = Notes.getById(String(noteID))!;
  const wordList = note.content.split(" ");
  const [options, setOptions] = useState(randomize(wordList.slice(0, 6)));
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);

  function onOptionClick(event: MouseEvent) {
    const value = event.currentTarget.innerHTML;
    if (value === wordList[progress]) {
      setProgress(progress + 1);
      const optionID = Number(event.currentTarget.id.replace("option-", ""));
      options.splice(optionID, 1);
      setOptions(options);
      setError(false);

      if (options.length === 0) {
        setOptions(randomize(wordList.slice(progress + 1, progress + 7)));
      }
    } else setError(true);
  }

  function onReset() {
    setProgress(0);
    setOptions(randomize(wordList.slice(0, 6)));
    setError(false);
  }

  return (
    <main className="w-screen overflow-x-hidden min-h-screen p-8 pt-32 pb-48 flex flex-col items-center gap-12 justify-between">
      <Link to="/" className="fixed top-4 left-4">
        <button>
          <ChevronLeft />
        </button>
      </Link>
      <button className="fixed top-4 right-4" onClick={onReset}>
        <RotateCcw />
      </button>
      <div className="w-full flex flex-col gap-12 items-center">
        <div className="text-2xl font-bold text-neutral-600 text-center">
          {note.title}
        </div>
        <div className="text-2xl font-bold text-neutral-800 flex flex-wrap gap-2 justify-center">
          {wordList.map((word, i) => (
            <span
              className={`border-b-2 border-black ${
                i > progress
                  ? "hidden"
                  : i === progress
                  ? "text-transparent"
                  : ""
              } ${
                i === progress && error ? "border-red-600 : border-b-4" : ""
              }`}
              key={i}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      <div className="font-bold text-neutral-600 flex flex-wrap gap-2 justify-center">
        {options.map((word, i) => (
          <button
            key={i}
            id={`option-${i}`}
            className="bg-neutral-300 px-4 py-1 rounded-md"
            onClick={onOptionClick}
          >
            {word}
          </button>
        ))}
      </div>
    </main>
  );
}

function randomize(list: string[]): string[] {
  const newList: string[] = [];
  const listCopy: string[] = JSON.parse(JSON.stringify(list));

  for (let i = 0; i < list.length; i++) {
    const j = Math.floor(Math.random() * listCopy.length);
    newList.push(listCopy[j]);
    listCopy.splice(j, 1);
  }

  return newList;
}
