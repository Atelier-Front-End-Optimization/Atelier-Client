/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDescription from './Product_Subcomps/ItemDescription.jsx';
import AddBag from './Product_Subcomps/AddBag.jsx';
import FavoriteProduct from './Product_Subcomps/FavoriteProduct.jsx';
import ProductStyles from './Product_Subcomps/ProductStyles.jsx';
import ProductModal from './Product_Subcomps/ProductModal.jsx'
import Grid from '@mui/material/Grid'

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
<Grid
container
direction="row"
justifyContent="flex-start"
paddingLeft='150px'
alignItems="flex-start"
>

  <Grid
  container
  direction="column"
  justifyContent="flex-start"
  paddingRight='150px'
  alignItems="flex-end"
  >
  <h1>{productStyles[0].name}</h1>
  <ProductStyles styles={productStyles} photos={productStylePhotos}/>
  </Grid>

<Grid
container
direction="column"
justifyContent="flex-start"
paddingRight='150px'
alignItems="flex-start"
>
  <ProductModal photos={productStylePhotos} />
  <ItemDescription slogan={slogan} description = {description} />
  </Grid>

  </Grid>
  )}
};

export default ProductDetails;