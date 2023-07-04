/* eslint-disable react/prop-types */
import RatingSummary from './RatingSummary.jsx'
import RatingPercentage from './RatingPercentage.jsx'
import RatingFilter from './RatingFilter.jsx'
import {useEffect, useState} from 'react';

const ReviewBreakdown = ({ metaData, metaData:{ recommended, ratings } }) => {

  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    if (!metaData.ratings) return;
    let total = Number(recommended.false) + Number(recommended.true);
    setRatingsData([
      { stars: '1 stars', votes: Number(ratings['1']), total: total },
      { stars: '2 stars', votes: Number(ratings['2']), total: total },
      { stars: '3 stars', votes: Number(ratings['3']), total: total },
      { stars: '4 stars', votes: Number(ratings['4']), total: total },
      { stars: '5 stars', votes: Number(ratings['5']), total: total }
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