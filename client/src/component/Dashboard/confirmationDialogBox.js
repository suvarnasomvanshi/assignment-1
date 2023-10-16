import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function DeleteConfirmationDialog(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    props.deleteUser()
    setOpen(false);
  };

  return (
    <span>
      <Button variant='contained'  style={{display:'flex'}} onClick={handleOpen}>
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary"variant='contained'>
            Cancel
          </Button>
          <Button onClick={handleDelete} variant='contained'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}

export default DeleteConfirmationDialog;
