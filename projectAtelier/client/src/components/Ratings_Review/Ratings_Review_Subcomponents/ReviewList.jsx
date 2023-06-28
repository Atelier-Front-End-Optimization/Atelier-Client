/* eslint-disable react/prop-types */
import ReviewTile from './ReviewTile.jsx'
import { Button } from '@mui/material';
import {useEffect, useState} from 'react';

const ReviewList = ({ reviews, getMoreReviews, canRenderMoreRevues}) => {

////////////////////////////////////////////////////////
  return (
    <div>
      <div>
        {reviews.map((review) => {
          return <ReviewTile key={review.review_id} review={review}/>
        })}
      </div>
      { canRenderMoreRevues ?
        <div>
          <Button
            variant='contained'
            size='small'
            onClick={getMoreReviews}
          >
            More Reviews
          </Button>
        </div>
      : ''}
    </div>
  );
};

export default ReviewList;