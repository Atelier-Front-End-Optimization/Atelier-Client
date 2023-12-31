/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
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
import StyleScroller from './Product_Subcomps/StyleScroller.jsx';
import getAvgRating from '../../Middleware/getAvgRating.js'
import Favorite from './Product_Subcomps/Favorite';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material/';
import Rating from '@mui/material/Rating';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const ProductDetails = ({
  productId,
  description,
  slogan,
  name,
  stylePhoto,
  setStylePhoto,
  product
}) => {
  const [productFeatures, setProductFeatures] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [productStylePhotos, setProductStylePhotos] = useState([]);
  const [styleName, setStyleName] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [productSku, setProductSku] = useState({})
  const [salePrice, setSalePrice] = useState(null)

  useEffect(() => {

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
          setStyleName(response.data.results[0].name);
          setProductStylePhotos(response.data);
          setStylePhoto(response.data.results[0].photos[0].url)
          setProductSku(response.data.results[0].skus)
        })
        .catch((error) => {
          console.log('ERROR IN GET PRODUCT STYLES');
        });
    };

    if (productId) {
      fetchProductStyles(productId);
      getAvgRating(productId)
      .then((result) => {
        setRating(result)
      });
    }
  }, [product]);

  if (productStyles && productStyles.length > 0) {
    // setStyleName(productStyles[0].name);
    // console.log(productStyles, 'STYLES');
    // console.log(productFeatures, 'FEATURES');
    // console.log(productStylePhotos, 'PHOTOS');
    // console.log('PRODUCT SKU', productSku)
    return (
      <Stack direction ="row"
        sx={{
          // width: '100%',
          // paddingLeft: '50px',
          // paddingRight: '50px',
          justifyContent: 'center',
          marginBottom: '0px',
        }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <ProductModal stylePhoto={stylePhoto} productStylePhotos={productStylePhotos} activeIndex={activeIndex} setActiveIndex={setActiveIndex} setSalePrice={setSalePrice} setStyleName={setStyleName}/>

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

             <Rating name="read-only" value={rating} precision={0.25} readOnly />
            <span> Read all reviews</span>
            <h3>{product.category.toUpperCase()}</h3>
            <h1>{name}</h1>

            {salePrice === null ?
            <p>{`$${productStyles[0].original_price}`}</p> : (
              <p><del>{`$${productStyles[0].original_price}`}</del> <span style={{ color: 'red' }}>{`$${salePrice}`}</span></p>
            )}

            <span>{`STYLE > ${styleName}`}</span>
            <ProductStyles
              styles={productStyles}
              photos={productStylePhotos}
              setStylePhoto={setStylePhoto}
              setStyleName={setStyleName}
              setActiveIndex={setActiveIndex}
              setProductSku={setProductSku}
              setSalePrice={setSalePrice}
            />
            <div>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
              >
                <div style={{ flexShrink: 0 }}>
                  <SizeSelect productSku={productSku} />
                  <QuantitySelect productSku={productSku} />
                  <Stack
                  direction="row"
                  alignItems="flex-end"
                  spacing={2}
                  style={{marginTop: '-175px'}}>
                    <AddBag />
                    <Favorite />
                  </Stack>
                </div>
              </Stack>
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={10}
              >
                <Button>
                <FacebookIcon style={{color: 'rgba(56, 37, 122, 0.48)'}} />
                </Button>
                <Button>
                <PinterestIcon style={{color: 'rgba(56, 37, 122, 0.48)'}} />
                </Button>
                <Button>
                <TwitterIcon style={{color: 'rgba(56, 37, 122, 0.48)'}} />
                </Button>
              </Stack>
            </div>
          </div>
        </Stack>
      </Stack>
    );
  }
};

export default ProductDetails;
