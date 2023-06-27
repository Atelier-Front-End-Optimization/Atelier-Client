/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDescription from './Product_Subcomps/ItemDescription.jsx';
import AddBag from './Product_Subcomps/AddBag.jsx';
import FavoriteProduct from './Product_Subcomps/FavoriteProduct.jsx';
import ProductStyles from './Product_Subcomps/ProductStyles';

const ProductDetails = ({productId, description, slogan}) => {

  // const [initialProducts, setInitialProducts] = useState([]);
  const [productFeatures, setProductFeatures] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [productStylePhotos, setProductStylePhotos] = useState([]);



  // useEffect(() => {

//   const fetchProducts = () => {
//     axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {
//       headers: {
//         Authorization: import.meta.env.VITE_API_TOKEN
//       }
//     })
//     .then((response)=> {
//       setInitialProducts(response.data);
//     })
//     .catch((error) => {
//       console.log('ERROR IN AXIOS GET PRODUCT DETAILS')
//     })
//   };
//   fetchProducts();
// }, [])

useEffect(() => {
  const fetchProductFeatures =  (productId) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`, {
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      }
    })
    .then((response) => {
      setProductFeatures(response.data.features)
    })
    .catch((error) => {
      console.log('ERROR IN GET PRODUCT FEATURES')
    })
  };

  const fetchProductStyles = (productId) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/styles`, {
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      }
    })
    .then((response) => {
      setProductStyles(response.data.results)
      setProductStylePhotos(response.data.results[0].photos)
    })
    .catch((error) => {
      console.log('ERROR IN GET PRODUCT STYLES')
    })
  }

  if (productId) {
    fetchProductFeatures(productId);
    fetchProductStyles(productId);
  }
}, [productId])

  if (productId) {
    console.log(productStyles, 'STYLES')
    console.log(productFeatures, 'FEATURES')
    console.log(productStylePhotos, 'PHOTOS')
  return (
<div>

  <ItemDescription slogan={slogan} description = {description} />

  {productStyles.map((product) => {
   return <p key={product.style_id}>{product.name}</p>
  })}


  <AddBag />
  <FavoriteProduct />

</div>
  )}
};

export default ProductDetails;