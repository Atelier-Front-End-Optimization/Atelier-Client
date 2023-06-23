import {useEffect, useState} from 'react';
import axiosGet from './apiRoutes.js';
import RelatedProducts from './components/RelatedProducts.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import RatingsReviews from './components/Ratings_Review/RatingsReviews.jsx';

function App() {
  const [product, setProduct] = useState({});

useEffect(() => {
  axios.get(getConfig.url + '/products', getConfig).then((response) => {
    setProduct(response.data[0]);
  })
},[])

  return (
    <div>
      <p>I LIVE and env test</p><b></b>
      <p>{product.name}</p>
      <div>
      <ProductDetails productId={product.id} setProduct={setProduct}/>
      </div>
      <div>
      <RelatedProducts productId={product.id} setProduct={setProduct}/>
      </div>
      <div>
      <RatingsReviews product_id={product.id}/>
      </div>
    </div>
  )
}

export default App