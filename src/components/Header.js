import { Switch } from "@mantine/core";

const Header = ({ darkTheme, onClick }) => {
  return (
    <Switch
      checked={darkTheme}
      onChange={(event) => {
        onClick(event.currentTarget.checked);
      }}
      size="xl"
      sx={(theme) => ({
        marginTop: "10px",
        input: {
          "&:checked": { backgroundColor: theme.colors.dark[5] },
          backgroundColor: theme.colors.blue[0],
        },
      })}
    />
  );
};
export default Header;
