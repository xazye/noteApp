import data from "../media/data";
import ListItem from "../components/ListComp";
import { Stack } from "@mantine/core/";
import { TbNotes } from "react-icons/tb";
import _ from "lodash";

const NotePage = () => {
  return (
    <Stack sx={{ gap: "0px" }}>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TbNotes style={{ marginRight: "10px" }} />
        Notes List
        <span style={{ marginLeft: "auto" }}>{_.size(data)}</span>
      </h1>
      {data.map((note) => {
        return <ListItem key={note.id} note={note} />;
      })}
    </Stack>
  );
};
export default NotePage;
