// import React from 'react'
// import ReactDOM from 'react-dom/client'
import RelatedList from './RelatedSubs/RelatedList.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import axiosConfig from '../../Middleware/axiosConfig.js';
import averageRating from '../../Middleware/averageRating.js';

function RelatedProducts({
  currentProduct,
  setProduct,
  setRating,
  setStylePhoto,
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
      let options = axiosConfig;
      options.params = {};
      options.params.product_id = product;
      axios
        .get(options.url + '/reviews/meta', options)
        .then((response) => {
          let average = averageRating(response.data.ratings);
          setRating(Number(average));
          return Number(average);
        })
        .then((average) => {
          axios
            .get(axiosConfig.url + '/products/' + product, axiosConfig)
            .then((res) => {
              res.data.average = average;
              setRelatedProducts((relatedProducts) => [
                ...relatedProducts,
                res.data,
              ]);
            })
            .catch((err) => {
              console.log('GET RELATED PRODUCTS ERROR ', err);
            });
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
    <div>
      <div>Current Product ID: {currentProduct.id}</div>
      <RelatedList
        currentProduct={currentProduct}
        setProduct={setProduct}
        products={uniqueProds}
        list={'related'}
        relatedClick={relatedClick}
        setStylePhoto={setStylePhoto}
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
    </div>
  );
}

export default RelatedProducts;
