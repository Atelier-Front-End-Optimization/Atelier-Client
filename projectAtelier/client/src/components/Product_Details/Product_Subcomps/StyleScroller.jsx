/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {useState} from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyleScroller = ({ productStylePhotos, setActiveIndex }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById('imageListContainer');
    if (container) {
      const scrollAmount = direction === 'up' ? -100 : 100;
      container.scrollTop += scrollAmount;
      setScrollPosition(container.scrollTop);
    }
  };

  const handleImageListClick = (index) => {
    setActiveIndex(index)
    console.log(index)
  }

  return (
    <div>
    <Button onClick={() => handleScroll('up')} style={{ position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }} id='scrollUp'>
      <ExpandLessIcon />
    </Button>
    <ImageList
      id="imageListContainer"
      sx={{ width: 67, height: 400, scrollBehavior: 'smooth', overflow:'hidden'
    }}
      cols={1}
      rowHeight={67}
    >
      {productStylePhotos.results.map((photo, index) => (
        <ImageListItem key={Math.random()} sx={{ marginBottom: '10px' }} onClick={(() => {
          handleImageListClick(index)
        })} style={{cursor:'pointer'}}>
          <img
            src={`${photo.photos[0].url}`}
            srcSet={`${photo.photos[0].url}`}
            alt={photo.name}
            loading="lazy"
            style={{ height: '10px', width: '100%', }}
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Button
      onClick={() => handleScroll('down')}
      style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }} id='scrollDown'
    >
      <ExpandMoreIcon />
    </Button>
  </div>
);
};

export default StyleScroller;