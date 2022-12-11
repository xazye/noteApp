import ListItem from "../components/ListComponent";
import { Stack } from "@mantine/core/";
import { TbNotes } from "react-icons/tb";
import AddButton from "../components/AddButton";
import { db } from "../backend/DB";
import _ from "lodash";
import { useState, useEffect } from "react";

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    db.notes.toArray().then((result) => {
      setNotes(result);
    });
  }, []);

  return (
    <div>
      <Stack sx={{ gap: "0px" }}>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TbNotes style={{ marginRight: "10px" }} />
          Notes List
          <span style={{ marginLeft: "auto" }}>{_.size(notes)}</span>
        </h1>
        {notes.map((note) => {
          return <ListItem key={note.id} note={note} />;
        })}
      </Stack>
      <AddButton />
    </div>
  );
};
export default NotePage;
