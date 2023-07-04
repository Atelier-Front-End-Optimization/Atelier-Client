/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import {
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Stack, Link } from '@mui/material';

const RatingFilter = ({ ratingsData, ratings }) => {

  console.log(ratingsData)

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
                marginLeft: '25px'
              }}
            >
              <Link
                sx={{textDecoration: 'underline'}}
              >
                5 stars
              </Link>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <Link
                sx={{textDecoration: 'underline'}}>
                4 stars
              </Link >
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <Link sx={{textDecoration: 'underline'}}>
                3 stars
              </Link>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <Link sx={{textDecoration: 'underline'}}>
                2 stars
              </Link>
            </div>
            <div
              style={{
                marginTop: '22.5px',
                marginLeft: '25px'
              }}
            >
              <Link sx={{textDecoration: 'underline'}}>
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