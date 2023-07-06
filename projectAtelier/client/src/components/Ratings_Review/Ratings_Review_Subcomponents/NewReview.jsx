import { Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Rating, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Avatar, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReactFileReader from "react-file-reader";
import {useEffect, useState} from 'react';

const NewReview = ({ product_id, product_name}) => {
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(-1);
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(undefined);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

// console.log(photos)
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

  const handleRecommend = (e) => {
    setRecommend(e.target.value)
  };

  const handleSummary = (e) => {
    setSummary(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFiles = (file) => {
    console.log(file)
    photos.forEach(photo => file.base64.push(photo))
    console.log(file.base64)
    setPhotos(file.base64)
  }

  const handleReview = (e) => {
    e.preventDefault()
    if (body.length < 50) {setError(true); return}
    setError(false);
    console.log(rating);
    console.log(recommend);
    console.log(summary);
    console.log(body);
    console.log(name);
    handleClose();
  };
////////////////////////////////////////////////////////
  return (
    <Box
      components='form'
    >
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
        PaperProps={{ sx: { width: "80%", maxWidth: 'none', height: "90%"} }}
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
          <Box
              display="flex"
              alignItems="center"
              justify="center"
              justifyContent="center"
            >
              <FormControl error={error}>
                <RadioGroup
                  row
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                    onChange={handleRecommend}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                    onChange={handleRecommend}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          <DialogTitle>Characteristics *</DialogTitle>
            <Box
                display="flex"
                alignItems="center"
                justify="center"
                justifyContent="center"

              >
                  <FormControl error={error}>
                    {/* //////////////........//////// */}
                    <Stack direction='row'>
                      <Box marginTop='25px' marginRight='25px'>
                        <h3>Size</h3>
                      </Box>
                      <RadioGroup
                        row
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="A size too small"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={2}
                          control={<Radio />}
                          label="½ a size too small"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={3}
                          control={<Radio />}
                          label="A size too small"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={4}
                          control={<Radio />}
                          label="½ a size too big"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={5}
                          control={<Radio />}
                          label="A size too big"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                      </RadioGroup>
                    </Stack>
                    {/* //////////////........//////// */}
                    <Stack direction='row' marginTop='50px'>
                      <Box marginTop='25px' marginRight='25px'>
                        <h3>Width</h3>
                      </Box>
                      <RadioGroup
                        row
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="Too Narrow"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={2}
                          control={<Radio />}
                          label="Slightly Narrow"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={3}
                          control={<Radio />}
                          label="Perfect"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={4}
                          control={<Radio />}
                          label="Slightly Wide"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={5}
                          control={<Radio />}
                          label="Too Wide"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                      </RadioGroup>
                    </Stack>
                    {/* //////////////........//////// */}
                    <Stack direction='row' marginTop='50px'>
                      <Box marginTop='25px' marginRight='25px'>
                        <h3>Comfort</h3>
                      </Box>
                      <RadioGroup
                        row
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="Uncomfortable"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={2}
                          control={<Radio />}
                          label="Slightly uncomfortable"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={3}
                          control={<Radio />}
                          label="OK"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={4}
                          control={<Radio />}
                          label="Comfortable"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={5}
                          control={<Radio />}
                          label="Perfect"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                      </RadioGroup>
                    </Stack>
                    {/* //////////////........//////// */}
                    <Stack direction='row' marginTop='50px'>
                      <Box marginTop='25px' marginRight='25px'>
                        <h3>Quality</h3>
                      </Box>
                      <RadioGroup
                        row
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="Poor"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={2}
                          control={<Radio />}
                          label="Below Average"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={3}
                          control={<Radio />}
                          label="What I expected"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={4}
                          control={<Radio />}
                          label="Pretty great"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={5}
                          control={<Radio />}
                          label="Perfect"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                      </RadioGroup>
                    </Stack>
                    {/* //////////////........//////// */}
                    <Stack direction='row' marginTop='50px'>
                      <Box marginTop='25px' marginRight='25px'>
                        <h3>Length</h3>
                      </Box>
                      <RadioGroup
                        row
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="Runs short"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={2}
                          control={<Radio />}
                          label="Runs slightly short"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={3}
                          control={<Radio />}
                          label="Perfect"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={4}
                          control={<Radio />}
                          label="Runs slightly long"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={5}
                          control={<Radio />}
                          label="Runs long"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                      </RadioGroup>
                    </Stack>
                    {/* //////////////........//////// */}
                    <Stack direction='row' marginTop='50px'>
                      <Box marginTop='25px' marginRight='25px'>
                        <h3>Fit</h3>
                      </Box>
                      <RadioGroup
                        row
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="Runs tight"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={2}
                          control={<Radio />}
                          label="Runs slightly tight"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={3}
                          control={<Radio />}
                          label="Perfect"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={4}
                          control={<Radio />}
                          label="Runs slightly long"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                        <FormControlLabel
                          value={5}
                          control={<Radio />}
                          label="Runs long"
                          labelPlacement="top"
                          // onChange={handleRecommend}
                        />
                      </RadioGroup>
                    </Stack>
                  </FormControl>
              </Box>
          <DialogTitle>Review summary</DialogTitle>
            <TextField
              margin="dense"
              type="text"
              fullWidth
              variant="filled"
              placeholder='Example: Best purchase ever!'
              inputProps={{ maxLength: 60 }}
              value={summary}
              onChange={handleSummary}
            />
          <DialogTitle>Review body *</DialogTitle>
            <TextField
              label='Required'
              required
              error={error}
              margin="dense"
              type="text"
              fullWidth
              variant="filled"
              placeholder='Why did you like the product or not?'
              inputProps={{ minLength: 50, maxLength: 1000 }}
              multiline
              rows={10}
              value={body}
              onChange={handleBody}
            />
            <span>
               {
                50 - body.length <= 0 ?
                  'Minimum reached'
                : `Minimum required characters left: [${50 - body.length}]`
              }
            </span>
          <DialogTitle>Upload your photos</DialogTitle>
              <Box
                style={{marginBottom: '20px',}}
                display="flex"
                alignItems="center"
                justify="center"
                justifyContent="center"
              >
                {
                  photos.length > 0 ?
                  <Stack direction='row' spacing={1}>
                    {photos.map((photo, index) => {

                      return (
                        index < 5 ?
                          <Avatar
                            key={index}
                            alt='i'
                            src={photo}
                            variant='square'
                          />
                        : ''
                      )
                      })}
                  </Stack>
                  : ''
                }
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justify="center"
                justifyContent="center"
               >
                {
                  photos.length < 5 ?
                    <ReactFileReader
                      fileTypes={[".png", ".jpg"]}
                      base64={true}
                      multipleFiles={true}
                      handleFiles={handleFiles}
                    >
                      {
                        <Button
                        size='small'
                        variant='outlined'
                        >
                          Add photos
                        </Button>
                      }
                    </ReactFileReader>
                  : ''
                }
              </Box>


          <DialogTitle>What is your nickname? *</DialogTitle>
            <TextField
                label='Required'
                required
                margin="dense"
                type="text"
                fullWidth
                variant="filled"
                placeholder='Example: jackson11!'
                inputProps={{ maxLength: 60 }}
                value={name}
                onChange={handleName}
              />
            <span>For privacy reasons, do not use your full name or email address</span>
          <DialogTitle>Your email *</DialogTitle>
          <TextField
                label='Required'
                required
                margin="dense"
                type="text"
                fullWidth
                variant="filled"
                placeholder='Example: jackson11@email.com'
                inputProps={{ maxLength: 60 }}
                value={email}
                onChange={handleEmail}
              />
            <span>For authentication reasons, you will not be emailed</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  onClick={handleReview}>Submit Review</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewReview;