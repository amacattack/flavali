import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function PlayerNamesDialog() {
  const [isOpen, isSetOpen] = React.useState(false);
  const [players, setPlayers] = React.useState(["Player 1", "Player 2"]);

  const handleClickOpen = () => {
    isSetOpen(true);
  };

  const handleClose = () => {
    isSetOpen(false);
  };

  // Rendering Player Text Fields
  const renderPlayerTextFields = () => {
    const playerTextFields = players.map((player) =>
      <TextField
        key={player}
        label={player}
        autoFocus
        margin="dense"
        fullWidth
        variant="standard"
      />
    );
    return playerTextFields;
  }

  // Add Player Text Field
  const addPlayer = () => {
    const newPlayerNumber = players.length + 1;
    const newPlayerName = `Player ${newPlayerNumber}`;

    setPlayers(players => [...players, newPlayerName]);
    console.log("add players: ", players)
  }

  // Remove Player Text Field 
  const deletePlayer = () => {
    if (players.length > 2) {
      setPlayers([
        ...players.slice(0, players.length - 1)
      ]);
    }
    console.log("minus players: ", players)
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <FontAwesomeIcon icon={faUserGroup} />
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Player Names</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the players names and they will be added to the game cards.
          </DialogContentText>
          {renderPlayerTextFields()}
          <Grid container justifyContent="center">
            <Button onClick={addPlayer}>
              <FontAwesomeIcon icon={faCirclePlus} />
            </Button>
            <Button onClick={deletePlayer}>
              <FontAwesomeIcon icon={faCircleMinus} />
            </Button>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PlayerNamesDialog;