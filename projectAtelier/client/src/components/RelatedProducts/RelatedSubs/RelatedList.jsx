import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import axiosConfig from '../../../Middleware/axiosConfig.js';
import averageRating from '../../../Middleware/averageRating.js';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import CardBundle from './CardBundle.jsx';



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

  //function to have carousel display 4 cards at a time
  function group(array) {
    let grouped= [];
    let temp = [];
    for (let i = 0; i < array.length; i++) {
      temp.push(array[i]);
      if ((temp.length === 4) || (i === array.length - 1)) {
        grouped.push(temp);
        temp = [];
      }
    }
    return grouped;
  }
  uniqueProds = group(uniqueProds);



  return (
    <div>
      <div>Related List</div>
        <Box>
          <Carousel fullHeightHover={false} navButtonsAlwaysVisible={true} swipe={false} animation='slide' autoPlay={false} cycleNavigation={false}>
              {uniqueProds.map((bundle, index) => {
                  return <CardBundle key={index} bundle={bundle} currentProduct={currentProduct} handleClick={handleClick} />
              })}
          </Carousel>
        </Box>

    </div>
    );
  }

export default RelatedList;