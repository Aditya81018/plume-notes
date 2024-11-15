import { useState } from "react";
import Input from "../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import Notes from "../db/notes";

export default function AddNotePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  function onSubmit() {
    setSubmitDisabled(true);
    Notes.addNote(title, content, tags.split(" "));
    navigate("/");
  }

  return (
    <main className="p-4 space-y-4">
      <div className="text-2xl font-bold">Add a new note</div>
      <div className="px-4">
        <label htmlFor="title" className="font-semibold capitalize">
          title
        </label>
        <br />
        <Input
          name="title"
          type="text"
          placeholder="My Note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="px-4">
        <label htmlFor="content" className="font-semibold capitalize">
          content
        </label>
        <br />
        <textarea
          className={`bg-neutral-200 px-4 py-2 rounded-md w-full`}
          placeholder={`The contents of ${title || "My Note"}`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="px-4">
        <label htmlFor="tags" className="font-semibold capitalize">
          tags (optional)
        </label>
        <br />
        <Input
          name="tags"
          type="text"
          placeholder={`Tags for ${title || "My Note"}`}
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-2">
        <Link to={"/"}>
          <button className="bg-neutral-300 px-4 py-2 rounded-md">
            Cancel
          </button>
        </Link>
        <button
          onClick={onSubmit}
          disabled={submitDisabled}
          className="bg-neutral-800 text-white px-4 py-2 rounded-md disabled:brightness-50"
        >
          Submit
        </button>
      </div>
    </main>
  );
}
