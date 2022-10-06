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
      category_average: 0.0,
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
      category_average: 0.0,
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
      category_average: 0.0,
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
      category_average: 0.0,
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
      category_average: 0.0,
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
  switch (action.type) {
    // Player action listeners

    case "ADD_PLAYER": {
      // creates a new list with newPlayerName appended to the end 
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


      return {
        players: updatedPlayers,
        categories: updatedCategories,
      };
    }

    case "DELETE_PLAYER": {
      if (state.players.length <= 2) {
        return state;
      }
      // Remove last player from players array
      const updatedPlayers = state.players.slice(0, state.players.length - 1);

      // Removing a player shoud remove a foodRow from each category 
      // Iterate over each category
      // Build up new list of categories where
      // 1. last foodRow is removed from each category and
      // 2. last score of each foodRow is removed
      const updatedCategories = state.categories.map((category) => {
        const updatedCategory = { ...category }

        // 1. delete last existing foodRow for current category
        const remainingFoodRows = category.foodRows.slice(0, category.foodRows.length - 1);

        // 2. remove last score from remaining foodRows for current category
        const updatedFoodRows = remainingFoodRows.map((foodRow) => {
          const updatedFoodRowScores = foodRow.playerScores.slice(0, foodRow.playerScores.length - 1);
          return { ...foodRow, playerScores: updatedFoodRowScores };
        })

        // return updated category with one less foodRow and one less score on each foodRow
        updatedCategory.foodRows = updatedFoodRows;
        return updatedCategory;
      })

      return {
        players: updatedPlayers,
        categories: updatedCategories,
      };
    }


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
      const updatedCategories = state.categories.map((category, idx) => {
        if (action.categoryIdx === idx) {
          // Update category name at the action's specified index

          // This would update the old version of the state - bad practice
          // category.name = action.newCategoryName;

          // Returns a new category object with update name
          return {
            ...category,
            name: action.newCategoryName,
          };
        } else {
          return category;
        }
      });

      return {
        ...state,
        categories: updatedCategories,
      };

    case "ADD_CATEGORY":
      const category = {
        name: `Category ${state.categories.length + 1}`,
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
      };

      const updatedCategoryArray = [...state.categories, category];

      return {
        ...state,
        categories: updatedCategoryArray,
      };


    case "DELETE_CATEGORY":
      const deleteCategories = state.categories.slice(0, state.categories.length - 1);

      return {
        ...state,
        categories: deleteCategories,
      };

    case "UPDATE_ITEM_NAME": {
      // make a copy of the categories to avoid updating the state object directly
      const categoriesCopy = [...state.categories];

      // update the relevant piece of state (item name)
      const categoryToUpdate = categoriesCopy[action.categoryIdx];
      const foodRowToUpdate = categoryToUpdate.foodRows[action.itemIdx];
      foodRowToUpdate.foodName = action.newItemName;

      return {
        ...state,
        categories: categoriesCopy,
      };
    }

    case "UPDATE_SCORE_FOR_ITEM":
      const categoriesCopied = [...state.categories];

      const categoryToUpdate = categoriesCopied[action.categoryIdx];
      const foodRowToUpdate = categoryToUpdate.foodRows[action.itemIdx];

      foodRowToUpdate.playerScores[action.scoreIdx] = action.newScore;
      const sum = foodRowToUpdate.playerScores.reduce((a, b) => a + b, 0);
      // updates average for item
      foodRowToUpdate.average =  sum / foodRowToUpdate.playerScores.length;

      return {
        ...state,
        categories: categoriesCopied,
      };

      case "CALCULATE_AVERAGE_FOR_CATEGORY": {
        const categoriesCopied = [...state.categories];

        const categoryToCalculate = categoriesCopied[action.categoryIdx];

        // The "reduce" call below returns the same value as this "forEach" call
        // let categoryAveragesSum = 0 
        // categoryToCalculate.foodRows.forEach((foodRow) => categoryAveragesSum += foodRow.average )

        const categoryAveragesSum = categoryToCalculate.foodRows.reduce((foodRow1, foodRow2) => foodRow1.average + foodRow2.average, 0);
        
        const categoryAverage = categoryAveragesSum / categoryToCalculate.foodRows.length;

        categoryToCalculate.average = categoryAverage;
        
        return {
          ...state,
          categories: categoriesCopied,
        };
      }
        
      //   const categoryToCalculate = state.categories.average.map((category, categoryIdx) => {

      //     if (action.categoryIdx === categoryIdx) {

      //       //add item 1 average & item 2 average / 2
      //       categoryAverage = 


      // return {

      // };

    default: 
      console.error("unknown action: ", action);
      return state;
  }
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

export const removePlayer = () => {
  return {
    type: "DELETE_PLAYER",
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
  return {
    type: "UPDATE_CATEGORY_NAME",
    categoryIdx,
    newCategoryName,
  };
};

export const addCategory = () => {
  return {
    type: "ADD_CATEGORY",
  };
};

export const deleteCategory = () => {
  return {
    type: "DELETE_CATEGORY",
  };
};

export const updateItemName = (categoryIdx, itemIdx, newItemName) => {
  return {
    type: "UPDATE_ITEM_NAME",
    categoryIdx,
    itemIdx,
    newItemName,
  };
};

export const updateScoreForItemThunk = (dispatch) => {
  return (categoryIdx, itemIdx, scoreIdx, newScore) => {
    return {
      type: "UPDATE_SCORE_FOR_ITEM",
      categoryIdx,
      itemIdx,
      scoreIdx, // index of the player whose score is changing
      newScore,
    };
  
    dispatch(calculateAverageForCategory(categoryIdx));
  }

};

export const calculateAverageForCategory = (categoryIdx) => {
  return {
    type: "CALCULATE_AVERAGE_FOR_CATEGORY",
    categoryIdx,
  };
};