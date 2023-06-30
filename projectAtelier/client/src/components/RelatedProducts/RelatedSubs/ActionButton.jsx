import { Box } from '@mui/material/';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ComparisonModal from './ComparisonModal';
import { useState } from 'react';

function ActionButton({product, currentProduct, list, products, setProduct}) {

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function deleteOutfit(product) {
    setProduct(products.filter(p => p.id !== product.id));
  }

  if (list === 'related') {
    return (
      <Box position='absolute' bottom='87%' left='85%' >
    <StarBorderIcon onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleOpen();
      }} sx={{'&:hover': {color: 'red'}}}></StarBorderIcon>
    <ComparisonModal open={open} close={handleClose} product={product} currentProduct={currentProduct}/>
    </Box>
    )
  } else {
    return (
      <Box position='absolute' bottom='87%' left='85%' >
        <HighlightOffIcon className='delete-button' onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteOutfit(product);
      }} sx={{'&:hover': {color: 'red'}}}></HighlightOffIcon>
      </Box>
    );
  }
}

export default ActionButton;
