//import Card from './Card.jsx';
import Box from '@mui/material/Box';
import Container from '@mui/system/Container';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

function RelatedCard({product, handleClick}) {
  function relatedClick() {
    handleClick(product.id);
  }

  return (

      <Card sx={{width:250, height:150, p:2, m:2, flexBasis:'auto', flexShrink: 0}}>
        <div onClick={relatedClick}>
          <div>Name: {product.name}</div>
          <div>Category: {product.category}</div>
          <div>Price: {product.default_price}</div>
          <div>Rating: {product.average}</div>
        </div>
      </Card>


  )
}

export default RelatedCard;