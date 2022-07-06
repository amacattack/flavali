import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

// Delete Players Dialog 
function DeletePlayerDialog(props) {
    const [isOpen, isSetOpen] = React.useState(false);

    const handleClickOpen = () => {
        isSetOpen(true);
    };

    const handleClose = () => {
        isSetOpen(false);
    };

    // Delete Player Text Field
    const deletePlayer = () => {
        console.log('delete player')

        // if (props.players.length > 2) {
        //   setPlayers([
        //     ...props.players.slice(0, props.players.length - 1)
        //   ]);
        // }
    }

    return (
        <div>
            {/* open dialog need to be called  */}
            <Button onClick={handleClickOpen}>
                <FontAwesomeIcon icon={faCircleMinus} />
            </Button>
            <Dialog open={isOpen} onClose={handleClose} >
                <DialogTitle>
                    Delete Player?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Removing a player will remove an item from all of the tables.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {/* DeletePlayer & handleClose need to be called */}
                    <Button onClick={() => {
                        deletePlayer();
                        handleClose();
                    }}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default DeletePlayerDialog;