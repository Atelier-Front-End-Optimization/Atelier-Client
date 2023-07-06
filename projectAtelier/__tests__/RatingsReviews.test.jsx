import { describe, expect, it, afterEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { getMoreReviews, upvoteHelpful, reportReview, setSorting } from './client/src/components/Ratings_Review/RatingsReviews.jsx';
import RatingsReviews from './client/src/components/Ratings_Review/RatingsReviews.jsx';
import ReviewList from './client/src/components/Ratings_Review/Ratings_Review_Subcomponents/ReviewList.jsx';
import ReviewTile from './client/src/components/Ratings_Review/Ratings_Review_Subcomponents/ReviewTile.jsx';
import {wasClicked} from './client/src/components/Ratings_Review/Ratings_Review_Subcomponents/ReviewTile.jsx';
import ReviewBreakdown from './client/src/components/Ratings_Review/Ratings_Review_Subcomponents/ReviewBreakdown.jsx';
import {setFilters, filters} from './client/src/components/Ratings_Review/Ratings_Review_Subcomponents/ReviewBreakdown.jsx';
import SortOptions from './client/src/components/Ratings_Review/Ratings_Review_Subcomponents/SortOptions.jsx';

const dummyDataResp = {
  "product": "37311",
  "page": 0,
  "count": 20,
  "results": [
      {
          "review_id": 1280235,
          "rating": 1,
          "summary": "Hedgehog",
          "recommend": true,
          "response": null,
          "body": "Hedgehog",
          "date": "2023-06-29T00:00:00.000Z",
          "reviewer_name": "Hedgehog",
          "helpfulness": 131,
          "photos": [
              {
                  "id": 2459056,
                  "url": "https://gregrichdvm.com/wp-content/uploads/2022/09/hedgehog.jpg"
              }
          ]
      },
      {
          "review_id": 1280178,
          "rating": 5,
          "summary": "squidward test review",
          "recommend": true,
          "response": null,
          "body": "just a test haha",
          "date": "2023-06-26T00:00:00.000Z",
          "reviewer_name": "squid",
          "helpfulness": 29,
          "photos": [
              {
                  "id": 2459021,
                  "url": "https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png"
              },
              {
                  "id": 2459022,
                  "url": "https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png"
              }
          ]
      },
      {
          "review_id": 1280234,
          "rating": 4,
          "summary": "Guitar",
          "recommend": true,
          "response": null,
          "body": "Guitar",
          "date": "2023-06-29T00:00:00.000Z",
          "reviewer_name": "Guitar",
          "helpfulness": 7,
          "photos": [
              {
                  "id": 2459055,
                  "url": "https://www.musicworks.co.nz/greentree/images/GLAT70A_LGE.jpg"
              }
          ]
      },
      {
          "review_id": 1280177,
          "rating": 5,
          "summary": "squidward test review",
          "recommend": true,
          "response": null,
          "body": "just a test haha",
          "date": "2023-06-26T00:00:00.000Z",
          "reviewer_name": "squid",
          "helpfulness": 3,
          "photos": [
              {
                  "id": 2459020,
                  "url": "https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png"
              },
              {
                  "id": 2459019,
                  "url": "https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png"
              }
          ]
      },
      {
          "review_id": 1277718,
          "rating": 5,
          "summary": "three images",
          "recommend": true,
          "response": null,
          "body": "will three images work? will three images work? will three images work? will three images work? will three images work? will three images work? will three images work? will three images work? will three images work? ",
          "date": "2022-12-08T00:00:00.000Z",
          "reviewer_name": "it does!",
          "helpfulness": 1,
          "photos": [
              {
                  "id": 2456775,
                  "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670527876/v8svj7dxsfm7i6mvb920.webp"
              },
              {
                  "id": 2456776,
                  "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670527877/kjrv3maw47ypnnozsmi3.png"
              },
              {
                  "id": 2456777,
                  "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670527876/h0qai9qbudt0x5vyx3wt.webp"
              }
          ]
      },
      {
          "review_id": 1277717,
          "rating": 3,
          "summary": "two images!",
          "recommend": false,
          "response": null,
          "body": "it is just one image! it is just one image! it is just one image! it is just one image! it is just one image! it is just one image! it is just one image! psych it's two",
          "date": "2022-12-08T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 1,
          "photos": [
              {
                  "id": 2456773,
                  "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670527723/u0kkoe1vulvatcktle1k.webp"
              },
              {
                  "id": 2456774,
                  "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670527723/y5uc81cysceve4gl66bi.webp"
              }
          ]
      },
      {
          "review_id": 1277715,
          "rating": 5,
          "summary": "image uploader",
          "recommend": false,
          "response": null,
          "body": "does it work? please say yes, if it does you get an xkcd comic for your trouble!",
          "date": "2022-12-08T00:00:00.000Z",
          "reviewer_name": "fan theories",
          "helpfulness": 1,
          "photos": [
              {
                  "id": 2456771,
                  "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670527314/tmxqzfza9livkp17wt1k.png"
              }
          ]
      },
      {
          "review_id": 1278842,
          "rating": 1,
          "summary": "shabba",
          "recommend": true,
          "response": null,
          "body": "Shabba Ranks (born Rexton Rawlston Fernando Gordon on 17 January 1966, in Sturgetown, St Ann's, Jamaica) is known as one of the most popular dancehall artists ever. Ranks gained his fame mainly by practicing dee jaying rather than singing tunes similarly to his contemporaries.",
          "date": "2023-02-07T00:00:00.000Z",
          "reviewer_name": "shabba",
          "helpfulness": 1,
          "photos": []
      },
      {
          "review_id": 1279218,
          "rating": 3,
          "summary": "THIS IS A TEST",
          "recommend": false,
          "response": null,
          "body": "THIS IS ALSO A TEST",
          "date": "2023-03-21T00:00:00.000Z",
          "reviewer_name": "TEST123 ",
          "helpfulness": 1,
          "photos": [
              {
                  "id": 2457753,
                  "url": "http://res.cloudinary.com/dmmzqckuu/image/upload/v1667506778/mwsvroray4fie6rakkqj.jpg"
              }
          ]
      },
      {
          "review_id": 1278354,
          "rating": 2,
          "summary": "this is a test of sending a review",
          "recommend": true,
          "response": null,
          "body": "this is body of review that I am sending as a test",
          "date": "2023-01-27T00:00:00.000Z",
          "reviewer_name": "Test123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1278217,
          "rating": 4,
          "summary": "Awesome Product",
          "recommend": true,
          "response": null,
          "body": "this is a testing review that i am writing to see if I can update the API",
          "date": "2023-01-02T00:00:00.000Z",
          "reviewer_name": "rendy",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1278215,
          "rating": 3,
          "summary": "Testing",
          "recommend": true,
          "response": null,
          "body": "hgdgassgfhsdhgfdjhgfjhgvjvndfvbfdsbdfgbdfbgfdbgfdbgfdbgfdbgsfafsafsafsaadfsafdsfsdgfsdgds",
          "date": "2023-01-02T00:00:00.000Z",
          "reviewer_name": "Rendy",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2457015,
                  "url": "https://res.cloudinary.com/dvijvlkad/image/upload/yinhkdlyuo6v5jkbo09k"
              }
          ]
      },
      {
          "review_id": 1277983,
          "rating": 1,
          "summary": "askjdlkajsd",
          "recommend": true,
          "response": null,
          "body": "asdjlkajsdlkjaslkdjlkasjdklajsldkjaslkdjlkasjlkasjdlkjaslkd",
          "date": "2022-12-16T00:00:00.000Z",
          "reviewer_name": "andylin1212",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456886,
                  "url": "https://res.cloudinary.com/db2wefzgf/image/upload/v1671150788/FECimages/duliylrdzqncubgndrqi.png"
              }
          ]
      },
      {
          "review_id": 1277918,
          "rating": 4,
          "summary": "It was pretty good",
          "recommend": true,
          "response": null,
          "body": "Must enter at least 50 characters to hit the minimum",
          "date": "2022-12-13T00:00:00.000Z",
          "reviewer_name": "maximosis",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456853,
                  "url": "http://res.cloudinary.com/de2i2agjs/image/upload/v1670950081/mfypkxxfruez1o5psmb9.png"
              }
          ]
      },
      {
          "review_id": 1277917,
          "rating": 4,
          "summary": "It was pretty good",
          "recommend": true,
          "response": null,
          "body": "Must meet at least 50 characters in order to submit a review",
          "date": "2022-12-13T00:00:00.000Z",
          "reviewer_name": "maximosis",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456852,
                  "url": "http://res.cloudinary.com/de2i2agjs/image/upload/v1670949461/i0buuakcqdskv9txgfdj.png"
              }
          ]
      },
      {
          "review_id": 1277916,
          "rating": 5,
          "summary": "It was pretty good",
          "recommend": true,
          "response": null,
          "body": "Must meet at least 50 character osasdfasdfasdfasdfasdf",
          "date": "2022-12-13T00:00:00.000Z",
          "reviewer_name": "maximosis",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1278028,
          "rating": 5,
          "summary": "Awesome stuff",
          "recommend": true,
          "response": null,
          "body": "This is just anotehr tet, the final test before we present. Hopefully it all works.",
          "date": "2022-12-16T00:00:00.000Z",
          "reviewer_name": "abc123",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277720,
          "rating": 4,
          "summary": "new test",
          "recommend": false,
          "response": null,
          "body": "Adding some almost looking legit reviews, you're welcome sir",
          "date": "2022-12-08T00:00:00.000Z",
          "reviewer_name": "calcium is good for da bones",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456783,
                  "url": "https://media2.giphy.com/media/duzpaTbCUy9Vu/giphy.gif?cid=ecf05e47nriwke77g5i1euu60gt4ffecfwl0g6ahsfsg975v&rid=giphy.gif&ct=g"
              }
          ]
      },
      {
          "review_id": 1277716,
          "rating": 4,
          "summary": "one image",
          "recommend": false,
          "response": null,
          "body": "it is just one image! it is just one image! it is just one image! it is just one image! it is just one image! it is just one image! it is just one image! ",
          "date": "2022-12-08T00:00:00.000Z",
          "reviewer_name": "modest",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2456772,
                  "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670527674/xlqdkpwyfv9lo41c5yps.jpg"
              }
          ]
      },
      {
          "review_id": 1277714,
          "rating": 3,
          "summary": "test",
          "recommend": false,
          "response": null,
          "body": "this is a new test to see if my reviews are no rerendring the proper way that they should when I switch the sort order",
          "date": "2022-12-08T00:00:00.000Z",
          "reviewer_name": "arethey",
          "helpfulness": 0,
          "photos": []
      }
  ]
}

