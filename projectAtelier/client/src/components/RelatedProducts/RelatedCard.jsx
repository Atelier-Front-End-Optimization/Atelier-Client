import {useEffect, useState} from 'react';
import axios from 'axios';
// import getConfig from '../../../../apiRoutes.js';
//import Card from './Card.jsx';

function RelatedCard({productId}) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    if (!productId) return;
    axios.get(getConfig.url + '/products/' + productId + '/related', getConfig).then((response) => {
      setRelatedProducts(response.data);
      })
},[productId])
  useEffect(() => {
    //console.log('teeeeest, ', relatedProducts);
  },[])
//console.log('ACTUALLY RELATED PRODUCTS ', relatedProducts);

  return (
    <div>
      <div>Related Card </div>
      <div></div>
      <div>Length: {relatedProducts.length}</div>
      {relatedProducts.map((product) => {
        return (
        <div>Product: {product.name}</div>
        );
      })}
    </div>
  )
}

export default RelatedCard;