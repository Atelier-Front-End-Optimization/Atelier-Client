import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const ProductStyles = ({ styles, photos }) => {
  return (
    <Box>
      <ul>
        {photos.map((photo) => (
            <IconButton key={Math.random()} className="circle-button">
              <Avatar src={photo.url} alt="Product Image" className="circle-image"
              sx={{ width: 80, height: 80 }} />
            </IconButton>
        ))}
      </ul>
    </Box>
  );
};


export default ProductStyles;