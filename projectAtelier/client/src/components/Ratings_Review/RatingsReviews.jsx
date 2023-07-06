/* eslint-disable react/prop-types */
import NewReview from './Ratings_Review_Subcomponents/NewReview.jsx';
import ProductBreakdown from './Ratings_Review_Subcomponents/ProductBreakdown.jsx';
import ReviewBreakdown from './Ratings_Review_Subcomponents/ReviewBreakdown.jsx';
import SortOptions from './Ratings_Review_Subcomponents/SortOptions.jsx';
import ReviewList from './Ratings_Review_Subcomponents/ReviewList.jsx';
import filterReviews from '../../Middleware/filterReviews.js';
import { Button, Stack, Box } from '@mui/material';
import {useEffect, useState} from 'react';
import axiosConfig from '../../Middleware/axiosConfig.js';
import axios from 'axios';


const RatingsReviews = ({ product_id, product_name }) => {

  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [reviewRenders, setReviewRenders] = useState(2);
  const [canRenderMoreRevues, setCanRenderMoreRevues] = useState(true);
  const [metaData, setMetaData] = useState({});
  const [sorting, setSorting] = useState('relevant');
  const [numOfReviews, setNumOfReviews] = useState(0);
  const [filters, setFilters] = useState({
    fiveStars: false,
    fourStars: false,
    threeStars: false,
    twoStars: false,
    oneStars: false
  });
  //////////////////////////////////////////////////////////////////////

  const getReviews = async (
        product_id,
        numOfRenders = reviewRenders,
        reRender = false,
        count = 1000,
        page = null
      ) => {
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
      const filteredReviews = filterReviews(data.results, filters);
      setNumOfReviews(filteredReviews.length);
      setAllReviews(filteredReviews)
      return (reRender ?
        filteredReviews
      : setReviews(filteredReviews.slice(0, numOfRenders))
      )
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!product_id) return;
    setSorting('relevant');
    setFilters({
      fiveStars: false,
      fourStars: false,
      threeStars: false,
      twoStars: false,
      oneStars: false
    })
    getReviews(product_id, 2)
    getMetaData(product_id)
    setReviewRenders(4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product_id]);

  useEffect(() => {
    if (!product_id) return;
    getReviews(product_id, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  useEffect(() => {
    if (!product_id) return;
    getReviews(product_id, 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const getMetaData = async (product_id) => {
    const config ={
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      },
      params: {
        product_id: product_id
      }
    };
    try {
      const metaDataRes = await axios.get(
        axiosConfig.url + '/reviews/meta',
        config
      );
      const {data} = metaDataRes;
      setMetaData(data);
    } catch (err) {
      console.error(err);
    }
  };

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
      <Stack direction='row'>
        <Box
          style={{
            marginLeft: '20px',
            marginBottom: '10px'
          }}
        >
          <h4>RATINGS & REVIEWS</h4>
          {
            Object.values(filters).includes(true) ?
              <div>
                <h4
                  style={{
                    marginLeft: '10px',
                    marginBottom: '10px'
                  }}
                >
                  Applied filters: {
                  filters.fiveStars ?
                    '5 star '
                  : ''
                  }
                  {
                  filters.fourStars ?
                    '4 star '
                  : ''
                  }
                  {
                  filters.threeStars ?
                    '3 star '
                  : ''
                  }
                  {
                  filters.twoStars ?
                    '2 star '
                  : ''
                  }
                  {
                  filters.oneStars ?
                    '1 star '
                  : ''
                  } reviews
                </h4>
                <Button
                  style={{
                    marginLeft: '20px',
                    marginBottom: '25px'
                  }}
                  size='small'
                  variant='text'
                  onClick={
                    () => {
                    setFilters({
                    fiveStars: false,
                    fourStars: false,
                    threeStars: false,
                    twoStars: false,
                    oneStars: false
                    })
                  }
                }
                >
                  Remove all filters
                </Button>
              </div>
            : ''
          }
          <ReviewBreakdown
            allReviews={allReviews}
            metaData={metaData}
            filters={filters}
            setFilters={setFilters}
          />
          {/* <ProductBreakdown/> */}
        </Box>
        <Box
          style={{
              marginLeft: '20px',
              marginBottom: '10px'
          }}
        >
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
          <Stack
            direction='row'
          >
            { canRenderMoreRevues ?
              <div>
                <Button
                  style={{
                    marginLeft: '30px',
                    marginRight: '30px',
                    marginBottom: '50px'
                  }}
                  variant='outlined'
                  size='large'
                  onClick={getMoreReviews}
                >
                  More Reviews
                </Button>
              </div>
            : ''}
            <NewReview
              product_id={product_id}
              product_name={product_name}
            />
          </Stack>
        </Box>
      </Stack>
    </section>
  );
};

export default RatingsReviews;