import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ProductDetails from '../ProductDetails.jsx';
import ProductModal from './ProductModal';

const ProductStyles = ({ styles, photos, setStylePhoto }) => {
  let mid = Math.floor(photos.results.length / 2);

  let firstHalf = photos.results.slice(0, mid);
  let secondHalf = photos.results.slice(mid);

  const photoIconClickHandler = (event) => {
    setStylePhoto(event.target.src);
  };

  return (
    <Box>
      <div>
        {firstHalf.map((photo) => {
          return (
            <Button
              key={Math.random()}
              className="circle-button"
              onClick={(event) => {
                photoIconClickHandler(event);
              }}
            >
              <Avatar
                src={photo.photos[0].url}
                alt="Product Image"
                className="circle-image"
                sx={{ width: 80, height: 80 }}
              />
            </Button>
          );
        })}
      </div>
      <div>
        {secondHalf.map((photo) => (
          <Button
            key={Math.random()}
            className="circle-button"
            onClick={(event) => {
              photoIconClickHandler(event);
            }}
          >
            <Avatar
              src={photo.photos[0].url}
              alt="Product Image"
              className="circle-image"
              sx={{ width: 80, height: 80 }}
            />
          </Button>
        ))}
      </div>
    </Box>
  );
};

export default ProductStyles;
