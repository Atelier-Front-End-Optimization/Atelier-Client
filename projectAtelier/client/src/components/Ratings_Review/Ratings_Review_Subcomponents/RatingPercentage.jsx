/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';

const RatingPercentage = ({ allReviews }) => {
  let numOfRecommendations = 0;
  allReviews.forEach((review) => {
    if (review.recommend) numOfRecommendations++;
  });
  const totalReviews = allReviews.length;
  let recPercentage = numOfRecommendations / totalReviews;

  recPercentage = Math.round(recPercentage * 100);
  console.log(recPercentage);
////////////////////////////////////////////////////////
  return (
    <div>
      RatingPercentage
    </div>
  );
};

export default RatingPercentage;