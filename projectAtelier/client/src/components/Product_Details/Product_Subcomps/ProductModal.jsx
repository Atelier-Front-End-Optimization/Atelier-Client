/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import StyleScroller from './StyleScroller.jsx'

const ProductModal = ({ stylePhoto, productStylePhotos, activeIndex, setActiveIndex }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? productStylePhotos.results.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === productStylePhotos.results.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
  <IconButton onClick={handlePrevious} style={{ position: 'absolute', top: '50%', left: '110px', zIndex: 1 }}>
    <ArrowCircleLeftOutlinedIcon />
  </IconButton>
  <IconButton onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '70px', zIndex: 1 }}>
    <ArrowCircleRightOutlinedIcon />
  </IconButton>

  <img
    src={productStylePhotos.results[activeIndex].photos[0].url}
    alt={`Slide ${activeIndex + 1}`}
    style={{ height: '600px', width: '800px' }}
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

  <Modal open={open} onClose={handleClose} id="mainModal">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <img
        src={productStylePhotos.results[activeIndex].photos[0].url}
        alt={`Slide ${activeIndex + 1}`}
        style={{ marginTop: '90px', height: '500px', width: '1000px' }}
      />
    </div>
  </Modal>

  <div style={{ position: 'absolute', top: '40%', left: '7%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
    <StyleScroller productStylePhotos={productStylePhotos} setActiveIndex={setActiveIndex}/>
  </div>
</div>
  );
};


export default ProductModal;
