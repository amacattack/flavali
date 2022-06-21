import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faHistory,
  faPenToSquare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import EditableScoreTable from "./EditableScoreTable";
import { ThemeProvider, createTheme, Button } from "@mui/material";
import SignInModal from "./SignInModal/SignInModal";
import { useState } from "react";

function App(props) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  const handleLoginPress = () => {
    setIsSignInModalOpen(true);
  };

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
            <FontAwesomeIcon icon={faUserGroup} />
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


