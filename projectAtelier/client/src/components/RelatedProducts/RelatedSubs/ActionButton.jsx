import { Box } from '@mui/material/';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ComparisonModal from './ComparisonModal';
import { useState } from 'react';

function ActionButton({ product, currentProduct, list, products, setProduct, setIsHovering }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setIsHovering(false);
    setOpen(false);
  }

  function deleteOutfit(product) {
    setProduct(products.filter((p) => p.id !== product.id));
  }

  if (list === 'related') {
    return (
      <Box position="absolute" bottom="87%" left="85%">
        <StarBorderIcon
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleOpen();
          }}
          sx={{ color: 'white','&:hover': { color: 'rgba(119, 104, 255, 0.68)'} }}
        ></StarBorderIcon>
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
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            deleteOutfit(product);
          }}
          sx={{ color: 'white', '&:hover': { color: 'rgba(119, 104, 255, 0.68)' } }}
        ></HighlightOffIcon>
      </Box>
    );
  }
}

export default ActionButton;
