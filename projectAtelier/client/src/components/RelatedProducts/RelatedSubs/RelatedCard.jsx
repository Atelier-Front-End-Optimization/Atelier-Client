//import Card from './Card.jsx';
import { Box } from '@mui/material/';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import axios from 'axios';
import convertPrice from '../../../Middleware/convertPrice.js';
import ActionButton from './ActionButton.jsx';
import getAvgRating from '../../../Middleware/getAvgRating.js';
import ImagesCarousel from './ImagesCarousel.jsx';
import defaultImage from '../../../Assets/default.jpg';

function RelatedCard({
  product,
  currentProduct,
  handleClick,
  list,
  setProduct,
  products,
}) {
  const [photo, setPhoto] = useState(defaultImage);
  const [photos, setPhotos] = useState([]);
  const [rating, setRating] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  //gets and sets default photo for each card
  useEffect(() => {
    axios
      .get(axiosConfig.url + '/products/' + product.id + '/styles', axiosConfig)
      .then((response) => {
        setPhoto(response.data.results[0].photos[0].thumbnail_url);
        for (let photo of response.data.results[0].photos) {
          setPhotos((photos) => [...photos, photo.thumbnail_url]);
        }
        for (let style of response.data.results) {
          if (style['default?']) {
            if (style.photos[0].thumbnail_url) {
              setPhoto(style.photos[0].thumbnail_url);
            } else {
              setPhoto(defaultImage);
            }
            setPhotos([]);
            for (let photo of style.photos) {
              if (photo.thumbnail_url) {
                setPhotos((photos) => [...photos, photo.thumbnail_url]);
              }
            }
          }
        }
      })
      .catch((err) => {
        console.log('AXIOS GET ERROR GETTING PHOTOS ', err);
      });

      //gets and sets average rating
      getAvgRating(product.id).then((average) => {
      setRating(average);
    }).catch((err) => {
      console.log('ERROR IN SETTING AVERAGE RATING ', err);
    })
  }, []);

  //change current product on click
  function relatedClick(event) {
    if (event.target.ariaHidden || event.target.tagName === 'path' || event.target.type === 'button' || event.target.className === 'tiny-image') {
      event.stopPropagation();
      return null;
    }
    handleClick(product.id);
  }

  //format as currency
  let price = convertPrice(product.default_price);

  //open close carousel on hover
  function handleHover() {
      setIsHovering(true);
  }
  function handleLeave() {
      setIsHovering(false);
  }

  //change thumbnail on click
  function imagesClick(photo) {
    setPhoto(photo);
  }

  return (
    <Card
      onClick={relatedClick}
      sx={{
        cursor: 'pointer',
        width: 300,
        m: 2,
        flexBasis: 'auto',
        flexShrink: 0,
      }}
    >
      <Box onMouseEnter={handleHover} onMouseLeave={handleLeave}
      height="300px" width="100%"
       position="relative">
        <ActionButton
          product={product}
          currentProduct={currentProduct}
          list={list}
          products={products}
          setProduct={setProduct}
          setIsHovering={setIsHovering}
        />
        <img height="100%" width="100%" src={photo}></img>
        {isHovering && photos.length > 0 && <ImagesCarousel onMouseDown={(e) => {
      e.stopPropagation();
      e.preventDefault();
    }}
    photos={photos} imagesClick={imagesClick}/>}
      </Box>
      <Box p={1}>
        <div style={{fontSize:'14px'}}>{product.category.toUpperCase()}</div>
        <div style={{fontSize:'20px'}}>{product.name}</div>
        <div style={{ fontSize:'18px'}}>{price}</div>
        <Rating readOnly value={rating} precision={0.25}></Rating>
      </Box>
    </Card>
  );
}

export default RelatedCard;
