import data from "../media/data";
import { useParams, Link } from "react-router-dom";
import { useMantineTheme } from "@mantine/core";
import { useState } from "react";
import _ from "lodash";
import { BiLeftArrow } from "react-icons/bi";

const Note = () => {
  const theme = useMantineTheme();
  const urlparams = useParams();
  const note = _.find(data, (o) => {
    return o.id === parseInt(urlparams.id);
  });
  const [value, setValue] = useState(note?.body);
  return (
    <div>
      <Link to="/">
        <h1
          style={{
            display: "inline-block",
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[0]
                : theme.colors.dark[5],
          }}
        >
          <BiLeftArrow />
        </h1>
      </Link>

      <textarea
        value={value}
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
        onChange={(event) => setValue(event.currentTarget.value)}
      ></textarea>
    </div>
  );
};
export default Note;
