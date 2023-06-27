import {useEffect, useState} from 'react';
import axios from 'axios';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import RelatedCard from './RelatedCard.jsx';
import averageRating from '../../../Middleware/averageRating.js';
import Stack from '@mui/material/Stack';


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
        return average;
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


  return (
    <div>
      <div>Related List</div>
        <Stack direction='row' spacing={2} alignItems="center" sx={[{maxWidth: '100%', overflowX: 'auto', bgcolor:'ghostwhite', display: 'flex'}]}>
            {relatedProducts.map((product) => {
              return <RelatedCard key={product.id} product={product} handleClick={handleClick} />
            })}
        </Stack>
    </div>
    );
  }

export default RelatedList;