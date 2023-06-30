import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

const ProductModal = ({ stylePhoto }) => {
  return (
    <Box
      component="img"
      sx={{
        height: '500px',
        width: '850px',
      }}
      alt="Product Image"
      src={stylePhoto}
    />
  );
};

export default ProductModal;
