/* eslint-disable react/prop-types */
import RatingSummary from './RatingSummary.jsx'
import RatingPercentage from './RatingPercentage.jsx'
import RatingFilter from './RatingFilter.jsx'
import {useEffect, useState} from 'react';

const ReviewBreakdown = ({ metaData, metaData:{ recommended, ratings } }) => {


  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    if (!metaData.ratings) return;
    setRatingsData([
      { stars: '1 stars', votes: Number(ratings['1']) },
      { stars: '2 stars', votes: Number(ratings['2']) },
      { stars: '3 stars', votes: Number(ratings['3']) },
      { stars: '4 stars', votes: Number(ratings['4']) },
      { stars: '5 stars', votes: Number(ratings['5']) }
    ])
  }, [metaData])


  // console.log(ratingsData)
////////////////////////////////////////////////////////
  return (
    <div>
      <RatingSummary
        ratings={ratings}
      />
      <RatingPercentage
        recommended={recommended}
      />
      <RatingFilter
        ratingsData={ratingsData}
        ratings={ratings}
      />
    </div>
  );
};

export default ReviewBreakdown;