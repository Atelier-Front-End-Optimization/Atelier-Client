/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import axios from 'axios';

const ProductDetails = () => {

  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {

  const fetchProducts = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      }
    })
    .then((response)=> {
      // console.log(response.data, 'RESPONSE DATA IN PRODUCT DETAILS')
      setCurrentProducts(response.data);
    })
    .catch((error) => {
      // console.log('ERROR IN AXIOS GET PRODUCT DETAILS')
    })
  };

  fetchProducts();
}, [])

if (currentProducts.length > 0) {
  return (
<div>
  Current product id in Product Details {currentProducts[0].id}
</div>
);
}
};

export default ProductDetails;