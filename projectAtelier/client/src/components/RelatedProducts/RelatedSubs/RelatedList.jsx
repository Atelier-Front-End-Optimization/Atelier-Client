import {useEffect, useState} from 'react';
import axios from 'axios';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import averageRating from '../../../Middleware/averageRating.js';
import Box from '@mui/material/Box';
import RelatedCard from './RelatedCard.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../../index.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




function RelatedList({currentProduct, setProduct}) {
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

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

//unique-ify and group related products
  function removeDupes(array) {
    let uniques = [...new Map(array.map((product) => [product.id, product])).values()];
    return uniques;
  }
  let uniqueProds = removeDupes(relatedProducts);

  //sort related products
  uniqueProds = uniqueProds.sort((a, b) => {
    return a.id - b.id;
  })





  return (
    <div>
      <div>Related List</div>
        <Box className='carousel-box'>
          <Carousel itemClass='carousel-item' responsive={responsive}>
              {uniqueProds.map((relatedProduct) => {
                  return <RelatedCard key={relatedProduct.id} product={relatedProduct} currentProduct={currentProduct} handleClick={handleClick} />
              })}
          </Carousel>
        </Box>

    </div>
    );
  }

export default RelatedList;