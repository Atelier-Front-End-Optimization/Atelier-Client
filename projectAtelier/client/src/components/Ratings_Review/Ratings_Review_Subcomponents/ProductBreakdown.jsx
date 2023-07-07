/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Slider, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProductBreakdown = ({ characteristics }) => {

  let relavantCharacteristics;
  if (characteristics) {
    relavantCharacteristics = Object.keys(characteristics)
    .map(el => el.toLowerCase());
  }
  console.log(characteristics);
  console.log(relavantCharacteristics);

const sizeMarks = [
  {
    value: 1,
    label: 'Too small'
  },
  {
    value: 3,
    label: 'Perfect'
  },{
    value: 5,
    label: 'Too large'
  }
]
////////////////////////////////////////////////////////
  return (
    <Box sx={{ justifyContent: 'center', marginLeft: 6, marginRight: 6 }}>
      <Slider
        aria-label="size"
        defaultValue={2.5}
        marks={sizeMarks}
        min={1}
        max={5}
        disabled
        track={false}
        sx={{

          '& .MuiSlider-thumb': {
            background: 'rgba(0,0,0,0)',
            borderRadius: 1,
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '20px solid gold'
        }}}
      >

      </Slider>
    </Box>
  );
};

export default ProductBreakdown;