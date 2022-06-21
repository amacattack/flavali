import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function PlayerNamesDialog() {
  const [open, setOpen] = React.useState(false); 
  const [mouse, setMouse] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setMouse(true);

  };

  const handleClose = () => {
    setOpen(false);
    setMouse(false);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faUserGroup} onClick={handleClickOpen} mouse={mouse}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Player Names</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the players names and they will be added to the game cards.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Player 1"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Player 2"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Enter</Button>
        </DialogActions>
      </Dialog>
      {/* onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)} */}
    </div>
  );
}

export default PlayerNamesDialog;