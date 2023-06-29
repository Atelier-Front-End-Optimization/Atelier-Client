/* eslint-disable react/prop-types */
import NewReview from './Ratings_Review_Subcomponents/NewReview.jsx';
import ProductBreakdown from './Ratings_Review_Subcomponents/ProductBreakdown.jsx';
import ReviewBreakdown from './Ratings_Review_Subcomponents/ReviewBreakdown.jsx';
import SortOptions from './Ratings_Review_Subcomponents/SortOptions.jsx';
import ReviewList from './Ratings_Review_Subcomponents/ReviewList.jsx';
import {useEffect, useState} from 'react';
import axiosConfig from '../../Middleware/axiosConfig.js';
import axios from 'axios';


const RatingsReviews = ({ product_id }) => {

  const [reviews, setReviews] = useState([]);
  const [reviewRenders, setReviewRenders] = useState(4);
  const [canRenderMoreRevues, setCanRenderMoreRevues] = useState(true);
  ///////////////////////////////////////////////////////////////////////////////////////

  const getReviews = async (product_id, sort = null, count = null, page = null, reRender = false) => {
    const config ={
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      },
      params: {
        page: page,
        count: count,
        sort: sort,
        product_id: product_id
      }
    };
    try {
      const reviewRes = await axios.get(
        axiosConfig.url + '/reviews',
        config
      );
      const {data} = reviewRes;
      return (reRender ? data.results : setReviews(data.results))
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!product_id) return;
    getReviews(product_id, '', 2, null);
    setReviewRenders(4);
  }, [product_id]);

  const getMoreReviews = async () => {
    try {
      const moreReviews = await getReviews(product_id, null, reviewRenders + 1, null, true);
      if (moreReviews.length <= reviewRenders) {
        setCanRenderMoreRevues(false);
        setReviews(moreReviews);
      } else {
        moreReviews.pop();
        setReviews(moreReviews);
        setReviewRenders(reviewRenders + 2);
      }

    } catch (err) {
      console.error(err);
    }
  };

  const upvoteHelpful = async (review_id) => {
    const config ={
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      },
      params: {
        review_id:review_id
      }
    };
    try {
      const helpfulRes = await axios.put(
        axiosConfig.url + `/reviews/:${review_id}/helpful`,
        null,
        config
      );
      ///////////////////////////////////////
      console.log('RESP FROM API: ', helpfulRes)
      ///////////////////////////////////////
    } catch (err) {
      console.error(err);
      return err;
    }
  };

////////////////////////////////////////////////////////
  return (
    <section>
      <ReviewBreakdown/>
      <ProductBreakdown/>
      <SortOptions/>
      <ReviewList reviews={reviews} getMoreReviews={getMoreReviews} canRenderMoreRevues={canRenderMoreRevues} upvoteHelpful={upvoteHelpful}/>
      <NewReview/>
    </section>
  );
};

export default RatingsReviews;