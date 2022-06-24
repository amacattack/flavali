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
import { faCirclePlus, faUserGroup } from "@fortawesome/free-solid-svg-icons";


function PlayerNamesDialog() {
  const [isOpen, isSetOpen] = React.useState(false);
  const [players, setPlayers] = React.useState(["Player 1", "Player 2"]);

  const handleClickOpen = () => {
    isSetOpen(true);
  };

  const handleClose = () => {
    isSetOpen(false);
  };

  const renderPlayerTextFields = () => {
    const playerTextFields = []
    
    players.forEach((player, index) => {
      playerTextFields.push(
        <TextField
          key={player}
          label={player}
          autoFocus
          margin="dense"
          fullWidth
          variant="standard"
        />
      );
      console.log("player: ", player)
      console.log("index: ", index)
    })
    return playerTextFields;
  }

  // ['Player 1', 'Player 2']

  // ['Player 1', 'Player 2', 'Player 3'...]

  const addPlayer = () => {
    setPlayers()
  }

  

  return (
    <div>
      <Button>
        <FontAwesomeIcon icon={faUserGroup} onClick={handleClickOpen} />
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Player Names</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the players names and they will be added to the game cards.
          </DialogContentText>
          {renderPlayerTextFields()}
          <Grid container justifyContent="center">
            <Button>
              <FontAwesomeIcon icon={faCirclePlus} onClick={addPlayer}/>
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