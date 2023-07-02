/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import { Box, Rating, Button} from '@mui/material';
import averageRating from "../../../Middleware/averageRating.js";

const RatingSummary = ({ ratings}) => {
  let avgRating;

  if (ratings) {
    avgRating = Number(averageRating(ratings))
  }

////////////////////////////////////////////////////////
  return (
    <Box>
      {
        avgRating ?
          <div>
            <span style={{fontSize: 'xxx-Large'}}>{avgRating}</span>
            <Rating
              name="Average Review"
              value={avgRating}
              precision={0.25}
              size='small'
              readOnly
          />
          </div>
        : ''
      }
    </Box>
  );
};

export default RatingSummary;