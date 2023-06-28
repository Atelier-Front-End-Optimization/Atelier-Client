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
  console.log(reviews)

  const getReviews = async (product_id, sort = null, count = null, page = null) => {
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
      // console.log(data) ///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      setReviews(data.results)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!product_id) return;
    getReviews(product_id, null, 2, null);
  }, [product_id]);



////////////////////////////////////////////////////////
  return (
    <section>
      <ReviewBreakdown/>
      <ProductBreakdown/>
      <SortOptions/>
      <ReviewList reviews={reviews}/>
      <NewReview/>
    </section>
  );
};

export default RatingsReviews;