/* eslint-disable react/prop-types */
import ReviewTile from './ReviewTile.jsx'
import { Button, Box } from '@mui/material';

const ReviewList = ({ reviews, getMoreReviews, canRenderMoreRevues, upvoteHelpful, reportReview}) => {

////////////////////////////////////////////////////////
  return (
    <div>
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
            width: 'auto',
            height: 'auto',
            maxHeight: 600,
            overflow: 'auto'
          }}
        >
          {reviews.map((review) => {
            return (
              <ReviewTile
                key={review.review_id}
                review={review}
                upvoteHelpful={upvoteHelpful}
                reportReview={reportReview}
              />
            )
          })}
      </Box>
    </div>
  );
};

export default ReviewList;