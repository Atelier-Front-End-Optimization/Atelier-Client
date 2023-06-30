/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDescription from './Product_Subcomps/ItemDescription.jsx';
import AddBag from './Product_Subcomps/AddBag.jsx';
import FavoriteProduct from './Product_Subcomps/FavoriteProduct.jsx';
import ProductStyles from './Product_Subcomps/ProductStyles.jsx';
import ProductModal from './Product_Subcomps/ProductModal.jsx';
import QuantitySelect from './Product_Subcomps/QuantitySelect';
import SizeSelect from './Product_Subcomps/SizeSelect.jsx';
import Favorite from './Product_Subcomps/Favorite';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProductDetails = ({
  productId,
  description,
  slogan,
  name,
  stylePhoto,
  setStylePhoto,
}) => {
  const [productFeatures, setProductFeatures] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [productStylePhotos, setProductStylePhotos] = useState([]);

  useEffect(() => {
    const fetchProductFeatures = (productId) => {
      axios
        .get(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`,
          {
            headers: {
              Authorization: import.meta.env.VITE_API_TOKEN,
            },
          }
        )
        .then((response) => {
          setProductFeatures(response.data.features);
        })
        .catch((error) => {
          console.log('ERROR IN GET PRODUCT FEATURES');
        });
    };

    const fetchProductStyles = (productId) => {
      axios
        .get(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/styles`,
          {
            headers: {
              Authorization: import.meta.env.VITE_API_TOKEN,
            },
          }
        )
        .then((response) => {
          setProductStyles(response.data.results);
          setProductStylePhotos(response.data);
        })
        .catch((error) => {
          console.log('ERROR IN GET PRODUCT STYLES');
        });
    };

    if (productId) {
      fetchProductFeatures(productId);
      fetchProductStyles(productId);
    }
  }, [productId]);

  if (productStyles && productStyles.length > 0) {
    // console.log(productStyles, 'STYLES');
    // console.log(productFeatures, 'FEATURES');
    // console.log(productStylePhotos, 'PHOTOS');
    return (
      <Box
        sx={{
          width: '100%',
          paddingLeft: '50px',
          paddingRight: '50px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <ProductModal stylePhoto={stylePhoto} />
          <div>
            <ItemDescription slogan={slogan} description={description} />
          </div>
        </Stack>

        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          paddingLeft="75px"
        >
          <div>
            <h3>CATEGORY</h3>
            <h1>{name}</h1>
            <p>{`$${productStyles[0].original_price}`}</p>
            <span>{`STYLE > ${productStyles[0].name}`}</span>
            <ProductStyles
              styles={productStyles}
              photos={productStylePhotos}
              setStylePhoto={setStylePhoto}
            />
            <div>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
              >
                <div>
                  <SizeSelect />
                  <QuantitySelect />
                </div>
              </Stack>
            </div>
          </div>
        </Stack>
      </Box>
    );
  }
};

export default ProductDetails;
