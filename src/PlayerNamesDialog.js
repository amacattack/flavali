import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@material-ui/core/Grid";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import DeletePlayerDialog from './DeletePlayerDialog';

// Add and Delete Players Dialog 
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
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <FontAwesomeIcon icon={faUserGroup} />
      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
            <DeletePlayerDialog players={players} setPlayers={setPlayers} />
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