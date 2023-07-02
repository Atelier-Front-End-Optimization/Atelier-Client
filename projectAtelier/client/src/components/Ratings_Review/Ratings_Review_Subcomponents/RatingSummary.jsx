/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import { Box, Rating, Button} from '@mui/material';
import averageRating from "../../../Middleware/averageRating.js";

const RatingSummary = ({ ratings}) => {
  // const [avgRating, setAvgRating] = useState(0);

  const avgRating = averageRating(ratings)
  console.log(avgRating)

////////////////////////////////////////////////////////
  return (
    <Box>
    {/* //    <Rating */}
    {/* //       name="Item Review"
    //       value={rating}
    //       precision={0.25}
    //       size='small'
    //       readOnly
    //     /> */}
    </Box>
  );
};

export default RatingSummary;