// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHistory } from "@fortawesome/free-solid-svg-icons";
import EditableScoreTable from "./EditableScoreTable";
import EditableGameName from "./EditableGameName";
import { ThemeProvider, createTheme, Box, Button } from "@mui/material";
import PlayerNamesDialog from "./PlayerNamesDialog";
import SignInModal from "./SignInModal/SignInModal";
import { useState, useReducer } from "react";
import "./App.css";
import {
  DEFAULT_GAME_DATA,
  reducer,
  updateCategoryName,
  addCategory,
  deleteCategory,
  calculateAverageForCategory,
} from "./state";
import { Link } from "react-router-dom";

function App(props) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [state, dispatch] = useReducer(reducer, DEFAULT_GAME_DATA);
  // console.log('state: ', state)

  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
    palette: {
      primary: {
        main: "#faa307",

      },
      secondary: {
        // main: "#eae6e5",
        main: "#416165",
      },
      text: {
        primary: "#ffff",
      },
    },
  });

  const handleLoginPress = () => {
    setIsSignInModalOpen(true);
  };

  // Rendering Score Tables
  const renderScoreTables = () => {
    const scoreTables = state.categories.map((category, categoryIdx) => (
      <EditableScoreTable
        category={category.name}
        key={category.name}
        playerNames={state.players}
        foodRows={category.foodRows}
        dispatch={dispatch}
        setCategoryName={(newCategoryName) =>
          dispatch(updateCategoryName(categoryIdx, newCategoryName))
        }
        categoryIdx={categoryIdx}
      />
    ));
    return scoreTables;
  };

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
            <PlayerNamesDialog
              dispatch={dispatch}
              players={state.players}
            ></PlayerNamesDialog>
            {/* <FontAwesomeIcon icon={faHistory} /> */}
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

        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box width="900px">
            {/* GAME NAME */}
            <EditableGameName></EditableGameName>

            {/* GAME CARDS | SCORE TABLES */}
            {renderScoreTables()}
            <br></br>
            <Box display="flex" flexDirection="column" mb={theme.spacing(4)}>
              <div className="categoryButtons">
                <Button
                  variant="contained"
                  onClick={() => dispatch(deleteCategory())}
                >
                  Delete Category
                </Button>
                <Button
                  variant="contained"
                  onClick={() => dispatch(addCategory())}
                >
                  Add Category
                </Button>
              </div>

              <Link to='/game-summary' className='react-router-link'>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => dispatch(calculateAverageForCategory(categoryIdx))}
                >
                  Finish Game
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
