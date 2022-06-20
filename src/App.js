import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faHistory,
  faPenToSquare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import EditableScoreTable from "./EditableScoreTable";
import { ThemeProvider, createTheme, Button } from "@mui/material";

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
            <FontAwesomeIcon icon={faUserGroup} />
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

        <h2>Game Name</h2>

        <EditableScoreTable></EditableScoreTable>
        <br></br>
        <EditableScoreTable></EditableScoreTable>
        <br></br>
        <EditableScoreTable></EditableScoreTable>
        <br></br>
        <EditableScoreTable></EditableScoreTable>
        <br></br>
        <EditableScoreTable></EditableScoreTable>
        <br></br>
      </ThemeProvider>
    </div>
  );
}

export default App;
