import { useParams, useNavigate } from "react-router-dom";
import { useMantineTheme } from "@mantine/core";
import { useState, useEffect } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Note = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const urlparams = useParams();

  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
    window.scrollTo(0, 0);
  }, []);

  const getNote = async () => {
    if (urlparams.id === "new") return;
    let response = await fetch(`http://localhost:3004/notes/${urlparams.id}`);
    setNote(await response.json());
  };
  const updateNote = async () => {
    await fetch(`http://localhost:3004/notes/${urlparams.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
    navigate("/");
  };
  const deleteNote = async () => {
    await fetch(`http://localhost:3004/notes/${urlparams.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(note),
    });
    navigate("/");
  };
  const createNote = async () => {
    await fetch(`http://localhost:3004/notes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...note,
        updated: new Date(),
        created: new Date(),
      }),
    });
    navigate("/");
  };

  const handleSubmit = () => {
    if (urlparams.id !== "new" && !note.body) deleteNote();
    else if (urlparams.id !== "new") updateNote();
    else if (urlparams.id === "new" && note !== null) createNote();
    navigate("/");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "22px 0",
        }}
      >
        <h1
          style={{
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[0]
                : theme.colors.dark[5],
          }}
        >
          <BiLeftArrow onClick={handleSubmit} />
        </h1>

        <h1
          style={{
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[0]
                : theme.colors.dark[5],
          }}
        >
          <MdDelete onClick={deleteNote} />
        </h1>
      </div>

      <textarea
        value={note?.body}
        style={{
          fontSize: "1.2em",
          border: "none",
          width: "100%",
          resize: "none",
          height: "70ch",
          padding: "16px 12px",
          borderRadius: "6px",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.dark[5],
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.blue[0],
        }}
        onChange={(event) =>
          setNote({ ...note, body: event.currentTarget.value })
        }
      ></textarea>
    </div>
  );
};
export default Note;
