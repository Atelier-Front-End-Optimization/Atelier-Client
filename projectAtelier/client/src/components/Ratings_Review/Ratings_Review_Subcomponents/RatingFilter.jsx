/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


const RatingFilter = ({ ratingsData }) => {

  console.log(ratingsData)

  ////////////////////////////////////////////////////////
  return (

    <div>
      { ratingsData.length > 0 ?
        <Chart
            data={ratingsData}
            rotated
          >
            {/* <ArgumentAxis /> */}

            <BarSeries
              valueField="votes"
              argumentField="stars"
            />
            <Animation />
          </Chart>
      : ''}
    </div>
  );
};

export default RatingFilter;