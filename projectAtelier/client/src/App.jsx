/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import axiosConfig from './axiosConfig.js';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
import ProductDetails from './components/Product_Details/ProductDetails.jsx';
import RatingsReviews from './components/Ratings_Review/RatingsReviews.jsx';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState({});

useEffect(() => {
  axios.get(axiosConfig.url + '/products', axiosConfig).then((response) => {
    setProduct(response.data[0]);
  })
},[])

  return (
    <div>
      <p>I LIVE and env test</p><b></b>
      <p>{product.name}</p>
      <div>
      <br></br><ProductDetails productId={product.id} setProduct={setProduct}/>
      </div>
      <div>
      <br></br><RelatedProducts productId={product.id} setProduct={setProduct}/>
      </div>
      <div>
      <br></br><RatingsReviews product_id={product.id}/>
      </div>
    </div>
  )
}

export default App