//import Card from './Card.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import {useEffect, useState} from 'react';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import axios from 'axios';
import ActionButton from './ActionButton.jsx';

function RelatedCard({product, handleClick}) {
  const [photo, setPhoto] = useState('');

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
  function relatedClick() {
    handleClick(product.id);
  }

  //format as currency
  let USDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
  let price = USDollar.format(product.default_price);
  return (
      <Card onClick={relatedClick} sx={{cursor:'pointer', width:250, height:"100%", m:2, flexBasis:'auto', flexShrink: 0}}>
          <Box height='300px' width='100%' position='relative'>
            <ActionButton />
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