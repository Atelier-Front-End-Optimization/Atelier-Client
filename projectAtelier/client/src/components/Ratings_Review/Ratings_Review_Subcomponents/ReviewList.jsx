/* eslint-disable react/prop-types */
import ReviewTile from './ReviewTile.jsx'
import { Button } from '@mui/material';
import {useEffect, useState} from 'react';

const ReviewList = ({ reviews, getMoreReviews }) => {

// console.log('REVIEWS IN LIST BEFORE MAPPING', reviews)
////////////////////////////////////////////////////////
  return (
    <div>
      <div>
        {reviews.map((review) => {
          return <ReviewTile key={review.review_id} review={review}/>
        })}
      </div>
      <Button
        variant='contained'
        size='small'
        onClick={getMoreReviews}
      >
        More Reviews
      </Button>
    </div>
  );
};

export default ReviewList;