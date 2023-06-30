import { Box } from '@mui/material/';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ComparisonModal from './ComparisonModal';
import { useState } from 'react';

function ActionButton({ product, currentProduct, list }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (list === 'related') {
    return (
      <Box
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleOpen();
        }}
        position="absolute"
        bottom="87%"
        left="85%"
      >
        <StarBorderIcon sx={{ '&:hover': { color: 'red' } }}></StarBorderIcon>
        <ComparisonModal
          open={open}
          close={handleClose}
          product={product}
          currentProduct={currentProduct}
        />
      </Box>
    );
  } else {
    return (
      <Box position="absolute" bottom="87%" left="85%">
        <HighlightOffIcon
          sx={{ '&:hover': { color: 'red' } }}
        ></HighlightOffIcon>
      </Box>
    );
  }
}

export default ActionButton;
