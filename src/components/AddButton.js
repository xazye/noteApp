import { useMantineTheme } from "@mantine/core";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const AddButton = () => {
  const theme = useMantineTheme();
  return (
    <Link
      to="/note/new"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "4em",
        height: "4em",
      }}
    >
      <IoMdAddCircle
        style={{
          height: "100%",
          width: "100%",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.blue[0]
              : theme.colors.dark[5],
        }}
      />
    </Link>
  );
};
export default AddButton;
