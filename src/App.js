import Header from "./components/Header";
import NotePages from "./pages/NotePages";
import Note from "./pages/Note";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Router>
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
        </Router>
      </Container>
    </MantineProvider>
  );
}

export default App;
