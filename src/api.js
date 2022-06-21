export const DEFAULT_GAME_DATA = {
  players: [{ uid1: { name: "Player 1" } }, { uid2: { name: "Player 2" } }],
  categories: [
    {
      name: "Chocolate",
      foodScores: {
        foodName: "Food name",
        playerScores: [{ uid1: 0.0 }, { uid2: 0.0 }],
      },
    },
    {
      name: "Sweet/Sour",
      foodScores: {
        foodName: "Food name",
        playerScores: [{ uid1: 0.0 }, { uid2: 0.0 }],
      },
    },
  ],
};

// export const flavaliApi = () => {
//   getDataForGameId = () => {};
// };
