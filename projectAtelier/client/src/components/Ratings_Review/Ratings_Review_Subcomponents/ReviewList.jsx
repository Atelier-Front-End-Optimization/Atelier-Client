/* eslint-disable react/prop-types */
import ReviewTile from './ReviewTile.jsx'
import {useEffect, useState} from 'react';

const ReviewList = ({ reviews }) => {

// console.log('REVIEWS IN LIST BEFORE MAPPING', reviews)
////////////////////////////////////////////////////////
  return (
    <div>
      {reviews.map((review) => {
        return <ReviewTile key={review.review_id} review={review}/>
      })}
    </div>
  );
};

export default ReviewList;