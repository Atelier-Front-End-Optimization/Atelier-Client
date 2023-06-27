/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Box, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ReviewTile = ({ review, review: { body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary} }) => {
  // console.log('SINGLE REVIEW IN REVIEWTILE', review)
  // console.log(body);
  // console.log(summary);

  let formattedDate;
  if (date) {
    formattedDate = new Date(date)
    .toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'})
  }

////////////////////////////////////////////////////////
  return (
    <div>
      <div>
        <Rating name="Item Review" value={rating} precision={0.25} readOnly />
      </div>
      <div>
        <p>
          {reviewer_name}, {formattedDate}
        </p>
      </div>
      <div>
        <h2 style={{fontWeight: 'bold'},
          {width: 250},
          {whiteSpace: 'nowrap'},
          {overflow: 'hidden'},
          {textOverflow: 'ellipsis'}}
        >
          {summary}
        </h2>
      </div>
      <div>
        {body}
      </div>
      <div>
        {
          recommend ? 'I recommend this product' : ''
        }
      </div>
    </div>
  );
};

export default ReviewTile;