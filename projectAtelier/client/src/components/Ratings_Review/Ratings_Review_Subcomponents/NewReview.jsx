import { Button, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from 'react';

const NewReview = ({ product_id, product_name}) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
////////////////////////////////////////////////////////
  return (
    <div>
      <Button
        style={{
          marginLeft: '30px',
          marginRight: '30px',
          marginBottom: '50px'
        }}
        variant='outlined'
        size='large'
        onClick={handleClickOpen}
        endIcon={<AddIcon/>}
      >
        add a Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Write Your Review...</DialogTitle>
        <DialogContent>
          <DialogTitle>...about {product_name}</DialogTitle>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewReview;