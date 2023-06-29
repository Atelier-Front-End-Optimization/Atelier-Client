//import Card from './Card.jsx';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import {useEffect, useState} from 'react';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import axios from 'axios';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ComparisonModal from './ComparisonModal'
import convertPrice from '../../../Middleware/convertPrice.js';

function RelatedCard({product, currentProduct, handleClick}) {

  const [photo, setPhoto] = useState('');

  //gets and sets default photo for each card
  useEffect(() => {
    axios.get(axiosConfig.url + '/products/' + product.id + '/styles', axiosConfig).then((response) => {
      setPhoto(response.data.results[0].photos[0].thumbnail_url)
      for (let style of response.data.results) {
        if (style['default?']) {
          setPhoto(style.photos[0].thumbnail_url);
        }
      }
    }).catch((err) => {
      console.log('AXIOS GET ERROR GETTING PHOTOS ', err);
    })
  }, [])

  //change current product on click
  function relatedClick(event) {
    if (event.target.ariaHidden) {
      event.stopPropagation();
      return null;
    }
    handleClick(product.id);
  }
  //open comparison modal
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //format as currency
  let price = convertPrice(product.default_price);

  return (
      <Card onClick={relatedClick} sx={{cursor:'pointer', width:250, m:2, flexBasis:'auto', flexShrink: 0}}>
          <Box height='300px' width='100%' position='relative'>
            <Box onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleOpen();
              }} position='absolute' bottom='87%' left='85%' >
            <StarBorderIcon sx={{'&:hover': {color: 'red'}}}>Action</StarBorderIcon>
            <ComparisonModal open={open} close={handleClose} product={product} currentProduct={currentProduct}/>
            </Box>
            <img height='100%' width='100%' src={photo}></img>
          </Box>
          <Box p={1}>
            <div>{product.category}</div>
            <div>{product.name}</div>
            <div>{price}</div>
            <Rating readOnly value={product.average} precision={0.25}></Rating>
          </Box>
      </Card>


  )
}

export default RelatedCard;