import {useEffect, useState} from 'react';
import axios from 'axios';
import axiosConfig from '../../../axiosConfig.js';
import RelatedCard from './RelatedCard.jsx';

function RelatedList({productId, setProduct}) {
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  //get all related id's to current product
  useEffect(() => {
    console.log('PRODUCT ID  ', productId);
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
      axios.get(axiosConfig.url + '/products/' + product, axiosConfig).then((res) => {
        setRelatedProducts(relatedProducts => [...relatedProducts, res.data]);
      }).catch((err) => {
        console.log('GET RELATED PRODUCTS ERROR ', err);
      })
    })
  }, [relatedIDs])

  //set the current product when a related card is clicked
  // function handleClick(id) {
  //   console.log(id);
  //   axios.get(axiosConfig.url + '/products/' + id, axiosConfig).then((response) => {
  //     setProduct(response.data);
  //   })
  // }


  return (
    <div>
      <div className='font-semibold text-base'>Related List</div>
      {relatedProducts.map((product) => {
        return <RelatedCard key={product.id}product={product}/>
      })}

    </div>
    );
  }

export default RelatedList;