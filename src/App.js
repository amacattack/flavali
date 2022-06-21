import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faHistory,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import EditableScoreTable from "./EditableScoreTable";
import EditableGameName from "./EditableGameName";
import { ThemeProvider, createTheme, Button } from "@mui/material";
import PlayerNamesDialog from "./PlayerNamesDialog";

function App() {
  const theme = createTheme({
    palette: {
      // mode: "dark",
      primary: {
        main: "#5f5f5f",
      },
      // alternateTextColor: "black",
      // secondary: {
      //   main: "#ffffff",
      // },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="navBar">
          <h1>FLAVALI</h1>
          <div className="headerIcons">
            <PlayerNamesDialog></PlayerNamesDialog>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faHistory} />
            <Button variant="contained">LOG IN</Button>
          </div>
        </div>

        <hr
          style={{
            height: 1,
            backgroundColor: "#f7f7f7",
          }}
        />
        {/* GAME NAME */}
        <EditableGameName></EditableGameName>

        {/* GAME CARDS | SCORE TABLES */}
        <EditableScoreTable></EditableScoreTable>
        <EditableScoreTable></EditableScoreTable>
        <EditableScoreTable></EditableScoreTable>
        <EditableScoreTable></EditableScoreTable>
        <EditableScoreTable></EditableScoreTable>
        <br></br>

      </ThemeProvider>
    </div>
  );
}

export default App;
