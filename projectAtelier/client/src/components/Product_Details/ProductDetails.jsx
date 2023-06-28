/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDescription from './Product_Subcomps/ItemDescription.jsx';
import AddBag from './Product_Subcomps/AddBag.jsx';
import FavoriteProduct from './Product_Subcomps/FavoriteProduct.jsx';
import ProductStyles from './Product_Subcomps/ProductStyles.jsx';
import ProductModal from './Product_Subcomps/ProductModal.jsx';
import QuantitySelect from './Product_Subcomps/QuantitySelect'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SizeSelect from './Product_Subcomps/SizeSelect.jsx';

const ProductDetails = ({productId, description, slogan}) => {

  const [productFeatures, setProductFeatures] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [productStylePhotos, setProductStylePhotos] = useState([]);


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

  if (productStyles && productStyles.length > 0) {
    // console.log(productStyles, 'STYLES')
    // console.log(productFeatures, 'FEATURES')
    // console.log(productStylePhotos, 'PHOTOS')
  return (
  <Box sx={{
    width: '100%',
    paddingLeft: '150px',
    paddingRight: '150px',
    display: 'flex',
    }}>

    <Stack
      container
      direction="column"
      justifyContent="flex-start"
      paddingLeft='50px'
      paddingRight='50px'
      alignItems="flex-start">
        <ProductModal photos={productStylePhotos}/>
        <div>
          <ItemDescription slogan={slogan} description = {description} />
        </div>
    </Stack>

    <Stack
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start">
        <div>
          <h1>{productStyles[0].name}</h1>
          <p>{`$${productStyles[0].original_price}`}</p>
          <ProductStyles styles={productStyles} photos={productStylePhotos}/>
          </div>

          <Stack
          container
          direction="row"
          justifyContent='flex-end'
          alignItems='flex-start'
          paddingLeft='25px'>
          <SizeSelect />
          <QuantitySelect />
          </Stack>

    </Stack>

  </Box>
    )}
};

export default ProductDetails;