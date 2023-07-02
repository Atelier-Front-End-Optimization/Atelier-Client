/* eslint-disable react/prop-types */
import RatingSummary from './RatingSummary.jsx'
import RatingPercentage from './RatingPercentage.jsx'
import RatingFilter from './RatingFilter.jsx'
import {useEffect, useState} from 'react';

const ReviewBreakdown = ({ allReviews, metaData:{ recommended, ratings }, metaData }) => {

////////////////////////////////////////////////////////
  return (
    <div>
      <RatingSummary
        ratings={ratings}
      />
      <RatingPercentage
        recommended={recommended}
      />
      <RatingFilter />
    </div>
  );
};

export default ReviewBreakdown;