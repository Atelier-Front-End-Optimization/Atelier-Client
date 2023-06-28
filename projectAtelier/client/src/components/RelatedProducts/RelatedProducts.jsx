// import React from 'react'
// import ReactDOM from 'react-dom/client'
import RelatedCard from './RelatedSubs/RelatedCard.jsx';
import RelatedList from './RelatedSubs/RelatedList.jsx';
import OutfitList from './RelatedSubs/OutfitList.jsx';


function RelatedProducts({currentProduct, setProduct}) {
  return (
    <div>
      <div className='font-bold text-xl'>Related Products bb</div>
      <div>Current Product ID: {currentProduct.id}</div>
      <div className='font-semibold text-lg'>Related Products</div>
      <RelatedList currentProduct={currentProduct} setProduct={setProduct}/><br></br>
      <OutfitList/>

    </div>

  );
}

export default RelatedProducts;