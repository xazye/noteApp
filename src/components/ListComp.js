import { Link } from "react-router-dom";
import { Text } from "@mantine/core";
const ListItem = ({ note }) => {
  return (
    <Text
      sx={(theme) => ({
        borderTop:
          theme.colorScheme === "dark" ? "1px solid white" : "1px solid black",
        padding: "16px 10px",
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.blue[0],
        },
      })}
      component={Link}
      to={`/note/${note.id}`}
      size="xl"
      color="dimmed"
    >
      {note.body}
    </Text>
  );
};
export default ListItem;
