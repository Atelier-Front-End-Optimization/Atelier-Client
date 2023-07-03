import React from 'react';
import {useState} from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'

const ImageListComp = ({ photos }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
  {/* <Button onClick={handleOpen}>Open Modal</Button> */}
{/* <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
      <ImageList cols={1}>
        {photos.results.map((photo) => (
          <ImageListItem key={Math.random()}>
            <img src={photo.photos[0].url} alt={photo.name} />
          </ImageListItem>
        ))}
      </ImageList>
</Modal> */}
</div>
  );
};

export default ImageListComp;