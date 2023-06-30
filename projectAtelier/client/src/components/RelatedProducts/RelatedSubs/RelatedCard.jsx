//import Card from './Card.jsx';
import Box from '@mui/material/Box';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ComparisonModal from './ComparisonModal'
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import {useEffect, useState} from 'react';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import axios from 'axios';
import convertPrice from '../../../Middleware/convertPrice.js';
import ActionButton from './ActionButton.jsx';

function RelatedCard({product, currentProduct, handleClick, list, setProduct, products }) {
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
    if (event.target.ariaHidden || event.target.tagName === 'path') {
      event.stopPropagation();
      return null;
    }
    handleClick(product.id);
  }
  //delete from outfit


  //format as currency
  let price = convertPrice(product.default_price);

  return (
      <Card onClick={relatedClick} sx={{cursor:'pointer', width:250, m:2, flexBasis:'auto', flexShrink: 0}}>
          <Box height='300px' width='100%' position='relative'>
            <ActionButton product={product} currentProduct={currentProduct} list={list} products={products} setProduct={setProduct}/>
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