//import Card from './Card.jsx';

function RelatedCard({product}) {

  return (
    <div className='basis-1/4'>
      <div>Related Card ID: {product.id}</div>
      <div>Related Card Name: {product.name}</div>
      <div>Related Card Category: {product.category}</div>
      <div>Related Card Price: {product.default_price}</div>
      <div>Related Card Rating: {product.average}</div>


    </div>
  )
}

export default RelatedCard;