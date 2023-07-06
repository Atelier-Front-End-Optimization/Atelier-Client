/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axiosConfig from './Middleware/axiosConfig.js';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
import ProductDetails from './components/Product_Details/ProductDetails.jsx';
import RatingsReviews from './components/Ratings_Review/RatingsReviews.jsx';
import Header from './components/Header.jsx';
import axios from 'axios';
import { Box, Stack } from '@mui/material/';


function App() {
  const [product, setProduct] = useState({});
  const [stylePhoto, setStylePhoto] = useState(
    'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
  );



  useEffect(() => {
    axios
      .get(axiosConfig.url + '/products/37311', axiosConfig)
      .then((response) => {
        setProduct(response.data);
      }).catch((err) => {
        console.log('ERROR IN APP INIT AXIOS GET ', err);
      });
  }, []);

  return (
    <Box
      sx={{
        // display: 'flex',
        top:'50%',
        left:'50%',
        justifyContent: "center",
        margin: '1%'
      }}
    >
    <div>
      <header>
        <Header />
      </header>
      <div>
        <br></br>
        <ProductDetails
          description={product.description}
          slogan={product.slogan}
          productId={product.id}
          name={product.name}
          setProduct={setProduct}
          stylePhoto={stylePhoto}
          setStylePhoto={setStylePhoto}
          product={product}

        />
      </div>
      <div>
        <br></br>
        <Stack direction='column'>
        <RelatedProducts
          currentProduct={product}
          setProduct={setProduct}
        />
        </Stack>
      </div>
      <div>
        <br></br>
        <RatingsReviews
          product_id={product.id}
          product_name={product.name}
        />
      </div>
    </div>
    </Box>
  );
}

export default App;
