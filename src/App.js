// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
// import {
//   faHistory,
//   faPenToSquare,
// } from "@fortawesome/free-solid-svg-icons";
import EditableScoreTable from "./EditableScoreTable";
import EditableGameName from "./EditableGameName";
import { ThemeProvider, createTheme, Button } from "@mui/material";
import PlayerNamesDialog from "./PlayerNamesDialog";
import SignInModal from "./SignInModal/SignInModal";
import { useState, useReducer } from "react";
import { DEFAULT_GAME_DATA, reducer, updateCategoryName, addCategory, deleteCategory} from "./state";

function App(props) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [state, dispatch] = useReducer(reducer, DEFAULT_GAME_DATA)
  console.log('state: ', state)

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5f5f5f",
      },
    },
  });

  const handleLoginPress = () => {
    setIsSignInModalOpen(true);
  };

  // Rendering Score Tables
  const renderScoreTables = () => {
    const scoreTables = state.categories.map((category, categoryIdx) =>
      <EditableScoreTable
        category={category.name}
        key={category.name}
        playerNames={state.players}
        foodRows={category.foodRows}
        dispatch={dispatch}
        setCategoryName={(newCategoryName) => dispatch(updateCategoryName(categoryIdx, newCategoryName))}
      />
    );
    return scoreTables;
  }

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
            <PlayerNamesDialog dispatch={dispatch} players={state.players}></PlayerNamesDialog>
            {/* <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faHistory} /> */}
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
        {renderScoreTables()}
        <br></br>
        <div className="categoryButton">
          <button onClick={() => dispatch(deleteCategory())}>Delete Category</button>
          <button onClick={() => dispatch(addCategory())}>Add Category</button>
        </div>
    
      </ThemeProvider>
    </div>
  );

}

export default App;


