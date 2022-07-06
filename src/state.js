/*
 ___ _   _ ___ _____ ___    _    _       ____ _____  _  _____ _____ 
|_ _| \ | |_ _|_   _|_ _|  / \  | |     / ___|_   _|/ \|_   _| ____|
 | ||  \| || |  | |  | |  / _ \ | |     \___ \ | | / _ \ | | |  _|  
 | || |\  || |  | |  | | / ___ \| |___   ___) || |/ ___ \| | | |___ 
|___|_| \_|___| |_| |___/_/   \_\_____| |____/ |_/_/   \_\_| |_____|
                                                                    
*/

export const DEFAULT_GAME_DATA = {
  players: ["Player 1", "Player 2"],
  categories: [
    {
      name: "Chocolate",
      foodRows: [
        {
          foodName: "Item 1",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
        {
          foodName: "Item 2",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
      ],
    },
    {
      name: "Sweet",
      foodRows: [
        {
          foodName: "Item 1",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
        {
          foodName: "Item 2",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
      ],
    },
    {
      name: "Salty",
      foodRows: [
        {
          foodName: "Item 1",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
        {
          foodName: "Item 2",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
      ],
    },
    {
      name: "Spicy",
      foodRows: [
        {
          foodName: "Item 1",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
        {
          foodName: "Item 2",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
      ],
    },
    {
      name: "Wild",
      foodRows: [
        {
          foodName: "Item 1",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
        {
          foodName: "Item 2",
          playerScores: [0.0, 0.0],
          average: 0.0,
        },
      ],
    },
  ],
};

/*
 ____  _____ ____  _   _  ____ _____ ____  
|  _ \| ____|  _ \| | | |/ ___| ____|  _ \ 
| |_) |  _| | | | | | | | |   |  _| | |_) |
|  _ <| |___| |_| | |_| | |___| |___|  _ < 
|_| \_\_____|____/ \___/ \____|_____|_| \_\
                                           
*/
export const reducer = function reducer(state, action) {
  let newState;
  switch (action.type) {
    // Player action listeners
    case "ADD_PLAYER": {
      const updatedPlayers = [...state.players, action.newPlayerName];

      // Each new player should add a new foodRow to each category
      // Iterate over each category
      const updatedCategories = state.categories.map((category) => {
        // Update existing food rows with new score of 0 for new player
        const updatedFoodRows = category.foodRows.map((foodRow) => {
          return { ...foodRow, playerScores: [...foodRow.playerScores, 0.0] };
        });

        // Create a new food row for new player's item
        const newFoodRow = {
          foodName: `Item ${category.foodRows.length + 1}`, // If 2 food rows, new foodName will be "Item 3"
          playerScores: updatedPlayers.map(() => 0.0), // return a new 0.0 score for each player
          average: 0.0,
        };

        return {
          name: category.name,
          foodRows: [...updatedFoodRows, newFoodRow],
        };
      });
      console.log("updatedCategories: ", updatedCategories);

      return {
        players: updatedPlayers,
        categories: updatedCategories,
      };
    }

    case "DELETE_PLAYER":
      return {
        // TODO:
      };

    case "UPDATE_PLAYER_NAME":
      const updatedPlayers = state.players.map((playerName, idx) => {
        if (action.playerIdx === idx) {
          // Update player name at the action's specified index
          return action.newPlayerName;
        } else {
          return playerName;
        }
      });
      return { players: updatedPlayers, categories: state.categories };

    // Category action listeners
    case "UPDATE_CATEGORY_NAME":
      // TODO
      return state;

    case "ADD_CATEGORY":
      break;

    case "UPDATE_SCORE_FOR_ITEM":
      break;

    default:
      console.error("unknown action: ", action);
      return state;
  }
  return newState;
};

/*
    _    ____ _____ ___ ___  _   _ ____  
   / \  / ___|_   _|_ _/ _ \| \ | / ___| 
  / _ \| |     | |  | | | | |  \| \___ \ 
 / ___ \ |___  | |  | | |_| | |\  |___) |
/_/   \_\____| |_| |___\___/|_| \_|____/ 
                                         
*/
export const addPlayer = (newPlayerName) => {
  return {
    type: "ADD_PLAYER",
    newPlayerName,
  };
};

export const removePlayer = (playerIdxToDelete) => {
  return {
    type: "DELETE_PLAYER",
    playerIdxToDelete,
  };
};

export const updatePlayerName = (playerIdx, newPlayerName) => {
  return {
    type: "UPDATE_PLAYER_NAME",
    playerIdx,
    newPlayerName,
  };
};


export const updateCategoryName = (categoryIdx, newCategoryName) => {
  // TODO:
  return {
    type: "UPDATE_CATEGORY_NAME",
    categoryIdx,
    newCategoryName,
  }
}