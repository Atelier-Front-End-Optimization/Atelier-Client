/* eslint-disable react/prop-types */
import { Slider, Box } from '@mui/material';

const ProductBreakdown = ({ characteristics }) => {


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
  ];
  const widthMarks = [
    {
      value: 1,
      label: 'Too narrow'
    },
    {
      value: 3,
      label: 'Perfect'
    },{
      value: 5,
      label: 'Too wide'
    }
  ];
  const comfortMarks = [
    {
      value: 1,
      label: 'Uncomfortable'
    },
    {
      value: 3,
      label: 'OK'
    },{
      value: 5,
      label: 'Perfect'
    }
  ];
  const qualityMarks = [
    {
      value: 1,
      label: 'Poor'
    },
    {
      value: 3,
      label: 'What I expected'
    },{
      value: 5,
      label: 'Perfect'
    }
  ];
  const lengthMarks = [
    {
      value: 1,
      label: 'Runs short'
    },
    {
      value: 3,
      label: 'Perfect'
    },{
      value: 5,
      label: 'Runs long'
    }
  ];
  const fitMarks = [
    {
      value: 1,
      label: 'Runs Short'
    },
    {
      value: 3,
      label: 'Perfect'
    },{
      value: 5,
      label: 'Runs long'
    }
  ];
////////////////////////////////////////////////////////
  return (
    characteristics ?

    <Box sx={{ justifyContent: 'center', marginLeft: 6, marginRight: 6 }}>

      {characteristics.Size ?
        <Slider
          aria-label="size"
          value={Number(characteristics.Size.value)}
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
              borderTop: '20px solid orange'
          }}}
        >
        </Slider>
      : ''}

      {characteristics.Width ?
        <Slider
          aria-label="width"
          value={Number(characteristics.Width.value)}
          marks={widthMarks}
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
              borderTop: '20px solid orange'
          }}}
        >
        </Slider>
      : ''}

      {characteristics.Comfort ?
        <Slider
          aria-label="comfort"
          value={Number(characteristics.Comfort.value)}
          marks={comfortMarks}
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
              borderTop: '20px solid orange'
          }}}
        >
        </Slider>
      : ''}

      {characteristics.Quality ?
        <Slider
          aria-label="quality"
          value={Number(characteristics.Quality.value)}
          marks={qualityMarks}
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
              borderTop: '20px solid orange'
          }}}
        >
        </Slider>
      : ''}

      { characteristics.Length ?
        <Slider
          aria-label="length"
          value={Number(characteristics.Length.value)}
          marks={lengthMarks}
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
              borderTop: '20px solid orange'
          }}}
        >
        </Slider>
      : ''}

      {characteristics.Fit ?
        <Slider
          aria-label="fit"
          value={Number(characteristics.Fit.value)}
          marks={fitMarks}
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
              borderTop: '20px solid orange'
          }}}
        >
        </Slider>
      : ''}


    </Box>

    : ''
  );
};

export default ProductBreakdown;