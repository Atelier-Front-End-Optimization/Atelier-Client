import React from 'react';
import {useState} from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyleScroller = ({ productStylePhotos }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById('imageListContainer');
    if (container) {
      const scrollAmount = direction === 'up' ? -100 : 100;
      container.scrollTop += scrollAmount;
      setScrollPosition(container.scrollTop);
    }
  };

  return (
    <div>
    <Button onClick={() => handleScroll('up')}>
      <ExpandLessIcon />
    </Button>
    <ImageList
      id="imageListContainer"
      sx={{ width: 100, height: 500, overflow: 'auto', scrollBehavior: 'smooth'
    }}
      cols={1}
      rowHeight={164}
    >
      {productStylePhotos.results.map((photo) => (
        <ImageListItem key={Math.random()} sx={{ marginBottom: '5px' }}>
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
    >
      <ExpandMoreIcon />
    </Button>
  </div>
);
};

export default StyleScroller;