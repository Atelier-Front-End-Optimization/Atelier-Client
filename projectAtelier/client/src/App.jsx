/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axiosConfig from './Middleware/axiosConfig.js';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
import ProductDetails from './components/Product_Details/ProductDetails.jsx';
import RatingsReviews from './components/Ratings_Review/RatingsReviews.jsx';
import Header from './components/Header.jsx';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState({});
  const [stylePhoto, setStylePhoto] = useState(
    'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
  );
  const [mainRating, setMainRating] = useState(0);

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
          rating={mainRating}
        />
      </div>
      <div>
        <br></br>
        <RelatedProducts
          currentProduct={product}
          setProduct={setProduct}
          setStylePhoto={setStylePhoto}
        />
      </div>
      <div>
        <br></br>
        <RatingsReviews product_id={product.id} />
      </div>
    </div>
  );
}

export default App;
