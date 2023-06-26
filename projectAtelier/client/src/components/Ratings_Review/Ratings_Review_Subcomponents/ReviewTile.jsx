/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';

const ReviewTile = ({ review, review: { body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary} }) => {
  // console.log('SINGLE REVIEW IN REVIEWTILE', review)
  // console.log(body);
  // console.log(summary);

////////////////////////////////////////////////////////
  return (
    <div>
      <div>
        Star Placeholder: {rating}
      </div>
      <div>
        <p style={{fontWeight: 'bold'}}>
          {summary}
        </p>
      </div>
    </div>
  );
};

export default ReviewTile;