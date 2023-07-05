/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import {
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Stack, Link } from '@mui/material';

const RatingFilter = ({ ratingsData, ratings, filters, setFilters }) => {
  const [hover1Star, setHover1Star] = useState(false);
  const [hover2Star, setHover2Star] = useState(false);
  const [hover3Star, setHover3Star] = useState(false);
  const [hover4Star, setHover4Star] = useState(false);
  const [hover5Star, setHover5Star] = useState(false);

  const handleLinkClick = (e) => {
    let filter = e.target.getAttribute('filter')
    setFilters(vals => ({...vals, [filter]: !filters[filter]}))
  }

  ////////////////////////////////////////////////////////
  return (

    <div>
      { ratingsData.length > 0 ?
        <Stack
        style={{
          paddingTop: '2px',
          paddingBottom: '2px'
        }}
          direction='row'
        >
          <Stack
            style={{
              paddingTop: '90px'
            }}
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={1}
            sx={{
              height: "22px",
              width: '100px',
            }}
          >
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px',
                cursor:'pointer',
                backgroundColor: hover5Star ? 'rgba(155, 155, 275, 0.25)' : ''
              }}
              onMouseEnter={() => setHover5Star(true)}
              onMouseLeave={() => setHover5Star(false)}
            >
              <Link
                sx={{textDecoration: 'underline'}}
                filter='fiveStars'
                onClick={handleLinkClick}
              >
                5 stars
              </Link>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px',
                cursor:'pointer',
                backgroundColor: hover4Star ? 'rgba(155, 155, 275, 0.25)' : ''
              }}
              onMouseEnter={() => setHover4Star(true)}
              onMouseLeave={() => setHover4Star(false)}
            >
              <Link
                sx={{textDecoration: 'underline'}}
                filter='fourStars'
                onClick={handleLinkClick}
              >
                4 stars
              </Link >
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px',
                cursor:'pointer',
                backgroundColor: hover3Star ? 'rgba(155, 155, 275, 0.25)' : ''
              }}
              onMouseEnter={() => setHover3Star(true)}
              onMouseLeave={() => setHover3Star(false)}
            >
              <Link
                sx={{textDecoration: 'underline'}}
                filter='threeStars'
                onClick={handleLinkClick}
              >
                3 stars
              </Link>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px',
                cursor:'pointer',
                backgroundColor: hover2Star ? 'rgba(155, 155, 275, 0.25)' : ''
              }}
              onMouseEnter={() => setHover2Star(true)}
              onMouseLeave={() => setHover2Star(false)}
            >
              <Link
                sx={{textDecoration: 'underline'}}
                filter='twoStars'
                onClick={handleLinkClick}
              >
                2 stars
              </Link>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px',
                cursor:'pointer',
                backgroundColor: hover1Star ? 'rgba(155, 155, 275, 0.25)' : ''
              }}
              onMouseEnter={() => setHover1Star(true)}
              onMouseLeave={() => setHover1Star(false)}
            >
              <Link
                sx={{textDecoration: 'underline'}}
                filter='oneStars'
                onClick={handleLinkClick}
              >
                1 stars
              </Link>
            </div>
          </Stack>

          <Stack
            style = {{
              paddingTop: '0px',
              paddingBottom: '10px'
            }}
            sx={{
              height: "220px",
              width: '185px'
            }}
          >
            <Chart
                data={ratingsData}
                rotated
              >
              <BarSeries
                valueField="total"
                argumentField="stars"
                color='rgba(155, 155, 155, 0.25)'
              />
              <BarSeries
                valueField="votes"
                argumentField="stars"
                color='green'
              />
              <Animation />
            </Chart>

          </Stack>
          <Stack
            style={{
              paddingTop: '90px'
            }}
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={1}
            sx={{
              height: "22px",
              width: '100px',
            }}
          >
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <span>{ratings[5]}</span>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <span>{ratings[4]}</span>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <span>{ratings[3]}</span>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <span>{ratings[2]}</span>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <span>{ratings[1]}</span>
            </div>
          </Stack>
        </Stack>

      : ''}
    </div>
  );
};

export default RatingFilter;