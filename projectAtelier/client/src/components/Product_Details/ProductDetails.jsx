/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDescription from './Product_Subcomps/ItemDescription.jsx';
import AddBag from './Product_Subcomps/AddBag.jsx';
import FavoriteProduct from './Product_Subcomps/FavoriteProduct.jsx';
import ProductStyles from './Product_Subcomps/ProductStyles';

const ProductDetails = () => {

  const [initialProducts, setInitialProducts] = useState([]);
  const [productFeatures, setProductFeatures] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [productStylePhotos, setProductStylePhotos] = useState([]);



  useEffect(() => {

  const fetchProducts = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {
      headers: {
        Authorization: import.meta.env.VITE_API_TOKEN
      }
    })
    .then((response)=> {
      setInitialProducts(response.data);
    })
    .catch((error) => {
      // console.log('ERROR IN AXIOS GET PRODUCT DETAILS')
    })
  };
  fetchProducts();
}, [])

useEffect(() => {
  const fetchProductFeatures =  (id) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, {
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

  const fetchProductStyles = (id) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, {
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

  if (initialProducts.length > 0) {
    const id = initialProducts[0].id;
    fetchProductFeatures(id);
    fetchProductStyles(id);
  }
}, [initialProducts])

  if (initialProducts.length > 0) {
    // console.log(productStyles, 'STYLES')
    // console.log(productFeatures, 'FEATURES')
    // console.log(productStylePhotos, 'PHOTOS')
  return (
<div>

  <ItemDescription slogan={initialProducts[0].slogan} description = {initialProducts[0].description} />

  {productStyles.map((product) => {
   return <p id={product.id}>{product.name}</p>
  })}


  <AddBag />
  <FavoriteProduct />

</div>
  )}
};

export default ProductDetails;