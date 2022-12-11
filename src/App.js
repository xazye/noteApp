import Header from "./components/Header";
import NotePages from "./pages/NotePages";
import Note from "./pages/Note";
import { BrowserRouter as  HashRouter, Route, Routes } from "react-router-dom";
import { Container, MantineProvider } from "@mantine/core";
import { useState } from "react";

function App() {
  const [darkTheme, setdarkTheme] = useState(true);
  return (
    <MantineProvider
      theme={{
        colorScheme: darkTheme === true ? "dark" : "light",
        fontFamily: "Roboto,sans-serif",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Container>
        <HashRouter basename="/noteApp">
          <Header
            darkTheme={darkTheme}
            onClick={(checked) => {
              setdarkTheme(checked);
            }}
          />

          <Routes>
            <Route path="/" element={<NotePages />} exact />

            <Route path="/note/:id" element={<Note />} exact />
          </Routes>
        </HashRouter>
      </Container>
    </MantineProvider>
  );
}

export default App;
