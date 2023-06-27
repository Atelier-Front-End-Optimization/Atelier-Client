import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import RelatedCard from './RelatedCard.jsx';
import averageRating from '../../../Middleware/averageRating.js';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function RelatedList({productId, setProduct}) {

  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  //get all related id's to current product
  useEffect(() => {
    if (!!productId) {
      axios.get(axiosConfig.url + '/products/' + productId + '/related', axiosConfig).then((response) => {
        setRelatedIDs(response.data);
        setRelatedProducts([]);
        }).catch((err) => {
          console.log('GET RELATED ID ERROR ', err);
        })

    }
},[productId])

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
  //scroll function
  const ref = useRef(null);
  /*
5 6 -> 1
7 8 -> 2
9 10 -> 3
5 6 -> 2
  */
  let scrolled = 0;
  //find maxScroll
  let maxScroll = Math.ceil((relatedProducts.length - 4) / 2);
  console.log('LENGTH ', relatedProducts.length);
  console.log('MAX SCROLL ', maxScroll);
  function scrollRight() {
    console.log(relatedProducts.length)
    if (scrolled < maxScroll * 500) {
      scrolled = scrolled + 500;
      ref.current.scroll({left: scrolled, behavior: 'smooth'})
    }
    console.log(scrolled);


  }
  function scrollLeft() {
    if (scrolled > 0) {
      scrolled = scrolled - 500;
      ref.current.scroll({left: scrolled, behavior: 'smooth'})
    }
  }

  return (
    <div>
      <div>Related List</div>
        <Button onClick = {scrollLeft}>Scroll Left</Button>
        <Button onClick = {scrollRight}>Scroll Right</Button>
        <Stack ref={ref} scrollbehavior='smooth' direction='row' spacing={2} alignItems="center" sx={[{maxWidth: '100%', overflowX: 'hidden', '&::-webkit-scrollbar':{ width:0}, bgcolor:'ghostwhite', display: 'flex'}]}>
            {relatedProducts.map((product) => {
              return <RelatedCard key={product.id} product={product} handleClick={handleClick} />
            })}
        </Stack>

    </div>
    );
  }

export default RelatedList;