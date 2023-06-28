import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RatingsReviews from './client/src/components/Ratings_Review/RatingsReviews.jsx';
import ReviewList from './client/src/components/Ratings_Review/Ratings_Review_Subcomponents/ReviewList.jsx';


describe('RatingsReviews.jsx', () => {
  it('Should render RatingsReviews component', () => {
    render(<RatingsReviews product_id={37311}/>);
    screen.debug();
  });
});

describe('ReviewList.jsx', () => {
  it('Should render ReviewList component', () => {
    render(<ReviewList reviews={[
      {
        body: "Worst ever",
        date: "2023-05-12T00:00:00.000Z",
        helpfulness: 0,
        photos: [null],
        rating: 2,
        recommend: false,
        response: null,
        review_id: 1279874,
        reviewer_name: "hello123",
        summary: "Hated it"
      },
      {
        body: "Worst ever",
        date: "2023-05-12T00:00:00.000Z",
        helpfulness: 0,
        photos: [null],
        rating: 2,
        recommend: false,
        response: null,
        review_id: 1279874,
        reviewer_name: "hello123",
        summary: "Hated it"
        }
    ]}/>);
    screen.debug();
  });
});