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
  const [reviewRenders, setReviewRenders] = useState(2);
  const [canRenderMoreRevues, setCanRenderMoreRevues] = useState(true);
  const [sorting, setSorting] = useState('relevant');
  const [numOfReviews, setNumOfReviews] = useState(0);
  ///////////////////////////////////////////////////////////////////////////////////////

  const getReviews = async (product_id, numOfRenders = reviewRenders, reRender = false, count = 1000, page = null) => {
    const config ={
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      },
      params: {
        page: page,
        count: count,
        sort: sorting,
        product_id: product_id
      }
    };
    try {
      const reviewRes = await axios.get(
        axiosConfig.url + '/reviews',
        config
      );
      const {data} = reviewRes;
      setNumOfReviews(data.results.length);
      return (reRender ?
        data.results
      : setReviews(data.results.slice(0, numOfRenders))
      )
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!product_id) return;
    setSorting('relevant');
    getReviews(product_id)
    setReviewRenders(4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product_id]);

  useEffect(() => {
    if (!product_id) return;
    getReviews(product_id, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  const getMoreReviews = async () => {
    try {

      const moreReviews = await getReviews(product_id, reviewRenders, true);
      if (moreReviews.length > reviewRenders) {
        setReviews(moreReviews.slice(0, reviewRenders));
        setReviewRenders(reviewRenders + 2);
      } else {
        setCanRenderMoreRevues(false);
        setReviews(moreReviews);
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
      axios.put(
        axiosConfig.url + `/reviews/${review_id}/helpful`,
        null,
        config
      );
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  const reportReview = async (review_id) => {
    const config ={
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      },
      params: {
        review_id:review_id
      }
    };
    try {
      axios.put(
        axiosConfig.url + `/reviews/${review_id}/report`,
        null,
        config
      );
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
      <SortOptions
        numOfReviews={numOfReviews}
        setReviewRenders={setReviewRenders}
        sorting={sorting}
        setSorting={setSorting}
      />
      <ReviewList
        reviews={reviews}
        getMoreReviews={getMoreReviews}
        canRenderMoreRevues={canRenderMoreRevues}
        upvoteHelpful={upvoteHelpful}
        reportReview={reportReview}
      />
      <NewReview/>
    </section>
  );
};

export default RatingsReviews;