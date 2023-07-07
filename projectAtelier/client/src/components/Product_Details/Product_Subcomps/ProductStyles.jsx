/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Box } from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ProductDetails from '../ProductDetails.jsx';
import ProductModal from './ProductModal';

const ProductStyles = ({ styles, photos, setStylePhoto, setStyleName, setActiveIndex, setProductSku }) => {
  let mid = Math.floor(photos.results.length / 2);

  let firstHalf = photos.results.slice(0, mid);
  let secondHalf = photos.results.slice(mid);

  for (let i = 0; i < firstHalf.length; i++) {
    if(firstHalf[i].photos[0].url === null) {
      firstHalf[i].photos[0].url = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
    }
  }

  for (let j = 0; j < firstHalf.length; j++) {
    if(secondHalf[j].photos[0].url === null) {
      secondHalf[j].photos[0].url = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
    }
  }

  return (
    <Box id="styles">
      <div>
        {firstHalf.map((photo, index) => {
          return (
            <Button
              key={Math.random()}
              className="circle-button"
              onClick={(event) => {
                setStyleName(photo.name);
                setActiveIndex(index)
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
        {secondHalf.map((photo, index) => (
          <Button
            key={Math.random()}
            className="circle-button"
            onClick={(event) => {
              setStyleName(photo.name);
              setActiveIndex(index + mid)
              setProductSku(photo.skus)
              console.log(photo)
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
