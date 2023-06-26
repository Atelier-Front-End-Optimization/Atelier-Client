//import Card from './Card.jsx';


function RelatedCard({product, handleClick}) {
  function relatedClick() {
    handleClick(product.id);
  }

  return (
    <div className='basis-1/4 border-solid border-2' onClick={relatedClick}>
      <div>Related Card Name: {product.name}</div>
      <div>Related Card Category: {product.category}</div>
      <div>Related Card Price: {product.default_price}</div>
      <div>Related Card Rating: {product.average}</div>


    </div>
  )
}

export default RelatedCard;