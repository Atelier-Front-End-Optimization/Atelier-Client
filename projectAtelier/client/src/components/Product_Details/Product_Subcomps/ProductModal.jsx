import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

const ProductModal = ({ stylePhoto }) => {
  return (
    <Box
      component="img"
      sx={{
        height: '50%',
        width: '85%',
      }}
      alt="Product Image"
      src={stylePhoto}
    />
  );
};

export default ProductModal;
