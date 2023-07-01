/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Box, Rating, Modal, Button, Stack, Avatar} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

const ReviewTile = ( {review: { review_id, body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary}, upvoteHelpful, reportReview}) => {
  const [wasClicked, setWasClicked] = useState(false);
  const [helpful, setHelpful] = useState(helpfulness);
  const [showMore, setshowMore] = useState(false);

  let formattedDate;
  if (date) {
    formattedDate = new Date(date)
    .toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'})
  }

  const handleHelpful = async () => {
    //invoke put request
    try {
    await upvoteHelpful(review_id)
    setHelpful(helpful+1);
    setWasClicked(true);
    } catch (err) {
      alert('Oops! We ran into a problem submitting your vote. Please try again in a few moments!')
    }
  };

  const handleReport = async () => {
    try {
    await reportReview(review_id)
    setWasClicked(true);
    } catch (err) {
      alert('Oops! We ran into a problem submitting your vote. Please try again in a few moments!')
    }
  };

  const handleShow = () => {
    setshowMore(!showMore);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

 ////////////////////////////////////////////////////////
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        borderBottomStyle: 'solid',
        margin: 3,
        padding: 1
      }}
    >
      <div>
        <Rating name="Item Review" value={rating} precision={0.25} size='small' readOnly />
      </div>
      <div>
        <p>
          {reviewer_name}, {formattedDate}
        </p>
      </div>
      <div>
        <h2 style={{
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {summary}
        </h2>
      </div>
      <div>
        { body.length > 250 ?
          <div>
            <p>
              {showMore ? body : `${body.substring(0, 250)}...`}
            </p>
            <Button
              variant='contained'
              size='small'
              onClick={handleShow}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        : body}
      </div>
      {photos.length > 0 ?
          <Stack direction='row' spacing={1}>
            {photos.map((photo) => {
              const [open, setOpen] = useState(false);
              const handleOpenClose = () => {
                setOpen(!open)
              };

              return (
                <div key={photo.id}>
                  <Avatar
                    alt='i'
                    src={photo.url}
                    variant='square'
                    onClick={handleOpenClose}
                  />
                  <Modal
                    open={open}
                    onClose={handleOpenClose}
                  >
                    <Box sx={modalStyle}>
                      <img src={photo.url} alt='User Review Photo'/>
                    </Box>
                  </Modal>
                </div>
              )
            })}
          </Stack>
        : ''}
      <Box
        sx={{
          '& > legend': { mt: 2 },
          margin: 3,
          padding: 1,
          background: 'rgba(52, 52, 52, 0.35)',
          display: [response ? 'block' : 'none']
        }}
      >
        <p style={{fontWeight: 'bold'}}
        >
          {'Response from seller:'}
        </p>
        <p>
          {response}
        </p>
      </Box>
      <div>
        {recommend ?
            <Box><CheckIcon/> {'I recommend this product'} </Box>
        : ''}
      </div>
      <div>
        <span>Helpful?</span>

        <Button
          variant='text'
          size='small'
          // color='black'
          onClick={handleHelpful}
          disabled={wasClicked}
        >
          Yes ({helpful})
        </Button>

        <span>|</span>

        <Button
          variant='text'
          size='small'
          // color='black'
          onClick={handleReport}
          disabled={wasClicked}
        >
          Report
        </Button>
      </div>
    </Box>
  );
};

export default ReviewTile;