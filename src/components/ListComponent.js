import { Link } from "react-router-dom";
import { Text } from "@mantine/core";
import _ from "lodash";
const ListItem = ({ note }) => {
  const title = (() => {
    const totle = _.split(note.body, "\n", 1)[0];
    if (_.size(totle) > 45) return totle.slice(0, 45);
    return totle;
  })();

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
      {title}
      {/* maybe good maybe bad; works */}
      <span style={{ display: "block", fontSize: "0.8em" }}>
        {new Date(note.created).toLocaleDateString()}
      </span>
    </Text>
  );
};
export default ListItem;
