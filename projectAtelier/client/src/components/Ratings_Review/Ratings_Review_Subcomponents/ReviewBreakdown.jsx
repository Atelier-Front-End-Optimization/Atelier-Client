/* eslint-disable react/prop-types */
import RatingSummary from './RatingSummary.jsx'
import RatingPercentage from './RatingPercentage.jsx'
import RatingFilter from './RatingFilter.jsx'
import {useEffect, useState} from 'react';

const ReviewBreakdown = ({ allReviews }) => {


////////////////////////////////////////////////////////
  return (
    <div>
      <RatingSummary />
      <RatingPercentage
        allReviews={allReviews}
      />
      <RatingFilter />
    </div>
  );
};

export default ReviewBreakdown;