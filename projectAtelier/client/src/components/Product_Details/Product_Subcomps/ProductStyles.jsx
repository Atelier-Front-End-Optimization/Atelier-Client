import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ProductDetails from '../ProductDetails.jsx';

const ProductStyles = ({ styles, photos }) => {
  let mid = Math.floor(photos.length / 2);

  let firstHalf = photos.results[0].photos.slice(0, mid);
  let secondHalf = photos.results[0].photos.slice(mid);

  const photoIconClickHandler = (event) => {
    console.log('EVENT CLICK IN STYLES', event);
    console.log('EVENT TARGET CLICK IN STYLES', event.target);
  };

  return (
    <Box>
      <div>
        {firstHalf.map((photo) => (
          <IconButton
            key={Math.random()}
            className="circle-button"
            onClick={(event) => {
              console.log('click event recieved!');
              photoIconClickHandler(event);
            }}
          >
            <Avatar
              src={photo.url}
              alt="Product Image"
              className="circle-image"
              sx={{ width: 80, height: 80 }}
            />
          </IconButton>
        ))}
      </div>
      <div>
        {secondHalf.map((photo) => (
          <IconButton key={Math.random()} className="circle-button">
            <Avatar
              src={photo.url}
              alt="Product Image"
              className="circle-image"
              sx={{ width: 80, height: 80 }}
            />
          </IconButton>
        ))}
      </div>
    </Box>
  );
};

export default ProductStyles;
