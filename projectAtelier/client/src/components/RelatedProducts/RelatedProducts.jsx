// import React from 'react'
// import ReactDOM from 'react-dom/client'
import RelatedList from './RelatedSubs/RelatedList.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import axiosConfig from '../../Middleware/axiosConfig.js';
import { Box } from '@mui/material/';

function RelatedProducts({
  currentProduct,
  setProduct,
}) {
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [outfit, setOutfit] = useState([]);

  //get all related id's to current product
  useEffect(() => {
    if (!!currentProduct.id) {
      axios
        .get(
          axiosConfig.url + '/products/' + currentProduct.id + '/related',
          axiosConfig
        )
        .then((response) => {
          setRelatedIDs(response.data);
          setRelatedProducts([]);
        })
        .catch((err) => {
          console.log('GET RELATED ID ERROR ', err);
        });
    }
  }, [currentProduct]);

  //get all relevant info about each related id
  useEffect(() => {
    relatedIDs.forEach((product) => {
          axios
            .get(axiosConfig.url + '/products/' + product, axiosConfig)
            .then((res) => {
              setRelatedProducts((relatedProducts) => [
                ...relatedProducts,
                res.data,
              ]);
            })
            .catch((err) => {
              console.log('GET RELATED PRODUCTS ERROR ', err);
            });
        });
  }, [relatedIDs]);

  function relatedClick(id) {
    axios
      .get(axiosConfig.url + '/products/' + id, axiosConfig)
      .then((response) => {
        setProduct(response.data);
      });
  }

  //unique-ify and group related products
  function removeDupes(array) {
    let uniques = [
      ...new Map(array.map((product) => [product.id, product])).values(),
    ];
    return uniques;
  }
  let uniqueProds = removeDupes(relatedProducts);

  //sort related products
  uniqueProds = uniqueProds.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <Box>
      <RelatedList
        currentProduct={currentProduct}
        setProduct={setProduct}
        products={uniqueProds}
        list={'related'}
        relatedClick={relatedClick}
      />
      <br></br>
      <RelatedList
        currentProduct={currentProduct}
        setProduct={setOutfit}
        products={outfit}
        list={'outfit'}
        relatedClick={relatedClick}
      />
      <br></br>
    </Box>
  );
}

export default RelatedProducts;
