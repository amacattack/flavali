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
import SignInModal from "./SignInModal/SignInModal";
import { useState } from "react";
// import { DEFAULT_GAME_DATA } from "./api";

function App(props) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

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

  const handleLoginPress = () => {
    setIsSignInModalOpen(true);
  };

  // const renderScoreTables = () => {
  //   const scoreTables = [];

  //   DEFAULT_GAME_DATA.categories.forEach(category => (console.log(category)))
  // };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SignInModal
          isSignInModalOpen={isSignInModalOpen}
          onClose={() => setIsSignInModalOpen(false)}
          uiConfig={props.uiConfig}
          auth={props.auth}
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
        />
        <div className="navBar">
          <h1>FLAVALI</h1>
          <div className="headerIcons">
            <PlayerNamesDialog></PlayerNamesDialog>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faHistory} />
            <Button variant="contained" onClick={handleLoginPress}>
              {isSignedIn ? "LOG OUT" : "LOG IN"}
            </Button>
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

        {/* {
          renderScoreTables()
        } */}

      </ThemeProvider>
    </div>
  );
}

export default App;


