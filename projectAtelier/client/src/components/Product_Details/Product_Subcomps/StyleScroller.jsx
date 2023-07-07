/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {useState} from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyleScroller = ({ productStylePhotos, setActiveIndex, setSalePrice, setStyleName }) => {
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
    <Button onClick={() => handleScroll('up')} style={{ position: 'absolute', top: '1%', left: '50%', transform: 'translate(-50%, -50%)' }} id='scrollUp'>
      <ExpandLessIcon />
    </Button>
    <ImageList
      id="imageListContainer"
      sx={{ width: 67, height: 375, scrollBehavior: 'smooth', overflow:'hidden'
    }}
      cols={1}
      rowHeight={67}
    >
      {productStylePhotos.results.map((photo, index) => (
        <ImageListItem key={Math.random()} sx={{ marginBottom: '10px' }} onClick={(() => {
          handleImageListClick(index)
          setSalePrice(photo.sale_price)
          setStyleName(photo.name)
        })} style={{cursor:'pointer'}}>
          {photo.photos[0].url !== null? (
          <img
            src={`${photo.photos[0].url}`}
            srcSet={`${photo.photos[0].url}`}
            alt={photo.name}
            loading="lazy"
            style={{ height: '10px', width: '100%', }}
          />
          ) : ( <img
            src={`$https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg`}
            srcSet={`https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg`}
            alt={photo.name}
            loading="lazy"
            style={{ height: '10px', width: '100%', }}
            />)}
        </ImageListItem>
      ))}
    </ImageList>
    <Button
      onClick={() => handleScroll('down')}
      style={{ position: 'absolute', top: '99%', left: '50%', transform: 'translate(-50%, -50%)' }} id='scrollDown'
    >
      <ExpandMoreIcon />
    </Button>
  </div>
);
};

export default StyleScroller;