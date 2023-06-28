import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import RelatedCard from './RelatedCard.jsx';
import averageRating from '../../../Middleware/averageRating.js';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function RelatedList({currentProduct, setProduct}) {
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  //get all related id's to current product
  useEffect(() => {
    if (!!currentProduct.id) {
      axios.get(axiosConfig.url + '/products/' + currentProduct.id + '/related', axiosConfig).then((response) => {
        setRelatedIDs(response.data);
        setRelatedProducts([]);
        }).catch((err) => {
          console.log('GET RELATED ID ERROR ', err);
        })

    }
},[currentProduct])

//get all relevant info about each related id
useEffect(() => {
    relatedIDs.forEach((product) => {
      let options = axiosConfig;
      options.params ={};
      options.params.product_id = product;
      axios.get(options.url + '/reviews/meta', options).then((response) => {
        let average = averageRating(response.data.ratings);
        return Number(average);
      }).then((average) => {
        axios.get(axiosConfig.url + '/products/' + product, axiosConfig).then((res) => {
          res.data.average = average;
          setRelatedProducts(relatedProducts => [...relatedProducts, res.data]);
        }).catch((err) => {
          console.log('GET RELATED PRODUCTS ERROR ', err);
        })
      })
    })
  }, [relatedIDs])

  //set the current product when a related card is clicked
  function handleClick(id) {
    axios.get(axiosConfig.url + '/products/' + id, axiosConfig).then((response) => {
      setProduct(response.data);
    })
  }
//find maxScroll and scroll functions
  const ref = useRef(null);
  let scrolled = 0;
  let maxScroll = Math.ceil((relatedProducts.length - 4) / 2);
  function scrollRight() {
    if (scrolled < maxScroll * 500) {
      scrolled = scrolled + 500;
      ref.current.scroll({left: scrolled, behavior: 'smooth'})
    }
  }
  function scrollLeft() {
    if (scrolled > 0) {
      scrolled = scrolled - 500;
      ref.current.scroll({left: scrolled, behavior: 'smooth'})
    }
  }
//used id's array
let usedIds = [];

  return (
    <div>
      <div>Related List</div>
        <Button onClick = {scrollLeft}>Scroll Left</Button>
        <Button onClick = {scrollRight}>Scroll Right</Button>
        <Stack ref={ref} scrollbehavior='smooth' direction='row' spacing={2} alignItems="center" sx={[{maxWidth: '100%', overflowX: 'hidden', '&::-webkit-scrollbar':{ width:0}, bgcolor:'ghostwhite', display: 'flex'}]}>
            {relatedProducts.map((relatedProduct) => {
              if (!usedIds.includes(relatedProduct.id) && (relatedProduct.id !== currentProduct.id)) {
                usedIds.push(relatedProduct.id);
                return <RelatedCard key={relatedProduct.id} product={relatedProduct} currentProduct={currentProduct} handleClick={handleClick} />
              }
            })}
        </Stack>

    </div>
    );
  }

export default RelatedList;