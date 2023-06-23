// import React from 'react'
// import ReactDOM from 'react-dom/client'
import RelatedCard from './RelatedCard.jsx';


function RelatedProducts({productId, setProduct}) {
  return (
    <div>
      <p>Related Products bb</p>
      <div>Product ID: {productId}</div>
      <h4>Related Products</h4>
      <RelatedCard productId={productId}/>
    </div>

  );
}

export default RelatedProducts;