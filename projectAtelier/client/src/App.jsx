import {useEffect, useState} from 'react';
import  axiosGet  from '../../apiRoutes.js';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Ratings_Reviews from './components/Ratings_Reviews.jsx';
import getConfig from '../../apiRoutes.js';
import axios from 'axios';

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
      <Ratings_Reviews productId={product.id}/>
      </div>
    </div>
  )
}

export default App