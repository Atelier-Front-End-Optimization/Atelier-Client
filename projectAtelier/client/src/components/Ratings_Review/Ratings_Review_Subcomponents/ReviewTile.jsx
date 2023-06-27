/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Box, Rating, Typography, Grid, Button} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const ReviewTile = ({ review, review: { body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary} }) => {
  // console.log('SINGLE REVIEW IN REVIEWTILE', review)
  // console.log(body);
  // console.log(summary);
  const [wasClicked, setWasClicked] = useState(false)
  const [helpful, setHelpful] = useState(helpfulness)

  let formattedDate;
  if (date) {
    formattedDate = new Date(date)
    .toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'})
  }

  const handleHelpful = () => {
    setHelpful(helpful+1);
    setWasClicked(true);
  };

  const handleNotHelpful = () => {
    setWasClicked(true);
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
        {body}
      </div>
      <div>
        {
          recommend ?
            <Grid><CheckIcon/> {'I recommend this product'} </Grid>
          : ''
        }
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
          onClick={handleNotHelpful}
          disabled={wasClicked}
        >
          No
        </Button>
      </div>
    </Box>
  );
};

export default ReviewTile;