/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import {
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Box, Stack, Link } from '@mui/material';

const RatingFilter = ({ ratingsData }) => {

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
                valueField="votes"
                argumentField="stars"
              />
              <Animation />
            </Chart>

          </Stack>
        </Stack>

      : ''}
    </div>
  );
};

export default RatingFilter;