const metaData = {
  ratings:{
    1: 91,
    2: 60,
    3: 145,
    4: 168,
    5: 422},

  recommended: {
    false: 170,
    true: 716
  }
}


describe('RatingsReviews.jsx', () => {
  it('Should render review section', () => {
    render(<RatingsReviews product_id={37311} product_name={'Camo Onesie'}/>);
    expect(screen.findByText('RATINGS & REVIEWS')).not.toBeNull;
    screen.debug();
  });
});

describe('ReviewList.jsx', () => {
  afterEach(() => {
    cleanup();
  });
  it('Should render list', () => {
    render(
    <ReviewList
      reviews={dummyDataResp.results}
      getMoreReviews={getMoreReviews}
      canRenderMoreRevues={true}
      upvoteHelpful={upvoteHelpful}
      reportReview={reportReview}
    />);
    expect(screen.findByText('Hedgehog')).not.toBeNull;
    screen.debug();
  });
});

describe('ReviewTile.jsx', () => {
  afterEach(() => {
    cleanup();
  });
  it('Should render first tile', () => {
    render(
    <ReviewTile
      key={dummyDataResp.results[0].review_id}
      review={dummyDataResp.results[0]}
      upvoteHelpful={upvoteHelpful}
      reportReview={reportReview}
  />);
    expect(screen.findByText('Hedgehog')).not.toBeNull;
    screen.debug();
  });
  it('Should render multiple tiles', () => {
    render(
      dummyDataResp.results.map((review) => {
        return (
          <ReviewTile
            key={review.review_id}
            review={review}
            upvoteHelpful={upvoteHelpful}
            reportReview={reportReview}
          />
        )
      }));
    expect(screen.findByText('Hedgehog')).not.toBeNull;
    expect(screen.findByText('squidward test review')).not.toBeNull;
    screen.debug();
  });
  // it('Should invoke handleHelpful on buton press', () => {
  //   render(
  //   <ReviewTile
  //     key={dummyDataResp.results[0].review_id}
  //     review={dummyDataResp.results[0]}
  //     upvoteHelpful={upvoteHelpful}
  //     reportReview={reportReview}
  // />);
  // screen.debug()
  //   const helpfulButton = screen.getByText('Yes (131)')
  //   fireEvent.click(helpfulButton)
  //   expect(wasClicked).to.equal(true);
  //   screen.debug()
  // });
});

describe('ReviewBreakdown.jsx', () => {
  afterEach(() => {
    cleanup();
  });
  it('Should render ReviewBreakdown component', () => {
    render(
      <ReviewBreakdown
      allReviews={dummyDataResp.results}
      metaData={metaData}
      filters={filters}
      setFilters={setFilters}
    />);
    screen.debug();
    expect(screen.findByText('81% of reviews recommend this product')).not.toBeNull;
    screen.debug();
  });

  describe('SortOptions.jsx', () => {
    afterEach(() => {
      cleanup();
    });
    it('Should render reviews by relevance', () => {
      render(
        <SortOptions
          numOfReviews={dummyDataResp.results.length}
          setReviewRenders={2}
          sorting={'relevant'}
          setSorting={setSorting}
      />);
      expect(screen.findByText('Relevance')).not.toBeNull;
      screen.debug();
    });
  });
});