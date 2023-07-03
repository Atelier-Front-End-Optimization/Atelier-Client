import { useState, useEffect } from 'react';
import { Box, Modal, IconButton } from '@mui/material';import ImageList from './ImageList.jsx'
import CropFreeIcon from '@mui/icons-material/CropFree';


const ProductModal = ({ stylePhoto }) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
    <Box
      component="img"
      sx={{
        height: '500px',
        width: '800px',
      }}
      alt="Product Image"
      src={stylePhoto}
    />
    <IconButton
      onClick={handleOpen}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1,
      }}
    >
      <CropFreeIcon />
    </IconButton>
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={stylePhoto}
          alt="Product Image"
          style={{
            marginTop: '90px',
            height: '500px',
            width: '1000px'
          }}
        />
      </Box>
    </Modal>
  </div>
  );
};

export default ProductModal;
