import { Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from 'react';

const NewReview = ({ product_id, product_name}) => {

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(-1);

  const labels = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great!',
  };

  const getLabelText = (rating) => {
    return `${rating} Star${rating !== 1 ? 's' : ''}, ${labels[rating]}`;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReview = () => {
    console.log(rating);
    handleClose();
  }
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
          <DialogContentText>...about {product_name}</DialogContentText>
          <DialogTitle>Overall rating *</DialogTitle>
            <Box
              display="flex"
              alignItems="center"
              justify="center"
              justifyContent="center"
            >
              <Rating
                name="hover-feedback"
                value={rating}
                getLabelText={getLabelText}
                onChange={(event, newRating) => {
                  setRating(newRating);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {rating !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
              )}
            </Box>
          <DialogTitle>Do you recommend this product? *</DialogTitle>
          <DialogTitle>Characteristics *</DialogTitle>
          <DialogTitle>Review summary</DialogTitle>
          <DialogTitle>Review body *</DialogTitle>
          <DialogTitle>Upload your photos</DialogTitle>
          <DialogTitle>What is your nickname? *</DialogTitle>
          <DialogTitle>Your email *</DialogTitle>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleReview}>Submit Review</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewReview;