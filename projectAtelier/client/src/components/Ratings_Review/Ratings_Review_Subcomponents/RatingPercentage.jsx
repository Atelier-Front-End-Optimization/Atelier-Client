/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';

const RatingPercentage = ({ recommended }) => {
  let recPercentage;
  if (recommended) {
    const totalReviews = Number(recommended.false) + Number(recommended.true);
    const numOfRecommendations = recommended.true;
    recPercentage = numOfRecommendations / totalReviews;
    recPercentage = Math.round(recPercentage * 100);
  }
  ////////////////////////////////////////////////////////
  return (
    <div>
      <h4>
        {
          recPercentage ?
            `${recPercentage}% of reviews recommend this product`
          : ''
        }
      </h4>
    </div>
  );
};

export default RatingPercentage;